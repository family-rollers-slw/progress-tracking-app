import React, { FC } from "react";
import { Grid, Container, Box } from "@chakra-ui/react";
import Menu from "components/Menu";

const FamilyRollers: FC = () => {
	return (
		<Grid templateRows="auto 1fr 4rem" height="100vh">
			<Menu />
			<Container>Main Page Content</Container>
			<Box bg="brand.primary" color="brand.neutral">
				Footer
			</Box>
		</Grid>
	);
};

export default FamilyRollers;
