import React, { useState } from "react";
// import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
// import { useState } from "react";
import "./App.css";

const DrumPad = ({ src, value, onClickHandler }) => {
	const audioId = `${value}-id`;

	const playAudio = () => {
		const audioElement = document.getElementById(audioId);
		audioElement.play();
		onClickHandler(value);
	};

	return (
		<>
			<div className="drum-pad" id={value} onClick={playAudio}>
				{value}
				<audio className="clip" src={src} id={audioId}></audio>
			</div>
		</>
	);
};
const App = () => {
	let [displayText, setDisplayText] = useState("");

	const handleClick = (text) => {
		console.log("text");
		setDisplayText(text);
	};

	return (
		<>
			<div id="drum-machine">
				<div id="display">{displayText}</div>
				<DrumPad
					value="Q"
					src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
					onClickHandler={handleClick}
				/>
				<DrumPad
					value="W"
					src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
					onClickHandler={handleClick}
				/>
				<DrumPad
					value="E"
					src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
					onClickHandler={handleClick}
				/>
				<DrumPad
					value="A"
					src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
					onClickHandler={handleClick}
				/>
				<DrumPad
					value="S"
					src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
					onClickHandler={handleClick}
				/>
				<DrumPad
					value="D"
					src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
					onClickHandler={handleClick}
				/>
				<DrumPad
					value="Z"
					src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
					onClickHandler={handleClick}
				/>
				<DrumPad
					value="X"
					src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
					onClickHandler={handleClick}
				/>
				<DrumPad
					value="C"
					src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
					onClickHandler={handleClick}
				/>
			</div>
		</>
	);
};

export default App;
