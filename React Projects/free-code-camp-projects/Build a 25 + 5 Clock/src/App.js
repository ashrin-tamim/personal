import React, { useState, useEffect } from "react";
import "./App.scss";

const TimerLength = ({
	handleDecrementClick,
	handleIncrementClick,
	func,
	containerId,
	textContent,
	timeLength,
}) => {
	const increment = `${func}-increment`;
	const decrement = `${func}-decrement`;
	const length = `${func}-length`;

	const handleDecrement = () => {
		handleDecrementClick(func);
	};
	const handleInrement = () => {
		handleIncrementClick(func);
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

const Timer = ({ handleRestartClick, sessionTimeLength, breakTimeLength }) => {
	const [timeRemaining, setTimeRemaining] = useState(sessionTimeLength * 60); // 25 minutes in seconds
	const [timerActive, setTimerActive] = useState(false);
	const [isBreak, setIsBreak] = useState(false);
	const [title, setTitle] = useState("Session");

	useEffect(() => {
		setTimeRemaining(sessionTimeLength * 60);
	}, [sessionTimeLength]);

	useEffect(() => {
		let timer = null;

		if (timerActive && timeRemaining > 0) {
			timer = setInterval(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);
		} else if (timeRemaining === 0) {
			handleTimerComplete();
		}

		return () => clearInterval(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timerActive, timeRemaining]);

	useEffect(() => {
		if (isBreak) {
			setTimeRemaining(breakTimeLength * 60);
			setTimerActive(true);
			setTitle("Break");
		}
	}, [isBreak, breakTimeLength]);

	const handleTimerComplete = () => {
		if (!isBreak) {
			setIsBreak(true);
		} else {
			setIsBreak(false);
			setTimerActive(false);
		}
	};

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
		setIsBreak(false);
		setTitle("Session");
		setTimeRemaining(1500);
		handleRestartClick();
	};

	return (
		<div className="timer-main-container">
			<div id="timer-label">{title}</div>
			<div id="time-left">{formatTime(timeRemaining)}</div>
			{!timerActive && (
				<button id="start_stop" className="button" onClick={handleStartTimer}>
					Start Timer
				</button>
			)}
			{timerActive && (
				<button className="button" onClick={handlePauseTimer}>
					Pause Timer
				</button>
			)}
			{
				<button id="reset" className="button" onClick={handleRestartTimer}>
					Restart Timer
				</button>
			}
		</div>
	);
};

const App = () => {
	const [sessionTimeLength, setSessionTimeLength] = useState(25);
	const [breakTimeLength, setBreakTimeLength] = useState(5);

	const handleDecrement = (type) => {
		if (type === "session") {
			if (sessionTimeLength > 1) {
				setSessionTimeLength(sessionTimeLength - 1);
			}
		} else {
			if (breakTimeLength > 1 && breakTimeLength <= 60) {
				setBreakTimeLength(breakTimeLength - 1);
			}
		}
	};
	const handleIncrement = (type) => {
		if (type === "session") {
			if (sessionTimeLength < 60) {
				setSessionTimeLength(sessionTimeLength + 1);
			}
		} else {
			if (breakTimeLength < 60) {
				setBreakTimeLength(breakTimeLength + 1);
			}
		}
	};

	const handleRestartClick = () => {
		setSessionTimeLength(25);
		setBreakTimeLength(5);
	};

	return (
		<div className="timer-container">
			<h1>25 + 5 Clock</h1>
			<div className="timelength-container">
				<TimerLength
					handleDecrementClick={handleDecrement}
					handleIncrementClick={handleIncrement}
					containerId="break-label"
					func="break"
					textContent="Break Length"
					timeLength={breakTimeLength}
				/>
				<TimerLength
					handleDecrementClick={handleDecrement}
					handleIncrementClick={handleIncrement}
					containerId="session-label"
					func="session"
					textContent="Session Length"
					timeLength={sessionTimeLength}
				/>
			</div>
			<Timer
				handleRestartClick={handleRestartClick}
				sessionTimeLength={sessionTimeLength}
				breakTimeLength={breakTimeLength}
			/>
		</div>
	);
};

export default App;
