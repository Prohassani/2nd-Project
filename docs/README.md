# Pro Hassan's Custom GPT - Landing Page

A professional AI-powered landing page that transforms video scripts into 30 unique image generation prompts optimized for 16:9 aspect ratio with realistic styling.

## Features

✨ **AI-Powered** - Uses OpenAI's GPT-4o-mini model
🎬 **16:9 Format** - All prompts optimized for video aspect ratio
🖼️ **Realistic Style** - Professional image styling instructions
📋 **30 Prompts** - Get 30 unique prompts from one script
✅ **Easy to Use** - Simple, intuitive interface
🚀 **Fast Deployment** - Ready for Vercel

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **AI**: OpenAI API (GPT-4o-mini)
- **Deployment**: Vercel

## Prerequisites

Before you start, you need:
- Node.js 18+ installed
- OpenAI API key (free tier available at [platform.openai.com](https://platform.openai.com/account/api-keys))
- Git account
- Vercel account (for deployment)

## Local Setup

### 1. Clone or download this repository

```bash
cd custom-gpt-landing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Then edit `.env` and add your OpenAI API key:

```
OPENAI_API_KEY=sk-your-api-key-here
PORT=3000
NODE_ENV=development
```

**How to get OpenAI API Key:**
1. Go to https://platform.openai.com/account/api-keys
2. Click "Create new secret key"
3. Copy and paste it into `.env` file

### 4. Run locally

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
custom-gpt-landing/
├── public/
│   └── index.html           # Frontend HTML/CSS/JS
├── api/
│   └── index.js            # Express server & OpenAI integration
├── package.json            # Dependencies
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
├── vercel.json            # Vercel configuration
└── README.md              # This file
```

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit: Pro Hassan's Custom GPT"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pro-hassan-custom-gpt.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables:
   - `OPENAI_API_KEY`: Your OpenAI API key
5. Click "Deploy"

That's it! Your app will be live on Vercel.

## How It Works

1. User pastes video script into the textarea
2. Clicks "Generate 30 Image Prompts"
3. Express backend receives the script
4. OpenAI GPT-4o-mini processes the script
5. AI generates 30 unique prompts (16:9 format, realistic style)
6. Prompts display on the page with copy buttons
7. User can copy individual prompts or use them directly

## API Endpoints

### POST `/api/generate-prompts`

Generate image prompts from video script.

**Request:**
```json
{
  "videoScript": "Your video script here..."
}
```

**Response:**
```json
{
  "success": true,
  "count": 30,
  "prompts": [
    "A realistic photograph of...",
    "A realistic digital artwork showing...",
    ...
  ]
}
```

## Customization

### Change the model
Edit `api/index.js` and change:
```javascript
model: 'gpt-4o-mini' // Change to 'gpt-3.5-turbo' or 'gpt-4' if needed
```

### Adjust number of prompts
Edit the system prompt in `api/index.js` to request a different number.

### Change styling
Edit CSS in `public/index.html` - all styles are in the `<style>` tag.

## Free Tier Limitations

- OpenAI free tier has usage limits
- Requests are rate limited
- Keep prompt generation reasonable

## Troubleshooting

**"Invalid OpenAI API key"**
- Check your `.env` file has correct API key
- Make sure key starts with `sk-`

**"Rate limit exceeded"**
- Wait a few seconds and try again
- Free tier has limited requests per minute

**"Port already in use"**
- Change PORT in `.env` to another number (e.g., 3001)

## Support

For issues or questions:
1. Check the error message carefully
2. Verify OpenAI API key is correct
3. Make sure Node.js is installed: `node --version`
4. Check internet connection

## License

Open source - feel free to use and modify!

## Author

Pro Hassan's Custom GPT - 2026
