# ChatGem

A modern chat application powered by Google's Gemini AI.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key
- `VITE_GEMINI_API_URL`: The Gemini API endpoint URL

## Deployment

When deploying to GitHub Pages or other platforms, make sure to set the environment variables in your deployment platform's settings.

For GitHub Pages with GitHub Actions, you would add the API key as a repository secret and reference it in your workflow file.