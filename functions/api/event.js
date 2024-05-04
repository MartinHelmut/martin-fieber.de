export async function onRequestPost(context) {
  const request = new Request(context.request);
  request.headers.delete("cookie");
  return await fetch(`${context.env.PLAUSIBLE_BASE_URL}/api/event`, request);
}
