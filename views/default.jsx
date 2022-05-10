//Import React
  const React = require('react')

  //fill Def function with a return statement that includes the HTML skeleton of all the pages im going to include 
// sub function called Def that has one parameter called html
  function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
               
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }

  

  //export the Def function i just created
  module.exports = Def
  
 
  