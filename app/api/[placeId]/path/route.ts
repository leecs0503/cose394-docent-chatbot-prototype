import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest, {params}) {
    // TODO: implement
    const {placeId} = params;

    const result = [
        {
            id: 1,
            placeId: placeId,
            name: "추천루트01",
        },
    ];
    return NextResponse.json(result, {
        status: 200
    });
}
