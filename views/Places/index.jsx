const React = require("react");
const Def = require("../default");

//click a link and reach the show page directly
//Use the array index as a variable for the id we added to the href attribute. We can reach the index by adding a parameter to the callback function and then focusing on the placesFormatted array.

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${place.id}`}>{place.name}</a>
        </h2>
        <p className="text-center">{place.cuisines}</p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Place to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
