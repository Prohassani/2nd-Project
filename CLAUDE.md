# Pro Hassan's Custom GPT - Project Documentation

> AI-powered landing page that transforms video scripts into 30 unique image generation prompts optimized for 16:9 aspect ratio with realistic styling.

**Status:** ✅ Production Ready | **Version:** 1.0.0 | **Last Updated:** June 5, 2026

---

## 📋 Quick Links to Documentation

- **[Complete Setup Guide](./docs/SETUP_COMPLETE.md)** - Step-by-step deployment instructions
- **[Project README](./docs/README.md)** - Full technical documentation
- **[API Reference](#api-endpoints)** - Backend endpoints and usage
- **[Project Structure](#project-structure)** - File organization

---

## 🎯 Project Overview

### What is Pro Hassan's Custom GPT?

A professional web application that leverages OpenAI's GPT-4o-mini model to:
- Accept video scripts from users
- Analyze script content intelligently
- Generate 30 unique image generation prompts
- Optimize prompts for 16:9 aspect ratio
- Include realistic image styling instructions
- Provide easy copy-to-clipboard functionality

### Key Features

| Feature | Description |
|---------|-------------|
| 🤖 **AI-Powered** | Uses OpenAI GPT-4o-mini for intelligent prompt generation |
| 🎬 **16:9 Format** | All prompts optimized for video content aspect ratio |
| 🖼️ **Realistic Styling** | Professional image generation styling instructions |
| 📋 **30 Prompts** | Get 30 unique, diverse prompts per generation |
| ⚡ **Fast Processing** | Results in seconds, no complex setup |
| 📱 **Responsive Design** | Works perfectly on mobile, tablet, and desktop |
| 🎨 **Modern UI** | Beautiful gradient design with smooth animations |

---

## 📁 Project Structure

```
custom-gpt-landing/
├── api/
│   └── index.js                    # Express server + OpenAI integration
├── public/
│   └── index.html                  # Frontend (HTML/CSS/JS)
├── docs/
│   ├── README.md                   # Full technical documentation
│   └── SETUP_COMPLETE.md           # Step-by-step setup guide
├── package.json                    # Node.js dependencies
├── package-lock.json               # Dependency lock file
├── .env.example                    # Environment variables template
├── .env                            # Environment variables (local only)
├── .gitignore                      # Git ignore rules
├── vercel.json                     # Vercel deployment configuration
└── CLAUDE.md                       # This file - project documentation
```

---

## 🔧 Technical Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, glassmorphism
- **Vanilla JavaScript** - No framework dependencies, lightweight
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **OpenAI API** - AI model integration
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Deployment
- **Vercel** - Serverless platform (free tier)
- **GitHub** - Version control
- **Git** - Local version control

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- OpenAI API key (free tier available)
- GitHub account (for deployment)

### Local Development

```bash
# 1. Navigate to project
cd custom-gpt-landing

# 2. Install dependencies
npm install

# 3. Create .env file with your API key
# Copy from .env.example and add your OpenAI key

# 4. Start server
npm start

# 5. Visit http://localhost:3000
```

### Deploy to Vercel

See **[Complete Setup Guide](./docs/SETUP_COMPLETE.md)** for detailed deployment instructions.

---

## 📡 API Endpoints

### POST `/api/generate-prompts`

Generate image prompts from a video script.

**Request:**
```json
{
  "videoScript": "Your complete video script here..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "count": 30,
  "prompts": [
    "A realistic photograph of [scene 1], shot in [style], with [lighting], cinematic quality, 16:9 aspect ratio",
    "A realistic digital artwork showing [scene 2], [mood], [details], professional quality",
    ...
  ]
}
```

**Response (Error):**
```json
{
  "error": "Error description here"
}
```

**Status Codes:**
- `200` - Success
- `400` - Bad request (missing script)
- `401` - Invalid API key
- `429` - Rate limit exceeded
- `500` - Server error

---

## 🔐 Environment Variables

### Required Variables

```env
OPENAI_API_KEY=sk-your-api-key-here     # Your OpenAI API key
PORT=3000                                # Server port (default: 3000)
NODE_ENV=development                     # Environment (development/production)
```

### Getting Your API Key

1. Visit https://platform.openai.com/account/api-keys
2. Click "Create new secret key"
3. Copy the key (starts with `sk-`)
4. Add to `.env` file

**⚠️ Security Warning:** Never commit `.env` file to Git. It's already in `.gitignore`.

---

## 🎨 Frontend Architecture

### HTML Structure
- Navigation bar with logo and links
- Hero section with CTA button
- Features showcase grid
- Main app section with form
- Results display grid
- Footer

### CSS Features
- Gradient backgrounds
- Glassmorphism effects
- Smooth animations
- Responsive grid layouts
- Dark theme (slate colors)
- Mobile-first responsive design

### JavaScript Functionality
- Form submission handling
- API communication
- Loading states
- Error handling
- Copy-to-clipboard functionality
- Results rendering

---

## 🔌 Backend Architecture

### Express Server (`api/index.js`)

**Routes:**
- `GET /` - Serve index.html
- `GET /api/health` - Health check
- `POST /api/generate-prompts` - Generate image prompts
- Error handling and 404 responses

**Key Functions:**
- `generatePrompts()` - OpenAI integration
- `parsePrompts()` - Parse AI response into array
- CORS middleware for cross-origin requests

---

## 📊 How It Works (User Journey)

```
1. User visits landing page
   ↓
2. Sees features and benefits
   ↓
3. Scrolls to generator section
   ↓
4. Pastes video script
   ↓
5. Clicks "Generate 30 Image Prompts"
   ↓
6. Frontend sends POST request to /api/generate-prompts
   ↓
7. Backend receives script and validates
   ↓
8. Sends to OpenAI GPT-4o-mini API
   ↓
9. AI analyzes script and generates prompts
   ↓
10. Backend parses response into clean array
   ↓
11. Frontend receives 30 prompts
   ↓
12. Displays prompts with copy buttons
   ↓
13. User copies prompts to image generator
   ↓
14. Creates amazing images! 🎨
```

---

## 🧪 Testing

### Local Testing

```bash
# Start server
npm start

# Test in browser
# 1. Go to http://localhost:3000
# 2. Paste a sample video script
# 3. Click generate
# 4. Verify 30 prompts appear
# 5. Test copy functionality
```

### API Testing (using curl)

```bash
curl -X POST http://localhost:3000/api/generate-prompts \
  -H "Content-Type: application/json" \
  -d '{"videoScript": "Your test script here..."}'
```

---

## 🔄 Deployment Pipeline

### GitHub
1. Local code pushed to GitHub repository
2. All files tracked with Git
3. `.env` excluded via `.gitignore`

### Vercel
1. Connect GitHub repository
2. Set environment variables
3. Automatic deployment on push
4. Serverless function execution
5. Static file serving

### Architecture

```
User Browser
    ↓
Vercel CDN (static files)
    ↓
Express.js Serverless Function
    ↓
OpenAI API
```

---

## 💰 Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| OpenAI API | FREE (tier) | $5 free credits/month |
| Vercel | FREE | Unlimited deployments |
| GitHub | FREE | Public repositories |
| **Total** | **$0** | **Completely Free!** |

**Estimated Usage:**
- Per prompt generation: $0.001-0.005
- 100 generations: ~$0.10-0.50
- Free credits last months with normal usage

---

## 🛠️ Customization Guide

### Change Number of Prompts

Edit `api/index.js` systemPrompt:
```javascript
// Change from "exactly 30 prompts" to desired number
// Example: "exactly 50 prompts"
```

### Change AI Model

Edit `api/index.js`:
```javascript
model: 'gpt-4o-mini'        // Current (free tier)
// Options:
// model: 'gpt-3.5-turbo'   // Cheaper
// model: 'gpt-4'           // More powerful
```

### Customize Landing Page

Edit `public/index.html`:
- Colors: Search for `#60a5fa` and replace
- Fonts: Modify font-family in CSS
- Content: Update hero text and feature descriptions
- Layout: Adjust grid columns and spacing

### Add Features

Possible enhancements:
- User authentication
- Prompt history/database
- Export to CSV/PDF
- Batch processing
- Multiple language support
- Custom style selection
- Image preview integration

---

## 📚 Documentation Files

### docs/SETUP_COMPLETE.md
Complete step-by-step guide for:
- Getting OpenAI API key
- GitHub setup and push
- Vercel deployment
- Local testing
- Troubleshooting

**Use this for:** Deployment instructions

### docs/README.md
Full technical documentation including:
- Features overview
- Project structure
- Deployment instructions
- Customization options
- Troubleshooting
- API reference

**Use this for:** Technical reference

### CLAUDE.md (this file)
Project overview and architecture documentation including:
- Quick links to all docs
- Project structure
- Technical stack
- How it works
- API endpoints
- Customization guide

**Use this for:** Project understanding and navigation

---

## 🐛 Troubleshooting

### Common Issues

**"Invalid OpenAI API key"**
- Verify key starts with `sk-`
- Check for extra spaces in .env
- Regenerate key if needed

**"Port 3000 already in use"**
- Change PORT in .env
- Or kill process: `lsof -ti:3000 | xargs kill -9`

**"Module not found"**
- Run `npm install`
- Check node_modules exists

**"CORS error"**
- Check CORS is enabled in api/index.js
- Verify frontend and backend URLs

### Debug Mode

Enable verbose logging:
```javascript
// In api/index.js
console.log('Request received:', req.body);
console.log('API Response:', response);
```

---

## 📞 Support Resources

| Resource | Link |
|----------|------|
| **OpenAI Docs** | https://platform.openai.com/docs |
| **OpenAI API Key** | https://platform.openai.com/account/api-keys |
| **Vercel Docs** | https://vercel.com/docs |
| **Express.js** | https://expressjs.com |
| **GitHub Docs** | https://docs.github.com |

---

## 🎓 Learning Resources

### For Frontend Development
- MDN Web Docs
- CSS-Tricks
- JavaScript.info

### For Backend Development
- Express.js Official Docs
- Node.js Documentation
- RESTful API Design

### For AI/OpenAI
- OpenAI API Documentation
- GPT Models Overview
- Prompt Engineering Guide

---

## 📈 Next Steps & Future Enhancements

### Phase 2 Features
- [ ] User accounts and authentication
- [ ] Saved prompts history
- [ ] Export to CSV/PDF
- [ ] Batch processing
- [ ] Multiple language support
- [ ] Custom style templates

### Phase 3 Monetization
- [ ] Premium features
- [ ] Subscription plans
- [ ] API access for developers
- [ ] White-label solution

### Phase 4 Growth
- [ ] SEO optimization
- [ ] Social media integration
- [ ] Content marketing
- [ ] Partnership programs
- [ ] Mobile app (React Native)

---

## 📋 Project Checklist

### Development
- [x] Frontend UI designed and implemented
- [x] Backend API created
- [x] OpenAI integration complete
- [x] 30 prompt generation configured
- [x] 16:9 aspect ratio optimization
- [x] Error handling implemented
- [x] Environment configuration setup

### Documentation
- [x] README.md created
- [x] Setup guide created
- [x] CLAUDE.md created
- [x] API documentation
- [x] Troubleshooting guide

### Deployment
- [x] Git repository initialized
- [x] .gitignore configured
- [x] vercel.json configured
- [ ] GitHub repository created (YOUR STEP)
- [ ] Code pushed to GitHub (YOUR STEP)
- [ ] Vercel deployment (YOUR STEP)

---

## 🎉 Getting Started

### Your First Deployment

1. **Get API Key**
   - https://platform.openai.com/account/api-keys
   - Create new secret key
   - Copy key

2. **Update .env**
   - Open `.env` file
   - Replace `sk-your-actual-key-here` with your key

3. **GitHub Setup**
   - Create repository on https://github.com/new
   - Push code to GitHub

4. **Deploy on Vercel**
   - https://vercel.com/new
   - Import GitHub repo
   - Set environment variables
   - Deploy!

See **[Complete Setup Guide](./docs/SETUP_COMPLETE.md)** for detailed instructions.

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jun 5, 2026 | Initial release - Full project setup |

---

## 👤 Author

**Pro Hassan's Custom GPT**
- Created: June 5, 2026
- Status: Production Ready ✅
- License: Open Source

---

## 📞 Questions?

Refer to the appropriate documentation:
- **Setup Issues?** → See [Setup Guide](./docs/SETUP_COMPLETE.md)
- **Technical Details?** → See [README.md](./docs/README.md)
- **Architecture?** → See this file (CLAUDE.md)
- **API Usage?** → See [README.md](./docs/README.md#api-endpoints)

---

**Last Updated:** June 5, 2026
**Status:** ✅ Production Ready
**Version:** 1.0.0

*Your professional AI-powered landing page is ready to impress! 🚀*
