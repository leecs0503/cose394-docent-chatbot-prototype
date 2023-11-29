import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest, {params}) {
    // TODO: implement
    const {placeId, artworkId} = params;

    const result = {
        id: artworkId,
        placeId: placeId,
        name: "세모",
        summary: "세모입니다",
        description: "검정색으로 구성된 세모는 ...",
    };
    return NextResponse.json(result, {
        status: 200
    });
}
