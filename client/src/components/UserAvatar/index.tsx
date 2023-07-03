import React from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import useStore from "hooks/store/useStore";

const UserAvatar = () => {
	const [user, clearUser] = useStore((state) => [
		state.user,
		state.clearUser,
	]);
	const { name, lastName, src, email } = user ?? {};
	return (
		<Link href="#" onClick={clearUser} fontSize="0.8rem" maxW="16rem">
			<Flex alignItems="center" gap="0.5rem">
				<Image src={src} boxSize="2.25rem" />
				<Box w="10rem">
					<Box whiteSpace="nowrap" fontWeight="bold">
						{name} {lastName}
					</Box>
					<Box
						fontWeight="normal"
						fontSize="0.75rem"
						textOverflow="ellipsis"
						overflow="hidden"
						whiteSpace="nowrap">
						{email}
					</Box>
				</Box>
			</Flex>
		</Link>
	);
};

UserAvatar.propTypes = {};

export default UserAvatar;
