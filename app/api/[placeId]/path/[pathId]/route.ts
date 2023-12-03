import { NextRequest, NextResponse } from 'next/server';

import { dbHandler } from '../../../../../lib/db';

export async function GET(req: NextRequest, {params}) {
    // TODO: implement
    const {pathId} = params;
    const result = await dbHandler.getPathPoints(pathId);

    return NextResponse.json(result, {
        status: 200
    });
}
