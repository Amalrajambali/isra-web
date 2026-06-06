'use server';
/**
 * @fileOverview An AI tool that suggests matching blouse designs and accessory colors for a given saree pattern.
 *
 * - patternTrendAnalysisTool - A function that handles the saree pattern analysis and suggestions process.
 * - PatternTrendAnalysisToolInput - The input type for the patternTrendAnalysisTool function.
 * - PatternTrendAnalysisToolOutput - The return type for the patternTrendAnalysisTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PatternTrendAnalysisToolInputSchema = z.object({
  sareePatternDescription: z
    .string()
    .describe('A description of the saree pattern (e.g., "floral," "geometric," "traditional").'),
});
export type PatternTrendAnalysisToolInput = z.infer<typeof PatternTrendAnalysisToolInputSchema>;

const PatternTrendAnalysisToolOutputSchema = z.object({
  blouseDesigns: z
    .array(z.string())
    .describe('A list of suggested matching blouse designs.'),
  accessoryColors: z
    .array(z.string())
    .describe('A list of suggested matching accessory colors.'),
});
export type PatternTrendAnalysisToolOutput = z.infer<typeof PatternTrendAnalysisToolOutputSchema>;

export async function patternTrendAnalysisTool(
  input: PatternTrendAnalysisToolInput
): Promise<PatternTrendAnalysisToolOutput> {
  return patternTrendAnalysisToolFlow(input);
}

const patternTrendAnalysisPrompt = ai.definePrompt({
  name: 'patternTrendAnalysisPrompt',
  input: {schema: PatternTrendAnalysisToolInputSchema},
  output: {schema: PatternTrendAnalysisToolOutputSchema},
  prompt: `You are an expert fashion stylist specializing in Indian ethnic wear, particularly sarees.
Your task is to suggest matching blouse designs and accessory colors for a given saree pattern.

Saree Pattern Description: {{{sareePatternDescription}}}

Based on the description, provide a list of 3-5 suitable blouse designs and 3-5 appropriate accessory colors that would complement the saree.
`,
});

const patternTrendAnalysisToolFlow = ai.defineFlow(
  {
    name: 'patternTrendAnalysisToolFlow',
    inputSchema: PatternTrendAnalysisToolInputSchema,
    outputSchema: PatternTrendAnalysisToolOutputSchema,
  },
  async input => {
    const {output} = await patternTrendAnalysisPrompt(input);
    return output!;
  }
);
