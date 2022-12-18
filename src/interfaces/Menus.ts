export interface MenuChild {
  title: string;
  link: string;
}
export interface Menu {
  title: string;
  path: string;
  items: MenuChild[];
  icon: any;
}
