const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Delete your WebShop account</title>
  <style>
    body { font-family: Georgia, serif; max-width: 40rem; margin: 2rem auto; padding: 0 1rem; line-height: 1.5; color: #222; }
    h1 { font-size: 1.6rem; }
    h2 { font-size: 1.1rem; margin-top: 1.6rem; }
    .request { font-size: 1.15rem; }
  </style>
</head>
<body>
  <h1>Delete your WebShop account</h1>
  <p>This page is for the WebShop Android app and the shop at webshop.seifeddineslimene.com, published by Seif Eddine Slimene.</p>
  <h2>How to ask</h2>
  <p class="request">Send an email to <a href="mailto:s.slimene19@gmail.com">s.slimene19@gmail.com</a> from the email address on the account.</p>
  <p>Use the subject “Delete my WebShop account” and include the account email in the message. You do not need to open the app. The request is handled by the developer of WebShop.</p>
  <h2>What is deleted</h2>
  <p>Within 30 days of the request, the shop deletes:</p>
  <ul>
    <li>your name, email address, and password</li>
    <li>a saved phone number and delivery address</li>
    <li>reviews written with that account</li>
  </ul>
  <h2>What is kept for a short time</h2>
  <p>If an order is still being delivered, the order details, delivery address, and phone number are kept until delivery is finished, and for no more than 90 days after the request. After that, those details are deleted. This information is not sold.</p>
  <h2>Privacy policy</h2>
  <p>The full policy is at <a href="https://webshop.seifeddineslimene.com/privacy">webshop.seifeddineslimene.com/privacy</a>. Other questions can be sent through <a href="https://www.seifeddineslimene.com">seifeddineslimene.com</a>.</p>
</body>
</html>
`

export function GET() {
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}
