import React  from 'react';
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Error404 from "../components/views/Error404"

const router = createBrowserRouter([
    {
        path: "*",
        element: <App/>,
        errorElement: <Error404/>
    }
], {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  });

export default router