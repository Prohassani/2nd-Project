const express = require('express');
const cors = require('cors');
const path = require('path');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Generate prompts endpoint
app.post('/api/generate-prompts', async (req, res) => {
  try {
    const { videoScript } = req.body;

    if (!videoScript || videoScript.trim().length === 0) {
      return res.status(400).json({ error: 'Video script is required' });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key is not configured' });
    }

    const systemPrompt = `You are a professional AI that specializes in creating image generation prompts for video creators.

Your task is to analyze a video script and generate exactly 30 unique, diverse image prompts.

IMPORTANT REQUIREMENTS:
1. Generate exactly 30 prompts (numbered 1-30)
2. Each prompt must be optimized for 16:9 aspect ratio images
3. Each prompt must include "realistic style" or similar realistic image instructions
4. Each prompt should be 1-2 sentences long
5. Prompts should be diverse and relate to different scenes/themes from the video script
6. Each prompt should include visual details, mood, lighting, and composition
7. Format each prompt on a new line, starting with the number

Example format:
1. A realistic photograph of [scene description], shot in [style], with [lighting], cinematic quality, 16:9 aspect ratio
2. A realistic digital artwork showing [scene], [mood], [details], professional quality

Make sure prompts are varied and creative while staying relevant to the video content.`;

    const userMessage = `Analyze this video script and generate exactly 30 image prompts optimized for 16:9 format with realistic style:\n\n"${videoScript}"`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Using the free tier model
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const content = response.choices[0].message.content;

    // Parse prompts from the response
    const prompts = parsePrompts(content);

    if (prompts.length === 0) {
      return res.status(500).json({ error: 'Failed to parse prompts from AI response' });
    }

    res.json({
      success: true,
      count: prompts.length,
      prompts: prompts.slice(0, 30), // Ensure exactly 30
    });
  } catch (error) {
    console.error('Error generating prompts:', error);

    if (error.status === 401) {
      return res.status(401).json({ error: 'Invalid OpenAI API key' });
    }

    if (error.status === 429) {
      return res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
    }

    res.status(500).json({
      error: error.message || 'Failed to generate prompts',
    });
  }
});

// Parse prompts from AI response
function parsePrompts(text) {
  const lines = text.split('\n').filter(line => line.trim().length > 0);
  const prompts = [];

  for (const line of lines) {
    // Match lines that start with a number followed by a period or dot
    const match = line.match(/^\d+[\.\)]\s*(.+)$/);
    if (match) {
      const prompt = match[1].trim();
      if (prompt.length > 10) {
        prompts.push(prompt);
      }
    }
  }

  return prompts;
}

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Fallback - serve index.html for any unmatched routes (for SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to use the app`);
});

// Export for Vercel
module.exports = app;
