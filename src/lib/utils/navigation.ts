export function getPageNameFromPath(pathname: string | null): string {
  if (!pathname) return 'Dashboard';
  
  return pathname === '/' 
    ? 'Dashboard'
    : pathname
        .split('/')
        .pop()
        ?.replace(/-/g, ' ')
        ?.replace(/^\w/, (c) => c.toUpperCase()) || 'Overview';
}