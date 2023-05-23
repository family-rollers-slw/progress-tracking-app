import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import FamilyRollers from "views/FamilyRollers";
import defaultTheme from "assets/themes/default";
import "./styles.module.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ChakraProvider theme={defaultTheme}>
		<FamilyRollers />
	</ChakraProvider>
);
