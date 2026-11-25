import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import { router } from "./app/router/Routes";
import { Store, StoreContext } from "./lib/store/Store";
import { ToastContainer } from 'react-toastify';

import "./app/loyout/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={Store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <RouterProvider router={router} />
    </QueryClientProvider>,
  </StoreContext.Provider>
);
