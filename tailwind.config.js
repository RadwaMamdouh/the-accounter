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
				"dark-light": "#676E79",
				primary: "#00acc4",
				"primary-dark": "#008a9d",
				"primary-light": "#66cddc",
				"primary-bg": "#e5f7f9",
				"primary-hover": "#33bdd0",
				"primary-soft": "#CCEEF3",
				green: "#48bb78",
				"green-bg": "#EDF8F2",
				"green-light": "#91D6AE",
				"green-soft": "#DAF1E4",
				white: "#fff",
				orange: "#f2921d",
				"orange-bg": "#FEF4E8",
				"orange-soft": "#FCE9D2",
				"orange-light": "#F7BE77",
				"orange-dark": "#DA831A",
				"ghost-white": "#f5f7fa",
				"border-light": "#e5e7eb",
				red: "#f44343",
				"dark-hover": "#1b2635",
				gray: "#6f7780",
				"gray-bg": "#EFF0F1",
				light: "#a0a4ab",
				"dark-bg": "#e6e7e9",
				muted: "#606873",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				alexandria: ["Alexandria", "sans-serif"],
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem", // 16px
				sm: "1.5rem", // 24px
				lg: "2rem", // 32px
				xl: "9rem", // 150px
			},
		},
	},
	plugins: [],
};
