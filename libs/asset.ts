export const withBasePath = (path: string) => {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `/portfolio${p}`;
};
