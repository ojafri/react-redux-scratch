import React from 'react'
import debug from 'debug'

const dbg = debug('app:footer')

export default function footer(props) {
  dbg('render: props=%o', props)
  return (
    <div id="footer" className="footer">
      <div id="credit">
        Powered by <a href="https://facebook.github.io/react/">React</a> and <a href="http://redux.js.org/">Redux</a>
      </div>
      <div>
        <ul className="social">
          <li><a href="https://plus.google.com/u/2/+TonyKerz"><i className="fa fa-google-plus-square" /></a></li>
          <li><a href="http://twitter.com/tony_kerz"><i className="fa fa-twitter-square" /></a></li>
          <li><a href="http://linkedin.com/in/tkerz"><i className="fa fa-linkedin-square" /></a></li>
          <li><a href="http://tony-kerz.github.io"><i className="fa fa-github-square" /></a></li>
        </ul>
      </div>
    </div>
  )
}
