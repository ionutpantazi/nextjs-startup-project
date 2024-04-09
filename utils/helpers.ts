import { NavigationItem } from 'lib/queries/nav-data'


export function generateMenuList(items: NavigationItem[]): NavigationItem[] {
  // parse strapi navigation list and generate a nested list of children and parents
  const map: { [key: number | string]: NavigationItem } = {};
  const result: NavigationItem[] = [];

  items.forEach(item => {
    map[item.id] = item;
    item.children = [];
  });

  items.forEach(item => {
    if (item.parent) {
      map[item.parent.id]?.children?.push(item);
    } else {
      result.push(item);
    }
  });

  return result;
}