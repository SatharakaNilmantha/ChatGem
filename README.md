<div align="center">
  <img src="src/Images/Human Tech (1).png" alt="ChatGem AI" width="200" height="200">
  
  **A modern AI chat assistant powered by Google's Gemini AI**
  
  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
  [![Google Gemini](https://img.shields.io/badge/Google-Gemini%20AI-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)
  
  ---
</div>

## ✨ Features

- 🤖 **Real-time chat** with Google Gemini AI
- 💬 **Chat history management** with persistent conversations
- 📱 **Responsive design** that works on all devices
- 🎨 **Modern UI** with smooth animations and blue/white theme
- 📝 **Markdown support** for rich AI responses
- 🔧 **Proper error handling** and user guidance
- 🚀 **Fast performance** with Vite build system

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
**⚠️ IMPORTANT:** The app won't work without this step!

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
VITE_GEMINI_API_KEY=Your_API_KEY
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
```

### 6. Start the development server
```bash
npm run dev
```

## 📸 Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/5f186c7a-3d8a-4d13-8ab6-cfe69bbe1ac7" alt="ChatGem Interface" width="100%">
  <p><em>Clean, modern interface with AI-powered conversations</em></p>
</div>

## ⚠️ Important Notes

- **The app will NOT work without the API key setup**
- Never commit your `.env` file to git (it's already in `.gitignore`)
- If you see "Setup Required" page, follow the setup instructions above
- Restart the dev server after creating/modifying the `.env` file

## 🔧 Troubleshooting

### "Setup Required" page appears
- ✅ Make sure you created the `.env` file
- ✅ Check that your API key is correctly added to `.env`
- ✅ Restart the development server with `npm run dev`

### API errors
- ✅ Verify your API key is valid at [Google AI Studio](https://makersuite.google.com/app/apikey)
- ✅ Check the browser console for detailed error messages
- ✅ Make sure you have internet connection

## 🚀 Deployment

### GitHub Pages
1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add `VITE_GEMINI_API_KEY` as a repository secret with your API key
4. Push to main branch - GitHub Actions will deploy automatically

### Other Platforms
Set the environment variable in your hosting platform:

| Platform | Location |
|----------|----------|
| **Netlify** | Site settings → Environment variables |
| **Vercel** | Project settings → Environment Variables |
| **Railway** | Variables tab |

Add this variable:
- **Name:** `VITE_GEMINI_API_KEY`
- **Value:** Your Gemini API key

## 🛠️ Technologies Used

- **Frontend:** React 19 with modern hooks
- **Build Tool:** Vite for fast development and building
- **AI Engine:** Google Gemini AI API
- **Styling:** Pure CSS with modern gradients and animations
- **Icons:** React Icons library
- **Markdown:** React Markdown for rich text rendering

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key | ✅ Yes |
| `VITE_GEMINI_API_URL` | The Gemini API endpoint URL | ❌ Optional |

## 🎨 Design Features

- **Modern Blue & White Theme** - Clean, professional appearance
- **Custom AI Avatar** - Unique branding with custom AI head icon
- **Smooth Animations** - Engaging micro-interactions
- **Responsive Layout** - Works perfectly on mobile and desktop
- **Chat Bubbles** - Intuitive conversation interface
- **Typing Indicators** - Real-time feedback during AI responses

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Make sure to test with your own API key
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

**Need help?** 
- Check the browser console for detailed error messages
- Open an issue on [GitHub](https://github.com/SatharakaNilmantha/ChatGem/issues)
- Make sure your API key is properly configured

---

<div align="center">
  <img src="src/Images/Human Tech (1).png" alt="ChatGem AI" width="60">
  
  **Made with ❤️ by [SatharakaNilmantha](https://github.com/SatharakaNilmantha)**
  
  ⭐ Star this repo if you found it helpful!
</div>
