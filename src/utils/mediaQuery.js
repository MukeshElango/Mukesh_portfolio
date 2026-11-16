export function addMediaQueryListener(mediaQueryList, callback) {
  if (!mediaQueryList) {
    return () => {};
  }

  if (typeof mediaQueryList.addEventListener === "function") {
    mediaQueryList.addEventListener("change", callback);
    return () => mediaQueryList.removeEventListener("change", callback);
  }

  if (typeof mediaQueryList.addListener === "function") {
    mediaQueryList.addListener(callback);
    return () => mediaQueryList.removeListener(callback);
  }

  return () => {};
}
