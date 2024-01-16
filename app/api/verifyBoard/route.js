import { NextResponse } from "next/server"

export async function POST(req, res) {
	const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
	const body = await req.json()
	const { board } = body
	console.log("board, turn", board )

	for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return new NextResponse(JSON.stringify(
				{ message: "WINNER" }
			), { status: 200 })
	}
	}

	return new NextResponse(JSON.stringify(
		{ message: "NOT A WINNER" }
	), { status: 200 })
};

