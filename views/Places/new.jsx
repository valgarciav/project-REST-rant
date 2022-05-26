//import react and def component from default.jsx
const React = require("react");
const Def = require("../default");

//require statements. define funcion called new form and export it
function new_form(data) {
  let message = "";
  if (data.message) {
    message = <h4 className="alert-danger">{data.message}</h4>;
  }
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        {message}
        <form method="POST" action="/places">
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Place Name*</label>
              <input className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="pic">Place Picture</label>
              <input className="form-control" id="pic" name="pic" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="city">City</label>
              <input className="form-control" id="city" name="city" />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="state">State</label>
              <input className="form-control" id="state" name="state" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines*</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            />
          </div>
          <div className="form-group">
            <label for="founded">Founded Year</label>
            <input
              type="number"
              className="form-control"
              id="founded"
              name="founded"
              value={new Date().getFullYear()}
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
      </main>
    </Def>
  );
}
//create a submit button, can use input or a button. type attribute is set to submit. do not use button type
//require name and cuisines fields required

module.exports = new_form;
