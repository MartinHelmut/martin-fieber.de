export async function onRequestGet({ env, request, waitUntil }) {
  let response = await caches.default.match(request);
  if (!response) {
    response = await fetch(
      `${env.PLAUSIBLE_BASE_URL}/js/script.outbound-links.js`,
    );
    waitUntil(caches.default.put(request, response.clone()));
  }
  return response;
}
