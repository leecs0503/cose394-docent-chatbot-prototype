import { NextRequest, NextResponse } from 'next/server';

import { dbHandler } from '@lib/db';

export async function GET(req: NextRequest, {params}) {
    // TODO: implement
    const {placeId} = params;
    const result = await dbHandler.getPaths(placeId);

    return NextResponse.json(result, {
        status: 200
    });
}
