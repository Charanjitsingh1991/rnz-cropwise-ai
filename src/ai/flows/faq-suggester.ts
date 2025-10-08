/**
 * @fileOverview An AI agent that suggests relevant FAQs based on a user's query.
 *
 * - faqSuggester - A function that takes a user's query and returns a list of relevant FAQs.
 * - FaqSuggesterInput - The input type for the function.
 * - FaqSuggesterOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { faqs } from '@/lib/static-data';

const FaqSuggesterInputSchema = z.object({
  query: z.string().describe('The user\'s question or problem description.'),
});
export type FaqSuggesterInput = z.infer<typeof FaqSuggesterInputSchema>;


export const FaqSuggestionSchema = z.object({
    id: z.string().describe('The unique ID of the FAQ.'),
    question: z.string().describe('The question from the FAQ.'),
    relevanceScore: z.number().min(0).max(1).describe('A score from 0 to 1 indicating how relevant this FAQ is to the user\'s query.'),
});
export type FaqSuggestion = z.infer<typeof FaqSuggestionSchema>;

const FaqSuggesterOutputSchema = z.object({
  suggestions: z.array(FaqSuggestionSchema).describe('An array of suggested FAQs, sorted by relevance.'),
});
export type FaqSuggesterOutput = z.infer<typeof FaqSuggesterOutputSchema>;

export async function faqSuggester(input: FaqSuggesterInput): Promise<FaqSuggesterOutput> {
  return faqSuggesterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqSuggesterPrompt',
  input: {
      schema: z.object({
          query: z.string(),
          faqList: z.array(z.object({
              id: z.string(),
              question: z.string(),
              keywords: z.array(z.string()),
          })),
      })
  },
  output: {schema: FaqSuggesterOutputSchema},
  prompt: `You are an expert at routing user questions to the correct Frequently Asked Question (FAQ).
Your task is to analyze the user's query and compare it against a list of available FAQs.

User Query: "{{{query}}}"

Available FAQs:
{{#each faqList}}
- ID: {{id}}
  Question: "{{question}}"
  Keywords: {{#each keywords}}{{.}}{{#unless @last}}, {{/unless}}{{/each}}
{{/each}}

Based on the user's query, identify up to 3 of the most relevant FAQs from the list. For each suggested FAQ, provide its ID, the full question, and a relevance score between 0.0 and 1.0 (where 1.0 is a perfect match).

If the query has absolutely no relevance to any of the provided FAQs, return an empty array for "suggestions".`,
});


const faqSuggesterFlow = ai.defineFlow(
  {
    name: 'faqSuggesterFlow',
    inputSchema: FaqSuggesterInputSchema,
    outputSchema: FaqSuggesterOutputSchema,
  },
  async (input) => {
    const faqListForPrompt = faqs.map(f => ({ id: f.id, question: f.question, keywords: f.keywords }));

    const {output} = await prompt({
        query: input.query,
        faqList: faqListForPrompt
    });
    
    // Sort suggestions by relevance score in descending order
    if (output?.suggestions) {
        output.suggestions.sort((a, b) => b.relevanceScore - a.relevanceScore);
    }
    
    return output!;
  }
);