import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPage from './chapter7-routing/Detail.tsx';
import FallbackPage from './chapter7-routing/FallbackPage.tsx';
import { UserContextProvider } from './chapter6-context/UserContext.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail",
    element: <DetailPage />
  },
  {
    path: "*",
    element: <FallbackPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
