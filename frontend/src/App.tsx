import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Box minH="100vh">
        {/* navbar */}
        <Navbar />
        <Routes>
          {/* routes */}
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>

      <Button colorPalette={"blue"}>Button</Button>
    </>
  );
}

export default App;
