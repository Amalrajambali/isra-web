import { NextResponse } from 'next/server'
import { patternTrendAnalysisTool } from '@/ai/flows/pattern-trend-analysis-tool'

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const description = body?.sareePatternDescription ?? '';
        const result = await patternTrendAnalysisTool({ sareePatternDescription: description });
        return NextResponse.json(result);
    } catch (err) {
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}
