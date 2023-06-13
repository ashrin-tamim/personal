import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [result, setResult] = useState("");

	const handleClick = (e) => {
		const clickedValue = e.target.name;
		let operators = ["+", "-", "*", "/"];
		if (operators.includes(clickedValue)) {
			if (
				operators.includes(result.slice(-1)) &&
				result.slice(-1) !== "-" &&
				clickedValue !== "-"
			) {
				setResult(result.slice(0, -1) + clickedValue);
			} else {
				setResult(result + clickedValue);
			}
		} else if (result === "" && clickedValue === "0") {
			setResult("0");
		} else if (result === "0" && clickedValue === "0") {
			return;
		} else if (clickedValue === ".") {
			if (result.includes(".")) {
				return;
			} else {
				setResult(result.concat(clickedValue));
			}
		} else {
			setResult(result.concat(clickedValue));
		}
	};

	const clear = () => {
		setResult("");
	};

	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (error) {
			setResult("Error");
		}
	};

	return (
		<div className="calculator">
			<div id="display" className="display">
				{result}
			</div>
			<div className="keypad">
				<button id="seven" className="highlight" name="7" onClick={handleClick}>
					7
				</button>
				<button id="eight" className="highlight" name="8" onClick={handleClick}>
					8
				</button>
				<button id="nine" className="highlight" name="9" onClick={handleClick}>
					9
				</button>
				<button id="add" name="+" onClick={handleClick}>
					+
				</button>
				<button id="four" className="highlight" name="4" onClick={handleClick}>
					4
				</button>
				<button id="five" className="highlight" name="5" onClick={handleClick}>
					5
				</button>
				<button id="six" className="highlight" name="6" onClick={handleClick}>
					6
				</button>
				<button id="subtract" name="-" onClick={handleClick}>
					-
				</button>
				<button id="one" className="highlight" name="1" onClick={handleClick}>
					1
				</button>
				<button id="two" className="highlight" name="2" onClick={handleClick}>
					2
				</button>
				<button id="three" className="highlight" name="3" onClick={handleClick}>
					3
				</button>
				<button id="multiply" name="*" onClick={handleClick}>
					&times;
				</button>
				<button id="zero" className="highlight" name="0" onClick={handleClick}>
					0
				</button>
				<button
					id="decimal"
					className="highlight"
					name="."
					onClick={handleClick}
				>
					.
				</button>
				<button id="equals" className="highlight" name="=" onClick={calculate}>
					=
				</button>
				<button id="divide" name="/" onClick={handleClick}>
					&divide;
				</button>
				<button id="clear" className="highlight" onClick={clear}>
					Clear
				</button>
			</div>
		</div>
	);
};

export default App;
