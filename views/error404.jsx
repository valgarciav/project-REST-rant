const React = require('react')
const Def = require('./default')

function error404() {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
      <img src="public/Images/hhh13-tEMU4lzAL0w-unsplash.jpg" alt="sad cat"/>
      <div>
        Photo by <a href="AUTHOR_LINK">傅甬 华</a> on <a href="https://unsplash.com/photos/tEMU4lzAL0w">Unsplash</a>
      </div>
    </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
