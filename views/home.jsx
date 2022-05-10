const React = require('react')
const Def = require('./default')

function home () {}

module.exports = home

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
      </Def>
    )
  }
  