//import react and def component from default.jsx
const React = require('react')
const Def = require('../default')

//require statements. define funcion called new form and export it
function new_form () { // create a return statement in the new form function and then use the def component as a wrapper
    return ( // inside def component add HTML including main tag and h1 tag
        <Def>
            
          <main>
            <h1>Add a New Place</h1>
          </main>
        </Def>
    )
}

module.exports = new_form
