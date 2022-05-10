//Import React
  const React = require('react')

  // sub function called Def that has one parameter called html
  function Def (html) {}
  
  //export the Def function i just created
  module.exports = Def
  
  //fill Def function with a return statement that includes the HTML skeleton of all the pages im going to include 
  function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  