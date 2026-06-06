"use server";

export type RecommendDrapeInput = {
  occasion: string;
};

export type RecommendDrapeOutput = {
  recommendations: Array<{
    type: "saree" | "churidar";
    recommendation: string;
    reason: string;
  }>;
};

function normalize(text: string) {
  return text.trim().toLowerCase();
}

export async function recommendDrape(input: RecommendDrapeInput): Promise<RecommendDrapeOutput> {
  const occasion = normalize(input.occasion);

  if (!occasion) {
    return {
      recommendations: [
        {
          type: "saree",
          recommendation: "Soft silk saree with a light zari border",
          reason: "A versatile choice that works for many celebrations while staying elegant.",
        },
        {
          type: "churidar",
          recommendation: "Cotton-silk churidar with a clean straight cut",
          reason: "Comfortable for all-day wear and easy to dress up with accessories.",
        },
      ],
    };
  }

  if (/(wedding|marriage|reception|engagement|party|festive|festival|celebration)/.test(occasion)) {
    return {
      recommendations: [
        {
          type: "saree",
          recommendation: "Banarasi, tissue, or rich silk saree with traditional borders",
          reason: "These fabrics feel luxurious and photograph beautifully for formal celebrations.",
        },
        {
          type: "churidar",
          recommendation: "Embroidered silk blend churidar with a tailored silhouette",
          reason: "A refined option for guests who want a polished look without heavy draping.",
        },
      ],
    };
  }

  if (/(office|formal|meeting|conference|interview|work)/.test(occasion)) {
    return {
      recommendations: [
        {
          type: "saree",
          recommendation: "Matte silk or cotton-silk saree in a muted jewel tone",
          reason: "It looks professional while still feeling graceful and boutique-ready.",
        },
        {
          type: "churidar",
          recommendation: "Straight-cut churidar in solid tones with minimal embroidery",
          reason: "Clean lines keep the outfit smart, comfortable, and easy to wear all day.",
        },
      ],
    };
  }

  return {
    recommendations: [
      {
        type: "saree",
        recommendation: "Lightweight printed saree with subtle zari accents",
        reason: "This is easy to wear for casual outings while still looking polished.",
      },
      {
        type: "churidar",
        recommendation: "Breathable cotton or linen churidar in a relaxed elegant cut",
        reason: "A comfortable everyday option that still feels thoughtfully styled.",
      },
    ],
  };
}
