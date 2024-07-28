import { NavigationItem } from 'lib/queries/nav-data'
import { hasCookie, getCookie, deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router'

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

export function setFECookie(name: string, value: string, seconds: number) {
  var expires = "";
  if (seconds) {
    var date = new Date();
    date.setTime(date.getTime() + (seconds * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  window.document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getFECookie(name: string) {
  var nameEQ = name + "=";
  var ca = window.document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function eraseFECookie(name: string) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function pushUnique<T>(arr: T[], value: T): T[] {
  // Check if the value already exists in the array
  if (!arr.includes(value)) {
    // If the value is not in the array, push it
    arr.push(value);
  }
  return arr;
}

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

export function redirectToEventRoot() {
  const router = useRouter();
  const slug = router.query.slug;
  const href = `/pwa/${slug}`;
  return href;
}

export function saveThemeSlugToCookies(req: any, res: any, themeSlug?: string) {
  if (req && res) {
    // back end call
    let cookieThemeSlug = getCookie('lg-theme', { req, res })
    if (cookieThemeSlug != themeSlug) {
      setCookie('lg-theme', themeSlug, { req, res, maxAge: 3600 })
    }
  } else {
    // front end call
    if (themeSlug) {
      var expires = "";
      var date = new Date();
      date.setTime(date.getTime() + (10 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
      window.document.cookie = 'lg-theme' + "=" + themeSlug + expires + "; path=/";
    } else {
      document.cookie = 'lg-theme' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }
}

export function getThemeSlugFromCookies(req: any, res: any, themeSlug?: string) {
  if (req && res) {
    // back end call
    let cookieThemeSlug = getCookie('lg-theme', { req, res })
    return cookieThemeSlug
  }
}

export function generateThemeData(data: any) {
  let themeData, themeMeta = null

  if (data?.event?.themeData?.data) {
    if (typeof (JSON.parse(JSON.parse(data?.event?.themeData?.data))) == 'object') {
      themeData = JSON.parse(JSON.parse(data?.event?.themeData?.data));
      themeMeta = {
        title: data?.event?.themeData?.title,
        slug: data?.event?.themeData?.slug,
        faIcon: data?.event?.themeData?.faIcon,
      }
    }
  }
  console.log(themeData)
  return { themeData, themeMeta }
}

export function convertTempData(event: any, resource: any, delegates: any) {
  if (event) {
    event.homeBanner = {
      alt: 'hive',
      path: '/images/lg-banner.png',
    }
    event.logo = {
      alt: 'hive',
      path: '/images/logo-live-group-vermilion.svg',
    }
    event.eventId = 1
    event.eventDetails = [
      { title: 'Live Group Office', subtitle: 'Unit 9, Princess Mews, Horace Rd, Kingston upon Thames KT1 2SZ', icon: 'fa-house' },
      { title: 'Date', subtitle: '20th December 2024', icon: 'fa-calendar-days' },
      { title: 'Time', subtitle: '10:00', icon: 'fa-clock' },
    ]
    event.tilesData = [
      { title: 'Meet the speakers', image: '/images/tiles/tile1.jpg',  slug: 'speakers', icon: 'fa-people-group' },
      { title: 'Meet the exhibitors', image: '/images/tiles/tile2.jpg', slug: 'exhibitors', icon: 'fa-screwdriver-wrench' },
      { title: 'View resources & learning materials', image: '/images/tiles/tile3.jpg', slug: 'faqs', icon: 'fa-heart' },
    ]
    return event
  }
  if (resource) {
    resource.navigation = {
      header: [
        {
          "id": "1",
          "title": "Home",
          "icon": "fa-house",
          "slug": '',
          "featured": false,
        },
        {
          "id": "2",
          "title": "Evaluation",
          "icon": "fa-dna",
          "slug": 'evaluation',
          "featured": false,
        },
        {
          "id": "3",
          "title": "Agenda",
          "icon": "fa-calendar-days",
          "slug": 'agenda',
          "featured": true,
        },
        {
          "id": "4",
          "title": "Breakouts",
          "icon": "fa-mug-saucer",
          "slug": 'breakouts',
          "featured": true,
        },
        {
          "id": "5",
          "title": "Venue",
          "icon": "fa-city",
          "slug": 'venue',
          "featured": false,
        },
        {
          "id": "8",
          "title": "Speakers",
          "icon": "fa-person-chalkboard",
          "slug": 'speakers',
          "featured": true,
        },
        {
          "id": "9",
          "title": "Sustainability",
          "icon": "fa-star",
          "slug": 'sustainability',
          "featured": false,
        },
        {
          "id": "10",
          "title": "Meet your peers",
          "icon": "fa-people-arrows",
          "slug": 'delegates',
          "featured": false,
        },
        {
          "id": "11",
          "title": "Exhibitors",
          "icon": "fa-city",
          "slug": 'exhibitors',
          "featured": true,
        },
        {
          "id": "12",
          "title": "Forum",
          "icon": "fa-comments",
          "slug": 'forum',
          "featured": false,
        },
        {
          "id": "13",
          "title": "FAQs",
          "icon": "fa-question",
          "slug": 'faqs',
          "featured": true,
        },
        {
          "id": "14",
          "title": "Get in touch",
          "icon": "fa-address-book",
          "slug": 'contact',
          "featured": true,
        },
      ],
      footer: [
        {
          "id": "1",
          "title": "Menu",
          "icon": null,
          "slug": null,
          "items": [
            {
              "id": "3",
              "title": "Agenda",
              "icon": "fa-calendar-days",
              "slug": 'agenda',
              "featured": true,
            },
            {
              "id": "4",
              "title": "Breakouts",
              "icon": "fa-mug-saucer",
              "slug": 'breakouts',
              "featured": true,
            },
            {
              "id": "8",
              "title": "Speakers",
              "icon": "fa-person-chalkboard",
              "slug": 'speakers',
              "featured": true,
            },
            {
              "id": "11",
              "title": "Exhibitors",
              "icon": "fa-city",
              "slug": 'exhibitors',
              "featured": true,
            },
          ]
        },
        {
          "id": "2",
          "title": "Learn",
          "icon": null,
          "url": null,
          "items": [
            {
              "id": "13",
              "title": "FAQs",
              "icon": "fa-question",
              "slug": 'faqs',
              "featured": true,
            },
            {
              "id": "14",
              "title": "Get in touch",
              "icon": "fa-address-book",
              "slug": 'contact',
              "featured": true,
            },
          ]
        },
        {
          "id": "3",
          "title": "Legal",
          "icon": null,
          "url": null,
          "items": [
            {
              "id": "1",
              "title": "Privacy Policy",
              "icon": "fa-address-book",
              "slug": 'terms#privacypolicy',
              "featured": true,
            },
            {
              "id": "2",
              "title": "Terms of Website Use",
              "icon": "fa-address-book",
              "slug": 'terms#terms',
              "featured": true,
            },
            {
              "id": "3",
              "title": "Cookies Policy",
              "icon": "fa-address-book",
              "slug": 'terms#cookiepolicy',
              "featured": true,
            },
          ]
        }
      ]
    }
    return resource
  }
  if (delegates) {
    delegates.data = [
      {
        "attendeeId": 1,
        "title": "Miss",
        "firstName": "Claire",
        "lastName": "Beverly",
        "profilePic": "/images/delegates/delegate1.png",
        "linkedin": "https://www.linkedin.com/",
      },
      {
        "attendeeId": 2,
        "title": "Miss",
        "firstName": "Nadia",
        "lastName": "Daniels",
        "profilePic": "/images/delegates/delegate2.png",
        "linkedin": "https://www.linkedin.com/",
      },
      {
        "attendeeId": 3,
        "title": "Miss",
        "firstName": "Sacha",
        "lastName": "Daniels",
        "profilePic": "/images/delegates/delegate3.png",
        "linkedin": "https://www.linkedin.com/",
      },
      {
        "attendeeId": 4,
        "title": "Miss",
        "firstName": "Rebecca",
        "lastName": "Dujour",
        "profilePic": "/images/delegates/delegate4.png",
        "linkedin": "https://www.linkedin.com/",
      },
      {
        "attendeeId": 5,
        "title": "Mr",
        "firstName": "Andy",
        "lastName": "Freeman",
        "profilePic": "/images/delegates/delegate5.png",
        "linkedin": "https://www.linkedin.com/",
      },
      {
        "attendeeId": 6,
        "title": "Mr",
        "firstName": "Chris",
        "lastName": "Jeffreys",
        "profilePic": "/images/delegates/delegate6.png",
        "linkedin": "https://www.linkedin.com/",
      },
      {
        "attendeeId": 10,
        "title": "Mr",
        "firstName": "Test",
        "lastName": "Test",
        "profilePic": null,
        "linkedin": "https://www.linkedin.com/",
      },
      {
        "attendeeId": 7,
        "title": "Miss",
        "firstName": "Sarah",
        "lastName": "Johnes",
        "profilePic": "/images/delegates/delegate7.png",
        "linkedin": "https://www.linkedin.com/",
      },
      {
        "attendeeId": 8,
        "title": "Mr",
        "firstName": "Rakib",
        "lastName": "Ramen",
        "profilePic": "/images/delegates/delegate8.png",
        "linkedin": "https://www.linkedin.com/",
      },
      {
        "attendeeId": 9,
        "title": "Miss",
        "firstName": "Caz",
        "lastName": "Smith",
        "profilePic": "/images/delegates/delegate9.png",
        "linkedin": "https://www.linkedin.com/",
      },
    ]
    return delegates
  }
}

export function generateMenuHref(segment: any) {
  const router = useRouter();
  const slug = router.query.slug;
  const href = `/pwa/${slug}/${segment}`;
  return href;
}