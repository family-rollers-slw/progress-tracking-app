import React from "react";
import { Flex } from "@chakra-ui/react";
import UserAvatar from "components/UserAvatar";
import useStore from "hooks/store/useStore";

const SidebarMenu = () => {
	const user = useStore((state) => state.user);
	if (!user) {
		return null;
	}
	return (
		<Flex
			bg="brand.primary.700"
			color="brand.neutral"
			px="1rem"
			py="0.75rem"
			w="16rem">
			<UserAvatar />
		</Flex>
	);
};

SidebarMenu.propTypes = {};

export default SidebarMenu;
