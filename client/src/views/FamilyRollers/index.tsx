import React, { FC } from "react";
import { Grid, Box, Flex } from "@chakra-ui/react";
import Menu from "components/Menu";
import SidebarMenu from "components/SidebarMenu";

const FamilyRollers: FC = () => {
	return (
		<Grid templateRows="auto 1fr 4rem" height="100vh">
			<Menu />
			<Flex>
				<SidebarMenu />
			</Flex>
			<Box bg="brand.primary.800" color="brand.neutral">
				Footer
			</Box>
		</Grid>
	);
};

export default FamilyRollers;
