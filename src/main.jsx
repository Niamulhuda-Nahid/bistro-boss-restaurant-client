import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalSocketProvider from "./providers/GlobalSocketProvider.jsx";
import NotificationProvider from "./providers/NotificationProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <GlobalSocketProvider>
              <div className="max-w-screen-xl mx-auto">
                <RouterProvider router={router} />
              </div>
            </GlobalSocketProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </NotificationProvider>
    </AuthProvider>
  </StrictMode>
);
