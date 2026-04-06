import { useContext, useState } from "react";
import NavberListItem from "./NavberListItem";
import Logo from "../../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FiFacebook, FiShoppingBag } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const navLinks = [
  { name: "עמוד בית", path: "/" },
  { name: "הקטלוג המלא", path: "/catalog" },
  {
    path: "/holidays",
    name: "חגים במאפיית מרציפן",
    items: [
      { name: "ראש השנה", path: "/holidays/rosh-hashana" },
      { name: "פסח", path: "/holidays/pesach" },
      { name: "פורים", path: "/holidays/purim" },
      { name: "חנוכה", path: "/holidays/hanukkah" },
    ],
  },
  { name: "אודותינו", path: "/about" },
  { name: "סניפים", path: "/branches" },
  { name: "צור קשר", path: "/contact" },
];

const CONTACT_LINKS = {
  facebook: "https://www.facebook.com/marzipan.jerusalem/?locale=he_IL",
  instagram: "https://www.instagram.com/marzipan_jerusalem/",
};
function Navbar() {
  // קבלת המוצרים שבעגלה מהקונטקסט כדי להציג את הכמות בבועה
  const { cartItems, toggleCart } = useContext(CartContext);
  // state של תפריט ההמבורגר
  const [isOpen, setIsOpen] = useState(false);

  // חישוב סך הפריטים בעגלה (לצורך הבועה על האייקון)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // state של תפריט החגים (תת-תפריט בתוך ההמבורגר)
  const [isHolidaysOpen, setIsHolidaysOpen] = useState(false);
  function handleOpenClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  function handleHolidaysClick() {
    setIsHolidaysOpen((prevHolidays) => !prevHolidays);
  }
  return (
    <nav className="fixed top-0  w-full p-6 bg-brand-cream/80 z-50 backdrop-blur-md  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between  ">
        {/* לוגו */}
        <Link path="/">
          <img
            className="w-20 rounded-full cursor-pointer"
            src={Logo}
            alt="Bakery Logo"
          />
        </Link>
        {/* לינקים */}
        <ul className="hidden lg:flex gap-10 text-sm tracking-widest">
          {navLinks.map((link) => (
            <NavberListItem
              key={link.name}
              title={link.name}
              subItems={link.items}
              path={link.path}
            />
          ))}
        </ul>
        <div className="flex items-center justify-center gap-5">
          {/* אייקונים sociales */}
          <div className="hidden lg:flex items-center justify-center gap-5">
            <a href={CONTACT_LINKS.facebook} target="_blank">
              <FiFacebook
                className="hover:text-facebook   transition-all"
                size={22}
              />
            </a>
            <a href={CONTACT_LINKS.instagram} target="_blank">
              <FaInstagram
                className="hover:text-instagram transition-all"
                size={22}
              />
            </a>
          </div>
          {/* כפתור הסל */}
          <button
            onClick={toggleCart}
            className="group active:scale-95 hover:-translate-y-1 hover:shadow-xl flex items-center gap-2 p-2 lg:px-6 lg:py-2 rounded-full bg-red-700 text-white hover:text-red-700 hover:bg-white border-2 border-transparent hover:border-red-800 font-semibold transition-all duration-400"
          >
            {/* האייקון והבועה - תמיד שם! */}
            <div className="relative ">
              <FiShoppingBag size={20} />
              {totalItems > 0 && (
                <div className="absolute -top-2 -right-2 w-5 h-5 group-hover:text-white group-hover:bg-red-700 bg-white text-red-700 text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce shadow-sm">
                  {totalItems}
                </div>
              )}
            </div>
            {/* הטקסט - מופיע רק במחשב */}
            <span className="hidden lg:block">הסל שלי</span>
          </button>
          {/* כפתור המבורגר - יופיע רק בטלפון */}
          <div
            onClick={handleOpenClick}
            className="lg:hidden text-brand-brown p-2"
          >
            <IoIosMenu
              size={35}
              className={`transition-all duration-300 ${isOpen ? "rotate-90" : ""}`}
            />
          </div>
        </div>
      </div>

      {/* מובייל  */}
      <ul
        className={` ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500  overflow-y-auto fixed inset-0  bg-brand-cream/95 backdrop-blur-md z-40 flex flex-col items-center justify-start py-60 h-screen gap-5`}
      >
        {navLinks.map((link) => (
          <li key={link.name} className="relative group cursor-pointer py-2">
            {link.items ? (
              <div className="">
                <button
                  className="text-xl md:text-2xl font-bold  group-hover:text-brand-red transition-all duration-300  "
                  onClick={handleHolidaysClick}
                >
                  {link.name}
                  <span
                    className={`inline-block ml-2 transition-transform duration-500 ${isHolidaysOpen ? "rotate-180 " : ""}`}
                  >
                    ▼
                  </span>
                </button>

                <ul
                  className={`mt-3 flex flex-col gap-3 items-center justify-center text-center overflow-hidden transition-all duration-300 ${isHolidaysOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {link.items.map((subItem) => (
                    <li key={subItem.name}>
                      <NavLink
                        to={subItem.path}
                        onClick={() => {
                          setIsOpen(false);
                          setIsHolidaysOpen(false);
                        }}
                        className="text-lg text-brand-brown hover:text-brand-red transition-all"
                      >
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink
                end={link.path === "/"}
                to={link.path}
                onClick={() => {
                  setIsOpen(false);
                  setIsHolidaysOpen(false);
                }}
                className={({ isActive }) =>
                  (isActive
                    ? "text-brand-red underline underline-offset-8"
                    : "text-brand-brown") +
                  " text-xl md:text-2xl font-bold  group-hover:text-brand-red transition-all duration-300"
                }
              >
                {/* הטקסט גדול ונוח ללחיצה */}
                {link.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
