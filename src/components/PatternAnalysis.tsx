
"use client";

import { useState } from "react";
import { patternTrendAnalysisTool, PatternTrendAnalysisToolOutput } from "@/ai/flows/pattern-trend-analysis-tool";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Palette, Loader2, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PatternAnalysis() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PatternTrendAnalysisToolOutput | null>(null);

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    setLoading(true);
    try {
      const data = await patternTrendAnalysisTool({ sareePatternDescription: description });
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-primary/20 bg-muted/30 backdrop-blur-sm">
      <CardHeader className="bg-primary/5 pb-8 border-b border-primary/10">
        <CardTitle className="font-headline text-3xl flex items-center gap-3 text-primary">
          <Palette className="h-6 w-6" />
          Pattern Trend Analysis
        </CardTitle>
        <CardDescription className="text-lg">
          Describe your saree pattern (colors, motifs, fabric) to get expert styling advice.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleAnalysis} className="space-y-4 mb-8">
          <Textarea
            placeholder="Describe your saree... e.g., Pastel pink base with silver zari floral vines and geometric borders."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[120px] bg-background border-primary/20"
          />
          <Button type="submit" disabled={loading} className="w-full bg-secondary hover:bg-secondary/90 text-white">
            {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
            {loading ? "Analyzing Trends..." : "Get Styling Suggestions"}
          </Button>
        </form>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <div className="space-y-4">
              <h4 className="font-headline text-2xl text-primary border-b border-primary/10 pb-2">Blouse Designs</h4>
              <ul className="space-y-3">
                {result.blouseDesigns.map((design, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{design}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-2xl text-primary border-b border-primary/10 pb-2">Accessory Colors</h4>
              <div className="flex flex-wrap gap-2">
                {result.accessoryColors.map((color, i) => (
                  <Badge key={i} variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/30">
                    {color}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
