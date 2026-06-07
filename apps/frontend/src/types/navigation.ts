export type MegaMenuLink = {
  title: string;
  href: string;
  description?: string;
};

export type MegaMenuColumn = {
  title: string;
  href: string;
  links: MegaMenuLink[];
};

export type NavItem = {
  title: string;
  href: string;
  hasMegaMenu?: boolean;
};
