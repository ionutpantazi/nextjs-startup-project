import { NavigationItem } from 'lib/queries/nav-data'
import { hasCookie, getCookie, deleteCookie, setCookie } from 'cookies-next';

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

// export function setCookie(name: string, value: string, seconds: number) {
//   var expires = "";
//   if (seconds) {
//     var date = new Date();
//     date.setTime(date.getTime() + (seconds * 60 * 1000));
//     expires = "; expires=" + date.toUTCString();
//   }
//   window.document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

// export function getCookie(name: string) {
//   var nameEQ = name + "=";
//   var ca = window.document.cookie.split(';');
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// export function eraseCookie(name: string) {
//   document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }

// export function pushUnique<T>(arr: T[], value: T): T[] {
//   // Check if the value already exists in the array
//   if (!arr.includes(value)) {
//       // If the value is not in the array, push it
//       arr.push(value);
//   }
//   return arr;
// }

export function pushWithLimit<T>(arr: T[], value: T, limit: number): T[] {
  // Count the occurrences of the value in the array
  const count = arr.filter(item => item === value).length;

  // If the count is less than the limit, push the value
  if (count < limit) {
    arr.push(value);
  }

  return arr;
}

export type JsonObject = { [key: string]: any[] };

export function pushUniqueToJson(obj: JsonObject, key: string, value: any): JsonObject {
  // Set the value for the key, ensuring it is unique
  obj[key] = value;
  return obj;
}

export function pushWithLimitToJson(obj: JsonObject, key: string, value: any, limit: number): JsonObject {
  // Ensure the key exists in the object with an array
  if (!obj[key]) {
    obj[key] = [];
  }

  // Count the occurrences of the key
  const count = obj[key].length;

  // If the count is less than the limit, push the value
  if (count < limit) {
    obj[key].push(value);
  }

  return obj;
}

export function allValuesSame(obj: JsonObject): boolean {
  const values = Object.values(obj);
  if (values.length === 0) return true; // Consider an empty object as having all values the same

  const firstValue = values[0];
  return values.every(value => value === firstValue);
}

export const getJwt = (req: any, res: any) => {
  let cookieJwt = getCookie('lg-jwt', { req, res })
  if (cookieJwt) {
    return cookieJwt
  } else {
    let headers = req.headers
    let lgJwtRes = headers['lg-jwt-res']
    if (lgJwtRes) {
      return lgJwtRes
    }
  }
}

export function getSecondSegment(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const segments = parsedUrl.pathname.split('/').filter(segment => segment.length > 0);

    // Return the second segment if it exists
    if (segments.length >= 2) {
      return segments[1];
    } else {
      return null; // No second segment found
    }
  } catch (error) {
    console.error("Invalid URL:", error);
    return null; // Return null if the URL is invalid
  }
}