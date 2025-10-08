import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Use GEMINI_API_KEY instead of GOOGLE_AI_API_KEY
export const ai = genkit({
  plugins: [googleAI({
    apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY
  })],
  model: 'googleai/gemini-2.0-flash',
});
