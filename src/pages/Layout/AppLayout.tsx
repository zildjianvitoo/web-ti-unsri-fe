import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense, memo } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
const AppLayout = memo(() => {
  return (
    <Suspense fallback={null}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme ">
        <ScrollRestoration />
        <Toaster />
        <div className="font-inter mx-auto flex flex-col">
          <Navbar />
          <main className="mx-auto mt-24 w-full overflow-hidden lg:mt-32">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Suspense>
  );
});

export default AppLayout;
