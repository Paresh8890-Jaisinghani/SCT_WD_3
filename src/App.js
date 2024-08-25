
import React from "react";
import Board from "./components/Board.js";
import Info from "./components/Info.js";
import "./App.css";
import { useState } from "react";

function App() {
	const [reset, setReset] = useState(false);
	const [winner, setWinner] = useState("");

	const resetBoard = () => {
		setReset(true);
	};

	return (
		<div className="App">
			<h1 className="head">TIC-TAC-TOE</h1>
			<div className={`winner ${winner !== "" ? "" : "shrink"}`}>
				<div className="winner-text">{winner}</div>
				<button onClick={() => resetBoard()}>
					Reset
				</button>
			</div>
			<Board
				reset={reset}
				setReset={setReset}
				winner={winner}
				setWinner={setWinner}
			/>
			<Info />
		</div>
	);
}

export default App;
