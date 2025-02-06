export const menuItems = [
  { href: "/", label: "Product" },
  { href: "/", label: "Service" },
  { href: "/", label: "About" },
  { href: "/", label: "Log In" },
];

export interface MenuItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}
