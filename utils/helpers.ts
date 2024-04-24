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

export const sanitiseValue = (value: string) => {
  return value.toLowerCase()
}

export const sanitiseURLParam = (
  params: Record<string, string | string[] | undefined> | undefined,
  key: string
): string | undefined => {
  if (params && params[key]) {
    return sanitiseValue(params[key] as string)
  }
}