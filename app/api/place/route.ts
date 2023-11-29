import { NextResponse } from 'next/server';

export function GET() {
    const result = [
        {
            id: 1,
            name: "고려대박물관",
        }
    ];
    return NextResponse.json(result, {
        status: 200
    });
}
