import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./pages/RootLayout/RootLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home.tsx";
import Technologies from "./pages/Technologies/Technologies.tsx";
import { ThemeProvider } from "./context/ThemeContext";
import Profile from "./pages/Profile/Profile.tsx";
import Settings from "./pages/Settings/Settings.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios, { AxiosError } from "axios";
import TechnologyDetails from "./pages/TechnologyDetails/TechnologyDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "*", Component: Home },
      { index: true, Component: Home },
      { path: "technologies", 
        children: [
          { index: true, Component: Technologies },
          { path: ":technologySlug", Component: TechnologyDetails }
        ], 
      },
      { path: "profile", Component: Profile },
      { path: "settings", Component: Settings },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      meta: {
        errorHandler: (error: AxiosError) => {
          if (axios.isAxiosError(error)) {
            const status = error.response?.status
            return { status, handled: true }
          }
        }
      }
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
