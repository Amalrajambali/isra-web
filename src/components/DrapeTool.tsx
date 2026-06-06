
"use client";

import { useState } from "react";
import { recommendDrape, RecommendDrapeOutput } from "@/ai/flows/ai-personal-drape-tool";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Shirt } from "lucide-react";

export function DrapeTool() {
  const [occasion, setOccasion] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendDrapeOutput['recommendations'] | null>(null);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!occasion.trim()) return;
    setLoading(true);
    try {
      const result = await recommendDrape({ occasion });
      setRecommendations(result.recommendations);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-primary/20 bg-muted/30 backdrop-blur-sm overflow-hidden">
      <CardHeader className="bg-primary/5 pb-8 border-b border-primary/10">
        <CardTitle className="font-headline text-3xl flex items-center gap-3 text-primary">
          <Sparkles className="h-6 w-6" />
          AI Personal Drape Tool
        </CardTitle>
        <CardDescription className="text-muted-foreground text-lg">
          Describe your occasion, and our AI stylist will recommend the perfect ethnic drape for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleRecommend} className="flex gap-3 mb-10">
          <Input
            placeholder="e.g., A formal wedding ceremony, casual high tea..."
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="flex-1 bg-background border-primary/20 focus:border-primary"
          />
          <Button type="submit" disabled={loading} className="bg-secondary hover:bg-secondary/90 text-white px-8">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Style Me"}
          </Button>
        </form>

        {recommendations && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-primary/20 bg-background/50 hover:bg-background/80 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                   <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Shirt className="h-5 w-5" />
                   </div>
                   <span className="font-headline text-xl text-primary capitalize">{rec.type}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{rec.recommendation}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{rec.reason}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
