/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontSize: {
				title: "2.5em",
			},
			colors: {
				xc: "#5BD47F",
				trail: "#5B8CD4",
				enduro: "#D84343",
				dh: "#3F3E3E",
				primary: {
					DEFAULT: "#29DA9A",
					dark: "#16C385",
				},
				secondary: {
					DEFAULT: "#31DBE5",
					dark: "#19BAC4",
				},
				error: {
					DEFAULT: "#FF6666",
					dark: "#FE2E2E",
				},
			},
			container: {
				padding: {
					DEFAULT: "2rem",
					md: "4rem",
				},
			},
		},
	},
	plugins: [],
};

