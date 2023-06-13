import React, { useState, useEffect } from "react";
import "./App.scss";

const TimerLength = ({ func, containerId, textContent, defaultTimeLength }) => {
	const increment = `${func}-increment`;
	const decrement = `${func}-decrement`;
	const length = `${func}-length`;

	const [timeLength, setTimeLength] = useState(defaultTimeLength);

	const handleDecrement = () => {
		setTimeLength(timeLength - 1);
	};
	const handleInrement = () => {
		setTimeLength(timeLength + 1);
	};

	return (
		<div className="length-control">
			<div id={containerId}>{textContent}</div>
			<button
				className="btn-level"
				onClick={handleDecrement}
				id={decrement}
				value="-"
			>
				-
			</button>
			<div className="btn-level" id={length}>
				{timeLength}
			</div>
			<button
				className="btn-level"
				onClick={handleInrement}
				id={increment}
				value="+"
			>
				+
			</button>
		</div>
	);
};

const Timer = () => {
	const [timeRemaining, setTimeRemaining] = useState(1500); // 25 minutes in seconds
	const [timerActive, setTimerActive] = useState(false);

	useEffect(() => {
		let timer = null;

		if (timerActive && timeRemaining > 0) {
			timer = setInterval(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);
		}

		return () => clearInterval(timer);
	}, [timerActive, timeRemaining]);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;

		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	const handleStartTimer = () => {
		setTimerActive(true);
	};

	const handlePauseTimer = () => {
		setTimerActive(false);
	};

	const handleRestartTimer = () => {
		setTimerActive(false);
		setTimeRemaining(1500);
	};

	return (
		<div className="timer-main-container">
			<h2>{formatTime(timeRemaining)}</h2>
			{!timerActive && (
				<button className="button" onClick={handleStartTimer}>
					Start Timer
				</button>
			)}
			{timerActive && (
				<button className="button" onClick={handlePauseTimer}>
					Pause Timer
				</button>
			)}
			{timerActive && (
				<button className="button" onClick={handleRestartTimer}>
					Restart Timer
				</button>
			)}
		</div>
	);
};

const App = () => {
	return (
		<div className="timer-container">
			<h1>25 + 5 Clock</h1>
			<div className="timelength-container">
				<TimerLength
					containerId="break-label"
					func="break"
					textContent="Break Length"
					defaultTimeLength="5"
				/>
				<TimerLength
					containerId="session-label"
					func="session"
					textContent="Session Length"
					defaultTimeLength="25"
				/>
			</div>
			<Timer />
		</div>
	);
};

export default App;
