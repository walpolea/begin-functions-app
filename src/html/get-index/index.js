let begin = require('@architect/functions')

// TODO change defaultHTML
let preHTML = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
  </head>
  <body>
`;

let postHTML = `
  </body>
</html>
`


function route (req, res) {
  
  let html = `
    <h1>Session state</h1>
    <pre>${req.session}</pre>
  `;
  
  console.log(JSON.stringify(req, null, 2))
  res({
    html: preHTML + html + postHTML
  })
}

exports.handler = begin.html.get(route)
