import React from "react";
import {
	Box,
	Flex,
	Link,
	Image,
	Button,
	Menu as ChakraMenu,
	MenuButton,
	IconButton,
	useDisclosure,
	Collapse,
	useBreakpointValue,
	useBoolean,
} from "@chakra-ui/react";
import { logo, user } from "assets/images";
import { HamburgerIcon } from "@chakra-ui/icons";

const Menu = () => {
	const { isOpen, onToggle } = useDisclosure();
	const isMobile = useBreakpointValue({ base: true, md: false });
	const direction = isMobile ? "column" : "row";
	const [loged, setLoged] = useBoolean();

	const renderLoggedUser = () => (
		<Link href="#" onClick={setLoged.off}>
			<Flex alignItems="center" gap="0.5rem">
				<Image src={user} boxSize="2rem" />
				<Box whiteSpace="nowrap">Panchito Filomeno</Box>
			</Flex>
		</Link>
	);

	const renderLoginOptions = () => (
		<Flex direction={direction} gap="1rem">
			<Button variant="outline" size="sm" onClick={setLoged.on}>
				Iniciar Sesión
			</Button>
			<Button variant="solid" size="sm">
				Crear Cuenta
			</Button>
		</Flex>
	);

	const renderOptions = () => (
		<Flex
			direction={direction}
			gap={isMobile ? "1rem" : "2rem"}
			alignItems={isMobile ? "start" : "center"}
			p={isMobile ? "1rem" : ""}>
			<Link href="#">Nosotros</Link>
			<Link href="#">Blog</Link>
			{loged ? renderLoggedUser() : renderLoginOptions()}
		</Flex>
	);

	const renderMobileOptions = () => (
		<Collapse in={isOpen}>{renderOptions()}</Collapse>
	);

	return (
		<Flex
			bg="brand.primary"
			color="brand.neutral"
			fontWeight="medium"
			direction="column"
			alignItems="center"
			p="0.5rem">
			<Flex
				w={{ base: "100%", lg: "60%" }}
				h="100%"
				direction={direction}>
				<Flex w="100%">
					<Flex gap="1rem" alignItems="center" flex={1}>
						<Link href="#">
							<Image
								src={logo}
								alt="Family Rollers Logo"
								h="3rem"
							/>
						</Link>
						<Box>Family Rollers</Box>
					</Flex>
					<Flex
						alignItems="center"
						display={{ base: "flex", md: "none" }}>
						<ChakraMenu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								onClick={onToggle}
							/>
						</ChakraMenu>
					</Flex>
				</Flex>
				{isMobile ? renderMobileOptions() : renderOptions()}
			</Flex>
		</Flex>
	);
};

Menu.propTypes = {};

export default Menu;
