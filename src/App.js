import { useState } from "react";
import "./styles.css";

function Square0({ value, onSquareClick }) {
  return (
    <button className="square0" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Square1({ value, onSquareClick }) {
  return (
    <button className="square1" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Square2({ value, onSquareClick }) {
  return (
    <button className="square2" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Square3({ value, onSquareClick }) {
  return (
    <button className="square3" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Square4({ value, onSquareClick }) {
  return (
    <button className="square4" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Square5({ value, onSquareClick }) {
  return (
    <button className="square5" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Square6({ value, onSquareClick }) {
  return (
    <button className="square6" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Square7({ value, onSquareClick }) {
  return (
    <button className="square7" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Square8({ value, onSquareClick }) {
  return (
    <button className="square8" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function TabuleiroPlayers(xIsNext) {
    if (status === "Next player: X") {
      return (
        <div className="placar">
          <div className="players" style={{ borderBottom: "2px solid white" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19px"
              height="19px"
              fill="white  "
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="white"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
          <div className="players">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="white"
              className="bi bi-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="white"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
        </div>
      );
    } else if (status === "Next player: O") {
      return (
        <div className="placar">
          <div className="players">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19px"
              height="19px"
              fill="white  "
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="white"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
          <div className="players" style={{ borderBottom: "2px solid white" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="white"
              className="bi bi-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="white"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
        </div>
      );
    } else if (status === "Winner: X") {
      return (
        <div className="placar">
          <div className="players" style={{ borderBottom: "2px solid white" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19px"
              height="19px"
              fill="white  "
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="white"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
          <div className="players">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="white"
              className="bi bi-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="white"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
        </div>
      );
    } else if (status === "Winner: O") {
      return (
        <div className="placar">
          <div className="players">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19px"
              height="19px"
              fill="white  "
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="white"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
          <div className="players" style={{ borderBottom: "2px solid white" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="white"
              className="bi bi-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="white"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
        </div>
      );
    } else {
      return (
        <div className="placar">
          <div className="players">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19px"
              height="19px"
              fill="white  "
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="white"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
          <div className="players">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="white"
              className="bi bi-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="white"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </div>
        </div>
      );
    }
  }

  // let pontuaçãoX;
  // let pontuaçãoO;
  // if (winner = "X") {
  //   pontuaçãoX = "o";
  // } else {
  //   pontuaçãoO = "i";
  // }

  return (
    <div className="tabuleiroMatrix">
      <div className="tabuleiro">
        <TabuleiroPlayers />

        <hr color="aliceblue" className="linha" />
        <div
          style={{
            marginTop: '70px',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
         
          <div className="board-row">
            <Square0 value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square1 value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square2 value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square3 value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square4 value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square5 value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square6 value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square7 value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square8 value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
          <div className="card-profile"></div>
      </div>
        </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="center">
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
      return squares[a];
    }
  }
  return null;
}
