import { useState } from "react";

function Square({ value, onSquareClick, isWinning }) {
	return (
		<button
			className="square"
			id={isWinning ? "winning_square" : ""}
			onClick={onSquareClick}
		>
			{value}
		</button>
	);
}

function Board({ moves, xIsNext, squares, onPlay }) {
	function handleClick(i, squareIndex) {
		if (calculateWinner(squares) || squares[squareIndex]) {
			return;
		}
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[squareIndex] = "X";
		} else {
			nextSquares[squareIndex] = "O";
		}
		onPlay(nextSquares, i, squareIndex);
	}

	const { winner, combination } = calculateWinner(squares) || {};

	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else if (!winner && moves.length < 10) {
		status = "Next player: " + (xIsNext ? "X" : "O");
	} else {
		status = "Match Drawn.";
	}
	const Boardhtml = () => {
		const board = [];
		for (let i = 0; i < 3; i++) {
			const squaress = [];
			for (let j = 0; j < 3; j++) {
				const squareIndex = i * 3 + j;
				let isWinningSquare = combination && combination.includes(squareIndex);
				squaress.push(
					<Square
						key={squareIndex}
						value={squares[squareIndex]}
						onSquareClick={() => handleClick(i, squareIndex)}
						isWinning={isWinningSquare}
					/>
				);
			}
			board.push(
				<div className="board-row" key={i}>
					{squaress}
				</div>
			);
		}
		return board;
	};

	return (
		<>
			<div className="status">{status}</div>
			<Boardhtml />
		</>
	);
}

export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];
	const [sortAscending, setSortAscending] = useState(true); // New state variable

	function handlePlay(nextSquares, row, column) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
	}
	function toggleSortOrder() {
		setSortAscending(!sortAscending);
	}
	function getMoveLocation(prevSquares, currentSquares) {
		for (let i = 0; i < prevSquares.length; i++) {
			if (prevSquares[i] !== currentSquares[i]) {
				const row = Math.floor(i / 3);
				const col = i % 3;
				return [row, col];
			}
		}
		return [null, null];
	}
	const moves = history.map((squares, move) => {
		const moveNumber = sortAscending ? move : history.length - move - 1;
		const prevSquares = history[move - 1];
		let description;
		if (moveNumber > 0 && moveNumber !== currentMove) {
			const [prevRow, prevCol] = getMoveLocation(prevSquares, squares);
			description = `Go to move #${moveNumber} (${prevRow}, ${prevCol})`;
		} else if (moveNumber === currentMove) {
			description = "You are on MOVE" + moveNumber;
		} else {
			description = "Go to game start";
		}

		return (
			<li key={move}>
				<button onClick={() => jumpTo(moveNumber)}>{description}</button>
			</li>
		);
	});

	return (
		<div className="game">
			<div className="game-board">
				<Board
					moves={moves}
					xIsNext={xIsNext}
					squares={currentSquares}
					onPlay={handlePlay}
				/>
			</div>
			<div className="game-info">
				<button onClick={toggleSortOrder}>
					Toggle Sort Order: {sortAscending ? "Ascending" : "Descending"}
				</button>
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

function calculateWinner(squares) {
	let winningData = {
		winner: "X",
		combination: [],
	};
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
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			winningData.winner = squares[a];
			winningData.combination = lines[i];
			return winningData;
		}
	}
	return "";
}
