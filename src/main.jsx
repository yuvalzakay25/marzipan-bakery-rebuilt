import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // הפקודות שמנהלות את הניווט
import "./index.css";

// ייבוא הקומפוננטות הראשיות
import App from "./App.jsx";
import HomePage from "./Pages/HomePage/HomePage";
import CatalogPage from "./Pages/CatalogPage/CatalogPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import BranchesPage from "./Pages/BranchesPage/BranchesPage";
import TermsPage from "./Pages/TermsPage/TermsPage";
import AccessibilityPage from "./Pages/AccessibilityPage/AccessibilityPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import { CartProvider } from "./context/CartContext.jsx";

// כאן אנחנו בונים את ה"מפה" - איזה URL מוביל לאיזה דף
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // האבא שתמיד נמצא (עם הנאבבר והפוטר)
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "catalog", // הכתובת תהיה domain.com/catalog
        element: <CatalogPage />,
      },
      {
        path: "contact", // הכתובת תהיה domain.com/contact
        element: <ContactPage />,
      },
      {
        path: "about", // הכתובת תהיה domain.com/about
        element: <AboutPage />,
      },
      {
        path: "branches", // הכתובת תהיה domain.com/branches
        element: <BranchesPage />,
      },
      {
        path: "terms", // הכתובת תהיה domain.com/terms
        element: <TermsPage />,
      },
      {
        path: "accessibility", // הכתובת תהיה domain.com/accessibility
        element: <AccessibilityPage />,
      },
      { path: "holidays", element: <NotFoundPage /> },
      { path: "holidays/rosh-hashana", element: <NotFoundPage /> },
      { path: "holidays/pesach", element: <NotFoundPage /> },
      { path: "holidays/purim", element: <NotFoundPage /> },
      { path: "holidays/hanukkah", element: <NotFoundPage /> },
      {
        path: "*", // הכתובת תהיה domain.com/404
        element: <NotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      {/* במקום <App />, אנחנו אומרים לריאקט: "תשתמש בראוטר שבנינו" */}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);
