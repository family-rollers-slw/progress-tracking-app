import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import Button from "./components/button";

const theme: ThemeOverride = {
	colors: {
		brand: {
			primary: {
				50: "#f2f2f8",
				100: "#d8d8da",
				200: "#bfbfbf",
				300: "#a5a5a5",
				400: "#8b8b8b",
				500: "#727272",
				600: "#585859",
				700: "#3f3f40",
				800: "#252627",
				900: "#040f0f",
			},
			secondary: "#050505", // Black
			accent: {
				50: "#dbfaff",
				100: "#b3e8fb",
				200: "#88d8f3",
				300: "#5dc7ed",
				400: "#32b7e6",
				500: "#1794c0",
				600: "#087ba0",
				700: "#005874",
			}, // Blue
			highlight: "#FF6600",
			success: "#0fce01", // Green
			neutral: "#fefeff", // Off-white
			danger: "#ff5252",
			warning: "#ffD740",
		},
	},
	components: {
		Button,
	},
};

export default extendTheme(theme);
