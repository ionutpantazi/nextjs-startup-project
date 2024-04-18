export interface StrapiFile {
  data?: {
    attributes?: {
      name: string,
      url: string,
      formats: object,
      alternativeText: string,
      width: string,
      height: string,
    }
  }
}

export interface StrapiFileFields {
  name?: string,
  url?: string,
  formats?: object,
  alternativeText?: string,
  width?: string,
  height?: string,
}

export interface StrapiMultiFile {
  data?: [
    StrapiMultiFileFields
  ]
}

export interface StrapiMultiFileFields {
  id: string,
  attributes?: {
    name: string,
    url: string,
    formats: object,
    alternativeText: string,
    width: string,
    height: string,
  }
}