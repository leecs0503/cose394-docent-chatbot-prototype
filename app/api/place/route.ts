import { NextResponse } from 'next/server';

import { dbHandler } from '@lib/db';

export async function GET() {
    const result = await dbHandler.getPlaces();
    return NextResponse.json(result, {
        status: 200
    });
}
