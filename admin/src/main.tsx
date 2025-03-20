// // import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";
// import React from "react";

// createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// admin/src/main.tsx or admin/src/index.tsx

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductView from "./modules/products/presentation/views/product.view";
import { ProductProvider } from "./modules/products/presentation/providers/product.provider"; // Import the ProductProvider

// Create the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProductProvider>
        <ProductView />
      </ProductProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {" "}
    {/* Redux Provider for global state */}
    <RouterProvider router={router} />
  </Provider>
);
