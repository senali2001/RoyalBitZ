const apiOrigin = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

export function apiFetch(path, options) {
  const url = typeof path === "string" && path.startsWith("/")
    ? `${apiOrigin}${path}`
    : path;
  return fetch(url, options);
}

export function apiHubUrl() {
  return `${apiOrigin}/auctionHub`;
}
