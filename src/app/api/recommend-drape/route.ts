import { NextResponse } from 'next/server'
import { recommendDrape } from '@/ai/flows/ai-personal-drape-tool'

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const occasion = body?.occasion ?? '';
        const result = await recommendDrape({ occasion });
        return NextResponse.json(result);
    } catch (err) {
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}
