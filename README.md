# ChatGem

A modern chat application powered by Google's Gemini AI.

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/SatharakaNilmantha/ChatGem.git
cd ChatGem
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
**IMPORTANT:** The app won't work without this step!

Copy the example environment file:
```bash
cp .env.example .env
```

### 4. Get your Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the generated API key

### 5. Configure your API key
Open the `.env` file and replace `your_gemini_api_key_here` with your actual API key:

```env
VITE_GEMINI_API_KEY=AIzaSyBtQ0pa0QyRAqwBbaS7ZLVhXxLcjyrJJNI
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
```

### 6. Start the development server
```bash
npm run dev
```

## ⚠️ Important Notes

- **The app will NOT work without the API key setup**
- Never commit your `.env` file to git (it's already in `.gitignore`)
- If you see "Setup Required" page, follow the setup instructions above
- Restart the dev server after creating/modifying the `.env` file

## 🔧 Troubleshooting

### "Setup Required" page appears
- Make sure you created the `.env` file
- Check that your API key is correctly added to `.env`
- Restart the development server with `npm run dev`

### API errors
- Verify your API key is valid at [Google AI Studio](https://makersuite.google.com/app/apikey)
- Check the browser console for detailed error messages
- Make sure you have internet connection

## 🚀 Deployment

### GitHub Pages
1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add `VITE_GEMINI_API_KEY` as a repository secret with your API key
4. Push to main branch - GitHub Actions will deploy automatically

### Other Platforms
Set the environment variable in your hosting platform:
- **Netlify:** Site settings → Environment variables
- **Vercel:** Project settings → Environment Variables
- **Railway:** Variables tab

Add this variable:
- Name: `VITE_GEMINI_API_KEY`
- Value: Your Gemini API key

## ✨ Features

- Real-time chat with Google Gemini AI
- Chat history management
- Responsive design
- Markdown support for AI responses
- Modern UI with smooth animations
- Proper error handling and user guidance

## 🛠️ Technologies Used

- React 19
- Vite
- Google Gemini AI API
- React Icons
- React Markdown

## 📝 Environment Variables

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key (required)
- `VITE_GEMINI_API_URL`: The Gemini API endpoint URL (optional)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make sure to test with your own API key
4. Submit a pull request

---

**Need help?** Check the browser console for detailed error messages or open an issue on GitHub.