"use server";

export type PatternTrendAnalysisToolInput = {
  sareePatternDescription: string;
};

export type PatternTrendAnalysisToolOutput = {
  blouseDesigns: string[];
  accessoryColors: string[];
};

function normalize(text: string) {
  return text.trim().toLowerCase();
}

export async function patternTrendAnalysisTool(
  input: PatternTrendAnalysisToolInput
): Promise<PatternTrendAnalysisToolOutput> {
  const description = normalize(input.sareePatternDescription);

  if (!description) {
    return {
      blouseDesigns: [
        "Classic elbow-sleeve blouse",
        "Boat-neck blouse with clean piping",
        "Minimal embroidered back design",
      ],
      accessoryColors: ["Gold", "Ivory", "Deep maroon"],
    };
  }

  if (/(floral|flower|garden|botanical)/.test(description)) {
    return {
      blouseDesigns: [
        "Soft silk blouse with sweetheart neckline",
        "Cap-sleeve blouse with delicate piping",
        "Plain contrast blouse with embroidered back",
      ],
      accessoryColors: ["Rose gold", "Pearl", "Sage green"],
    };
  }

  if (/(geometric|stripe|line|modern|abstract)/.test(description)) {
    return {
      blouseDesigns: [
        "High-neck blouse with structured shoulders",
        "Sleeveless blouse with neat panel detailing",
        "Contrast blouse with angular seaming",
      ],
      accessoryColors: ["Silver", "Charcoal", "Emerald"],
    };
  }

  if (/(traditional|temple|paisley|heritage|classic)/.test(description)) {
    return {
      blouseDesigns: [
        "Temple-border blouse with zari sleeves",
        "Rounded neckline blouse with handwork accents",
        "Elbow-sleeve blouse with woven trim",
      ],
      accessoryColors: ["Antique gold", "Ruby", "Bottle green"],
    };
  }

  return {
    blouseDesigns: [
      "Boat-neck blouse with subtle embroidery",
      "Elbow-sleeve blouse with contrast piping",
      "Scoop-neck blouse in a matching solid tone",
    ],
    accessoryColors: ["Gold", "Ivory", "Deep green"],
  };
}
