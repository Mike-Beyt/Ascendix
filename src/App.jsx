import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import Navbar from "./ui/sections/Navbar";

import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import { Toaster } from "react-hot-toast";
import LandingFooter from "./ui/sections/LandingPageFooter";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="x" element={<AboutUsPage />} />
          </Routes>

          <LandingFooter />
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{
            margin: "8px",
          }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px",
              backgroundColor: "var(--color-purewhite)",
              color: "var(--color-blue)",
              zIndex: "1000",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
