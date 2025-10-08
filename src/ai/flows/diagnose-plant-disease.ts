/**
 * @fileOverview An AI agent for diagnosing plant diseases from an image and recommending RNZ products.
 *
 * - diagnosePlantDisease - A function that handles the plant disease diagnosis process.
 * - DiagnosePlantDiseaseInput - The input type for the function.
 * - DiagnosePlantDiseaseOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getAllProducts } from '@/lib/data';
import type { Product } from '@/lib/types';

const DiagnosePlantDiseaseInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a plant, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type DiagnosePlantDiseaseInput = z.infer<typeof DiagnosePlantDiseaseInputSchema>;

const DiagnosePlantDiseaseOutputSchema = z.object({
  isPlant: z.boolean().describe('Whether the image contains a plant.'),
  plantType: z.string().describe('The common name of the identified plant (e.g., Tomato, Corn).'),
  isHealthy: z.boolean().describe('Whether the plant appears to be healthy.'),
  diseaseName: z.string().describe('The common name of the identified disease. Should be "N/A" if the plant is healthy.'),
  confidenceScore: z.number().min(0).max(1).describe('A confidence score (0-1) for the diagnosis.'),
  diseaseDescription: z.string().describe('A detailed description of the disease, its symptoms, and causes.'),
  diseaseSeverity: z.string().describe('An assessment of the disease severity (e.g., "Low", "Moderate", "High"). "N/A" if healthy.'),
  affectedParts: z.array(z.string()).describe('A list of plant parts that are typically affected (e.g., "Leaves", "Stem", "Fruit").'),
  preventativeMeasures: z.array(z.string()).describe('A list of recommended preventative measures and cultural practices (e.g., "Improve air circulation", "Water at the base of the plant in the morning", "Ensure at least 6 hours of direct sunlight").'),
  productRecommendations: z.array(z.string()).describe('An array of specific RNZ product names recommended for treatment.'),
  rnzProductUsage: z.string().describe('Detailed instructions on how to use the recommended RNZ products for treatment. Explain the application method (e.g., foliar spray, soil drench) and frequency. This should be a comprehensive guide for the user.'),
  additionalInsights: z.string().describe('Any other relevant information such as toxicity alerts, or medicinal/edible uses of the plant.'),
});
export type DiagnosePlantDiseaseOutput = z.infer<typeof DiagnosePlantDiseaseOutputSchema>;

export async function diagnosePlantDisease(input: DiagnosePlantDiseaseInput): Promise<DiagnosePlantDiseaseOutput> {
  return diagnosePlantDiseaseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'diagnosePlantDiseasePrompt',
  input: {schema: z.object({
    photoDataUri: z.string(),
    productList: z.array(z.object({
      name: z.string(),
      description: z.string(),
      categories: z.array(z.string()),
    }))
  })},
  output: {schema: DiagnosePlantDiseaseOutputSchema},
  prompt: `You are an expert plant pathologist and botanist with extensive knowledge of crop diseases and RNZ agricultural products.

Analyze the provided image of a plant. Your task is to perform a comprehensive diagnosis and return the information in the specified JSON format.

1.  **Verification & Identification**: Determine if the image contains a plant and identify its common name.
2.  **Health Assessment**: Determine if the plant is healthy.
3.  **Diagnosis**: If a disease is present, identify its common name, severity, affected parts, and provide a detailed description.
4.  **Actionable Advice**:
    *   Provide a list of **preventativeMeasures**: General cultural practices to prevent or manage the disease (e.g., "Improve air circulation," "Water at the base of the plant," "Ensure proper sunlight").
    *   From the provided RNZ product list, recommend 1-3 specific **productRecommendations** suitable for treatment.
    *   Provide detailed **rnzProductUsage** instructions. Explain exactly HOW to use the recommended products (e.g., "Mix 5g of [Product Name] in 1 liter of water and apply as a foliar spray every 10-14 days.").
5.  **Insights & Confidence**: Provide any additional insights and a confidence score for your diagnosis.

Image to analyze: {{media url=photoDataUri}}

Available RNZ Products:
{{#each productList}}
- Name: {{name}}
  Description: {{description}}
  Categories: {{#each categories}}{{.}}{{#unless @last}}, {{/unless}}{{/each}}
{{/each}}
`,
});

const diagnosePlantDiseaseFlow = ai.defineFlow(
  {
    name: 'diagnosePlantDiseaseFlow',
    inputSchema: DiagnosePlantDiseaseInputSchema,
    outputSchema: DiagnosePlantDiseaseOutputSchema,
  },
  async input => {
    // Fetch products from database instead of static data
    const products = await getAllProducts();
    
    const productListForPrompt = products.map(p => ({
        name: p.name,
        description: p.description,
        categories: Array.isArray(p.categories) ? p.categories : [],
    }));
    
    const {output} = await prompt({
        photoDataUri: input.photoDataUri,
        productList: productListForPrompt,
    });
    return output!;
  }
);
