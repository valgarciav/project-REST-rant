//import react and def component from default.jsx
const React = require("react");
const Def = require("../default");

//require statements. define funcion called new form and export it
function new_form() {
  // create a return statement in the new form function and then use the def component as a wrapper
  return (
    // inside def component add HTML including main tag and h1 tag
    // from data needs to go to the POST/places route.
    //the div is so that each form field will live on a separate line. include label and input
    //Let's update the label and input with specific information. The most important part to remember is the name attribute of the input tag. This is important because it will be the variable name we end up using on the back-end later. Less critical, but still important, is to make a for attribute on the label that corresponds to an id attribute on the input. That is for accessibility/screen readers
    //for pic field - since we will be expecting the user to give us a URL, let's set the input's type attribute to url.
    // add form-groupt to each div tag & add class form control to each input
    //add classes btn and btn-primary to the submit button
    <Def>
      <main>
        <h1>Add a New Place</h1>
        <form method="POST" action="/places">
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-control" id="pic" name="pic" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            />
          </div>
          <div className="form-group col-sm-4">
            <label htmlFor="founded">Founded Year</label>
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
