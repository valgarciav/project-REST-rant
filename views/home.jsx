const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="/Images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg"
            alt="Chia Fruit Shake"
          />
          <div className="text-center">
            Photo by{" "}
            <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
              Brenda Godinez
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
