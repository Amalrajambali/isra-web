'use server';
/**
 * @fileOverview An AI-powered styling tool that recommends suitable saree fabrics or churidar cuts based on an occasion.
 *
 * - recommendDrape - A function that handles the styling recommendation process.
 * - RecommendDrapeInput - The input type for the recommendDrape function.
 * - RecommendDrapeOutput - The return type for the recommendDrape function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RecommendDrapeInputSchema = z.object({
  occasion: z.string().describe('The occasion for which the user needs a styling recommendation (e.g., "wedding," "formal event," "casual outing").'),
});
export type RecommendDrapeInput = z.infer<typeof RecommendDrapeInputSchema>;

const RecommendDrapeOutputSchema = z.object({
  recommendations: z.array(z.object({
    type: z.enum(['saree', 'churidar']).describe('The type of garment recommended (saree or churidar).'),
    recommendation: z.string().describe('A description of the recommended fabric or cut.'),
    reason: z.string().describe('The reason why this recommendation is suitable for the given occasion.'),
  })).describe('A list of styling recommendations for the occasion.'),
});
export type RecommendDrapeOutput = z.infer<typeof RecommendDrapeOutputSchema>;

export async function recommendDrape(input: RecommendDrapeInput): Promise<RecommendDrapeOutput> {
  return aiPersonalDrapeToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalDrapeToolPrompt',
  input: { schema: RecommendDrapeInputSchema },
  output: { schema: RecommendDrapeOutputSchema },
  prompt: `You are an expert stylist for "ISRA churidars and sarees". Your task is to recommend suitable saree fabrics or churidar cuts based on the occasion provided by the customer.
Consider the shop specializes in churidars and sarees and aims for attractive and simple yet elegant styles.

Given the occasion: {{{occasion}}}`
});

const aiPersonalDrapeToolFlow = ai.defineFlow(
  {
    name: 'aiPersonalDrapeToolFlow',
    inputSchema: RecommendDrapeInputSchema,
    outputSchema: RecommendDrapeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
