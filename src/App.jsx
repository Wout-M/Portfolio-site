import { Box, Flex } from '@radix-ui/themes';
import SideBar from './views/SideBar';
import Content from './views/Content';

import './App.css';

export default function App() {
    return (
        <Flex direction={{ initial: "column", md: "row" }} gap="3" justify="between" px="5">
            <Box position={{ initial: "static", md: "sticky" }} top={{ initial: "auto", md: "0" }} style={{ maxHeight: "100vh" }} pt="9" pb={{ initial: "0", md: "9" }}>
                <SideBar />
            </Box>
            <Box width={{ initial: "100%", md: "50%" }} pt={{ initial: "0", md: "9" }} pb="9">
                <Content />
            </Box>
        </Flex>
    );
};