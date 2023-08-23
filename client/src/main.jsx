import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./Pages/Home";
import Chats from "./Pages/Chats";
import LandingPage from "./Pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
      {
        path: "chats",
        element: <Chats></Chats>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
