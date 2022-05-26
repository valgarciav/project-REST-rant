const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            No ratings yet
            <br />
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <br />
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        <hr />
        <h2>Comments</h2>
        <div className="row">{comments}</div>
        <hr />
        <h2>Got Your Own Rant or Rave?</h2>
        <form action={`/places/${data.place.id}/comment`} method="POST">
          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="author">Author</label>
              <input id="author" name="author" className="form-control" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="stars">Star Rating</label>
              <br />
              <input
                type="range"
                step="0.5"
                min="1"
                max="5"
                id="stars"
                name="stars"
              />
            </div>
            <div className="form-group col-sm-2">
              <label htmlFor="rant">Rant?</label>
              <br />
              <input type="checkbox" id="rant" name="rant" />
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add Comment"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = show;

//In the show.jsx file, display all the information that you have about a place. This includes the name, pic, city, state, and available cuisines. You can choose to display this information however you like. Get creative and borrow some styles from Bootstrap! You can alter the styles and formatting to make it your own, so we purposefully will not show answer code here, but here is a short sample as a reminder of how to access passed-in data in your views.
