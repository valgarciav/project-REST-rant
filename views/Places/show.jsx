const React = require("react");
const places = require("../../models/places");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="row"></div>
        <div className="col-sm-6">
          <img src={data.place.pic} alt={data.place.name} />
          <h3>
            {" "}
            Located in {data.place.city}, {data.place.state}
          </h3>
        </div>
        <div className="col-sm-6">
          <h1>{data.place.name}</h1>
          <h2>Rating</h2>
          <p>Not Rated</p>
          <br />
          <h2>Description</h2>
          <h3>{data.place.showEstablished()}</h3>
          <h4>Serving {data.place.cuisines}</h4>
          <br />
          <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form
            method="POST"
            action={`/places/${data.place.id}?_method=DELETE`}
          >
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
        <hr />
        <h2>Comments</h2>
        <div className="row">
          <p>No Comments yet!</p>
        </div>
        <hr />
      </main>
    </Def>
  );
}

module.exports = show;

//In the show.jsx file, display all the information that you have about a place. This includes the name, pic, city, state, and available cuisines. You can choose to display this information however you like. Get creative and borrow some styles from Bootstrap! You can alter the styles and formatting to make it your own, so we purposefully will not show answer code here, but here is a short sample as a reminder of how to access passed-in data in your views.
