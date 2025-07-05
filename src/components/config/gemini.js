// Check if environment variables are loaded
if (!import.meta.env.VITE_GEMINI_API_KEY) {
  console.error('❌ VITE_GEMINI_API_KEY is not set. Please check your .env file.');
  console.log('📝 Create a .env file in the root directory with:');
  console.log('VITE_GEMINI_API_KEY=your_api_key_here');
}

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
export const GEMINI_API_URL = import.meta.env.VITE_GEMINI_API_URL || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';