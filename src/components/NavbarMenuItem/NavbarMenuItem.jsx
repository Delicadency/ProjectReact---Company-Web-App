import "./NavbarMenuItem.css";

const NavbarMenuItem = ({ href, label, isDisabled }) => {
  return (
    <li className={`navbar__menu-item ${isDisabled ? "disabled" : ""}`}>
      {isDisabled ? (
        <span>{label}</span>
      ) : (
        <a className="link" href={href}>
          {label}
        </a>
      )}
    </li>
  );
};
export default NavbarMenuItem;
