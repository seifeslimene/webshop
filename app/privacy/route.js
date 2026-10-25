const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WebShop privacy policy</title>
  <style>
    body { font-family: Georgia, serif; max-width: 40rem; margin: 2rem auto; padding: 0 1rem; line-height: 1.5; color: #222; }
    h1 { font-size: 1.6rem; }
    h2 { font-size: 1.1rem; margin-top: 1.6rem; }
  </style>
</head>
<body>
  <h1>WebShop privacy policy</h1>
  <p>This policy covers the WebShop Android app and the shop at webshop.seifeddineslimene.com.</p>
  <h2>Account</h2>
  <p>When you register or sign in, the shop stores your name, email address, and password. Your password is stored by the shop server and is not shown again.</p>
  <h2>Orders and profile</h2>
  <p>If you save a phone number or a delivery address, or place an order, that information is stored with your account so the order can be fulfilled and shown in your order history.</p>
  <h2>Reviews</h2>
  <p>A review you publish is stored with your account and shown on the product.</p>
  <h2>Product images</h2>
  <p>Product photos are loaded from the shop’s file storage. The app does not ask for access to your camera or photo library.</p>
  <h2>Sharing</h2>
  <p>The shop does not sell this information. It is used to run the account, the catalogue, and the orders.</p>
  <h2>Deleting an account</h2>
  <p>You can ask for your account to be deleted at <a href="https://webshop.seifeddineslimene.com/account-deletion">webshop.seifeddineslimene.com/account-deletion</a>. That page explains what is deleted and what is kept until an open order is finished.</p>
  <h2>Contact</h2>
  <p>Questions about this policy can be sent through <a href="https://www.seifeddineslimene.com">seifeddineslimene.com</a>.</p>
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
