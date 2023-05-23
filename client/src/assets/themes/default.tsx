import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import Button from "./components/button";

const theme: ThemeOverride = {
	colors: {
		brand: {
			primary: "#303133", // Dark Gray
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
