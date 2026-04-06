import { Link } from "react-router-dom";

function FooterNavigation({ path, title }) {
  return (
    <li>
      <Link
        to={path}
        className="hover:text-[#D4AF37] cursor-pointer transition-colors"
      >
        {title}
      </Link>
    </li>
  );
}

export default FooterNavigation;
