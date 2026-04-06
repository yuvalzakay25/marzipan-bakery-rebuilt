import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

function NavberListItem({ title, subItems, path }) {
  const baseClasses =
    " text-lg flex items-center gap-1 group-hover:text-brand-red transition-colors duration-300";

  return (
    <li className="relative group cursor-pointer font-semibold py-1">
      {path ? (
        <NavLink
          to={path}
          end={path === "/"}
          className={({ isActive }) =>
            baseClasses +
            (isActive ? " text-brand-red underline underline-offset-4" : "")
          }
        >
          <span>{title}</span>
        </NavLink>
      ) : (
        <div className={baseClasses}>
          <span>{title}</span>
          {subItems && (
            <FaChevronDown
              size={12}
              className="transition-transform duration-300 group-hover:rotate-180"
            />
          )}
        </div>
      )}

      {subItems && (
        <div
          className="absolute top-full right-0 mt-3 w-56 bg-white shadow-2xl rounded-2xl border border-brand-gold/10 
                     invisible opacity-0 group-hover:visible group-hover:opacity-100 
                     transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 overflow-hidden"
        >
          <ul className="py-2">
            {subItems.map((item) => (
              <li
                key={item.name}
                className="px-6 py-3 text-brand-brown hover:bg-brand-cream hover:text-brand-red transition-colors text-right"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block ${isActive ? "text-brand-red font-bold" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default NavberListItem;
