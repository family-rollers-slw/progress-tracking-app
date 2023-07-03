import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
	variants: {
		outline: {
			bg: "transparent",
			borderColor: "brand.accent.500",
			color: "brand.accent.200",
			_hover: {
				bg: "brand.accent.50",
				color: "brand.primary.800",
			},
			_active: {
				bg: "transparent",
				borderColor: "brand.accent.500",
				color: "brand.accent.200",
			},
		},
		solid: {
			bg: "brand.accent.500",
			_hover: {
				bg: "brand.accent.700",
			},
			_active: {
				bg: "brand.accent.600",
			},
		},
	},
};

export default Button;
