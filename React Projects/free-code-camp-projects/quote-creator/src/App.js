import React, { useState } from "react";
// import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
// import { useState } from "react";
import "./App.css";

const quotes = [
	{
		quote: "The only way to do great work is to love what you do.",
		author: "Steve Jobs",
	},
	{
		quote: "In the middle of difficulty lies opportunity.",
		author: "Albert Einstein",
	},
	{
		quote: "Believe you can and you're halfway there.",
		author: "Theodore Roosevelt",
	},
	{
		quote:
			"Success is not final, failure is not fatal: It is the courage to continue that counts.",
		author: "Winston Churchill",
	},
	{
		quote:
			"The future belongs to those who believe in the beauty of their dreams.",
		author: "Eleanor Roosevelt",
	},
	{
		quote:
			"The only limit to our realization of tomorrow will be our doubts of today.",
		author: "Franklin D. Roosevelt",
	},
	{
		quote: "The best way to predict the future is to create it.",
		author: "Peter Drucker",
	},
	{
		quote: "Your time is limited, don't waste it living someone else's life.",
		author: "Steve Jobs",
	},
	{
		quote: "Don't watch the clock; do what it does. Keep going.",
		author: "Sam Levenson",
	},
	{
		quote:
			"The greatest glory in living lies not in never falling, but in rising every time we fall.",
		author: "Nelson Mandela",
	},
	{
		quote: "Strive not to be a success, but rather to be of value.",
		author: "Albert Einstein",
	},
	{
		quote:
			"The only person you should try to be better than is the person you were yesterday.",
		author: "Anonymous",
	},
	{
		quote:
			"Success usually comes to those who are too busy to be looking for it.",
		author: "Henry David Thoreau",
	},
	{
		quote: "If you want to achieve greatness stop asking for permission.",
		author: "Anonymous",
	},
	{
		quote:
			"The road to success and the road to failure are almost exactly the same.",
		author: "Colin R. Davis",
	},
	{
		quote: "The secret to success is to know something nobody else knows.",
		author: "Aristotle Onassis",
	},
	{
		quote:
			"Success is not the key to happiness. Happiness is the key to success.",
		author: "Albert Schweitzer",
	},
	{
		quote: "Opportunities don't happen. You create them.",
		author: "Chris Grosser",
	},
	{
		quote: "Success is not in what you have, but who you are.",
		author: "Bo Bennett",
	},
	{
		quote: "Don't be afraid to give up the good to go for the great.",
		author: "John D. Rockefeller",
	},
];

const Text = ({ quote }) => {
	return <p id="text">{quote}</p>;
};

const Author = ({ author }) => {
	return <p id="author">{author}</p>;
};

const Button = ({ onClick }) => {
	return (
		<button onClick={onClick} id="new-quote">
			New Quote
		</button>
	);
};

const HLink = ({ tweetUrl }) => {
	return (
		<a href={tweetUrl} target="_blank" id="tweet-quote" rel="noreferrer">
			Tweet Quote
		</a>
	);
};

const App = () => {
	const [index, setIndex] = useState(0);

	const handleClick = () => {
		setIndex(index + 1);
	};

	return (
		<div id="quote-box">
			<Text quote={quotes[index].quote} />
			<Author author={quotes[index].author} />
			<Button onClick={handleClick} />
			<HLink
				tweetUrl={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
					`"${quotes[index].quote}" - ${quotes[index].author}`
				)}`}
			/>
		</div>
	);
};

export default App;
