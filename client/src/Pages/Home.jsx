import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";

const Home = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        border="2px"
        borderRadius="10px"
        w="100%"
        display="flex"
        justifyContent="center"
        padding="20px 0"
        marginTop="20px"
      >
        <h1>home page</h1>
      </Box>
      <Box border="2px" w="100%" borderRadius="10PX" marginTop="20px ">
        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          align="center"
          padding="10px"
        >
          <TabList>
            <Tab w="100%">Sign in</Tab>
            <Tab w="100%">Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Signin />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
