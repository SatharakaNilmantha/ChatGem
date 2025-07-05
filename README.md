# ChatGem

A modern chat application powered by Google's Gemini AI.

## Setup Instructions

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
Copy the example environment file and add your API key:

```bash
cp .env.example .env
```

Then edit the `.env` file and replace `your_gemini_api_key_here` with your actual Gemini API key:

```env
VITE_GEMINI_API_KEY=AIzaSyBtQ0pa0QyRAqwBbaS7ZLVhXxLcjyrJJNI
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
```

### 4. Get your Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key and paste it in your `.env` file

### 5. Start the development server
```bash
npm run dev
```

## Environment Variables

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key (required)
- `VITE_GEMINI_API_URL`: The Gemini API endpoint URL

## Important Notes

- Never commit your `.env` file to git (it's already in `.gitignore`)
- The `.env.example` file shows the required format
- Make sure to restart the dev server after creating/modifying the `.env` file

## Deployment

### GitHub Pages
1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add `VITE_GEMINI_API_KEY` as a repository secret
4. The GitHub Actions workflow will use this secret during build

### Other Platforms
Set the environment variables in your hosting platform's dashboard:
- Netlify: Site settings → Environment variables
- Vercel: Project settings → Environment Variables
- Railway: Variables tab

## Features

- Real-time chat with Google Gemini AI
- Chat history management
- Responsive design
- Markdown support for AI responses
- Modern UI with smooth animations

## Technologies Used

- React 19
- Vite
- Google Gemini AI API
- React Icons
- React Markdown