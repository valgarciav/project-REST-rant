const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <p clasName="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p clasName="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  
    return (
      <Def>
          <main>
              <h1>Place to Rant or Rave About</h1>
              <div className="row">
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  
  


module.exports = index