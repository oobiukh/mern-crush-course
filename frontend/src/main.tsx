import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={defaultSystem}>
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ChakraProvider>
);
