/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				"2/3": "66.666667%",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
