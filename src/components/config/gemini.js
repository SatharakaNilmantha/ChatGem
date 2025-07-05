// Check if environment variables are loaded
if (!import.meta.env.VITE_GEMINI_API_KEY) {
  console.error('❌ VITE_GEMINI_API_KEY is not set. Please check your .env file.');
  console.log('📝 Create a .env file in the root directory with:');
  console.log('VITE_GEMINI_API_KEY=your_api_key_here');
  console.log('🔗 Get your API key from: https://makersuite.google.com/app/apikey');
}

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
export const GEMINI_API_URL = import.meta.env.VITE_GEMINI_API_URL || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Show a helpful message if API key is missing
if (!GEMINI_API_KEY) {
  console.warn('⚠️  To use this app, you need to:');
  console.warn('1. Copy .env.example to .env');
  console.warn('2. Add your Gemini API key to the .env file');
  console.warn('3. Restart the development server');
}