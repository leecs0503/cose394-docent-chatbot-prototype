import { NextRequest, NextResponse } from 'next/server';

import { dbHandler } from '@lib/db';

export async function GET(req: NextRequest, {params}) {
    const {placeId} = params;

    const result = await dbHandler.getArtWorks(placeId);
    return NextResponse.json(result, {
        status: 200
    });
}
