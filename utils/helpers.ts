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

export function get_youtube_thumbnail(url: string, quality: string) {
  var video_id, thumbnail: string, result;
  if (result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)) {
    video_id = result.pop();
  }
  else if (result = url.match(/youtu.be\/(.{11})/)) {
    video_id = result.pop();
  }

  if (video_id) {
    if (typeof quality == "undefined") {
      quality = 'high';
    }

    var quality_key = 'maxresdefault'; // Max quality
    if (quality == 'low') {
      quality_key = 'sddefault';
    } else if (quality == 'medium') {
      quality_key = 'mqdefault';
    } else if (quality == 'high') {
      quality_key = 'hqdefault';
    }

    var thumbnail = "http://img.youtube.com/vi/" + video_id + "/" + quality_key + ".jpg";
    return thumbnail;
  }
  return 'https://img.youtube.com/vi/1111/low.jpg'
}

export function setCookie(name: string, value: string, seconds: number) {
  var expires = "";
  if (seconds) {
    var date = new Date();
    date.setTime(date.getTime() + (seconds * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  window.document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(name: string) {
  var nameEQ = name + "=";
  var ca = window.document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function eraseCookie(name: string) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}