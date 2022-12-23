// Workaround so Typescript will allow Webpack to import assets correctly
declare module '*.jpg' {
  const value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export = value;
}
declare module '*.jpeg' {
  const value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export = value;
}
declare module '*.gif' {
  const value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export = value;
}
declare module '*.png' {
  const value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export = value;
}
declare module '*.svg' {
  const value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export = value;
}

declare module '*.json' {
  const value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export = value;
}
