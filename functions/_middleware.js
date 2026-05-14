export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'emd-im8-erfahrungen.pages.dev' || url.hostname === 'www.im8-erfahrungen.de') {
    url.hostname = 'im8-erfahrungen.de';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
