import React from "react";
// אנחנו מייבאים את ה"חלונית" המוכנה מתוך החבילה של הניווט
import { Outlet } from "react-router-dom";

// מייבאים רק את מה שתמיד מופיע על המסך
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartDrawer from "./components/Cart/CartDrawer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      {/* 2. ה-Outlet (החלונית):
         כאן ה-Router יחליט מה להציג: 
         פעם את HomePage, פעם את CatalogPage ופעם את ContactPage.
         הוא עושה את זה לפי הכתובת שמופיעה למעלה בדפדפן.
      */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
