import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest, {params}) {
    // TODO: implement
    const {pathId} = params;

    const result = [
        {
            id: 0,
            pathId: pathId,
            x: 140,
            y: 406,
        },
        {
            id: 1,
            pathId: pathId,
            x: 487,
            y: 82,
        },
    ];
    return NextResponse.json(result, {
        status: 200
    });
}
