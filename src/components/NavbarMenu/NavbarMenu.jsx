import "./NavbarMenu.css";
import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem";

const menuItems = [
    { href: '#about', label: 'o nas', isDisabled: false },
    { href: '#offer', label: 'oferta', isDisabled: false },
    { href: '#contact', label: 'kontakt', isDisabled: true },
  ];
  
  const NavbarMenu = () => {
    return (
      <menu className="flex j-c--space-between navbar__menu">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={index}
            href={item.href}
            label={item.label}
            isDisabled={item.isDisabled}
          />
        ))}
      </menu>
    );
  };
  
export default NavbarMenu;