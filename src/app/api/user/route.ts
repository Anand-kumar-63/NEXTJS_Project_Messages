export function GET() {
    return Response.json({
        data: "dafuq"
    });
}

export function POST() {
    return Response.json({
        data: "Post request",
        message:"hey",
    });
}
