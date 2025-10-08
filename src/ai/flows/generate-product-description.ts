/**
 * @fileOverview An AI agent that generates product descriptions based on keywords.
 *
 * - generateProductDescription - A function that takes keywords and generates a short and long product description.
 * - GenerateProductDescriptionInput - The input type for the function.
 * - GenerateProductDescriptionOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductDescriptionInputSchema = z.object({
  keywords: z.string().describe('A comma-separated list of keywords describing the product.'),
});
export type GenerateProductDescriptionInput = z.infer<typeof GenerateProductDescriptionInputSchema>;

const GenerateProductDescriptionOutputSchema = z.object({
  shortDescription: z.string().describe('A concise, engaging short description for the product (around 20-30 words).'),
  longDescription: z.string().describe('A detailed, informative long description for the product (around 80-120 words).'),
});
export type GenerateProductDescriptionOutput = z.infer<typeof GenerateProductDescriptionOutputSchema>;


export async function generateProductDescription(input: GenerateProductDescriptionInput): Promise<GenerateProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}


const prompt = ai.definePrompt({
  name: 'generateProductDescriptionPrompt',
  input: {schema: GenerateProductDescriptionInputSchema},
  output: {schema: GenerateProductDescriptionOutputSchema},
  prompt: `You are an expert agricultural copywriter for a company called RNZ. Your task is to generate compelling product descriptions based on a list of keywords.

Keywords: {{{keywords}}}

Based on these keywords, please generate:
1.  A "shortDescription": A concise, engaging summary of the product, approximately 20-30 words.
2.  A "longDescription": A more detailed and informative paragraph, approximately 80-120 words, explaining the product's benefits and ideal usage.

Ensure the tone is professional, confident, and targeted towards farmers and agricultural professionals.
`,
});


const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: GenerateProductDescriptionInputSchema,
    outputSchema: GenerateProductDescriptionOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);