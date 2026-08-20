export function getFaviconUrl(siteUrl: string, size = 128): string {
  return `https://www.google.com/s2/favicons?domain=${siteUrl}&sz=${size}`;
}

export function getScreenshotUrl(siteUrl: string): string {
  return `https://api.microlink.io/?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}
