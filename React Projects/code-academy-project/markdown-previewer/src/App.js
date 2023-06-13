import React, { useState } from "react";
// import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
// import { useState } from "react";
import "./App.css";
import { marked } from "marked";

const TextArea = ({ onChange }) => {
	return (
		<>
			<textarea id="editor" onChange={onChange}></textarea>
		</>
	);
};

const PreviewSection = ({ renderMarkdown }) => {
	return (
		<>
			<div id="preview" dangerouslySetInnerHTML={renderMarkdown()}></div>
		</>
	);
};
const App = (params) => {
	const [markdown, setMarkdown] = useState(`# Heading 1
## Sub Heading 2

[Link](https://example.com)

Inline \`code\`

\`\`\`
// Code block
function greeting() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote

![Image](https://example.com/image.jpg)

**Bolded text**`);

	const handleChange = (event) => {
		setMarkdown(event.target.value);
	};

	const renderMarkdown = () => {
		return { __html: marked(markdown) };
	};

	return (
		<>
			<TextArea onChange={handleChange} />
			<PreviewSection renderMarkdown={renderMarkdown} />
		</>
	);
};

export default App;
