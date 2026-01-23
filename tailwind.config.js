// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js,ts,jsx,tsx,vue}",
		"./public/*.html",
		// Add other file paths as needed
	],
	theme: {
		extend: {
			colors: {
				dark: "#020e1f",
				primary: "#00acc4",
				"primary-dark": "#008a9d",
				"primary-light": "#66cddc",
				"primary-bg": "#e5f7f9",
				"primary-hover": "#33bdd0",
				"primary-soft": "#CCEEF3",
				green: "#48bb78",
				white: "#fff",
				orange: "#f2921d",
				"ghost-white": "#f5f7fa",
				"border-light": "#e5e7eb",
				red: "#f44343",
				"dark-hover": "#1b2635",
				gray: "#6f7780",
				light: "#a0a4ab",
				"dark-bg": "#e6e7e9",
				muted: "#606873",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				alexandria: ["Alexandria", "sans-serif"],
			},
		},
	},
	plugins: [],
};
