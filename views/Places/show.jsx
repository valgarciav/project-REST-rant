const React = require('react')
const Def = require('../default')


//Add the attributes action and method to your form. Set the method attribute to POST.
function show(data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     

<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 




        </Def>
    )
}

module.exports = show


//In the show.jsx file, display all the information that you have about a place. This includes the name, pic, city, state, and available cuisines. You can choose to display this information however you like. Get creative and borrow some styles from Bootstrap! You can alter the styles and formatting to make it your own, so we purposefully will not show answer code here, but here is a short sample as a reminder of how to access passed-in data in your views.