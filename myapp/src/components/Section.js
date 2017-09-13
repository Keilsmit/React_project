import React, { Component } from 'react';


export default class Section extends Component {
  render() {
    return (
      <section>
        <img src="https://fillmurray.com/300/300" alt="Bill Murray"/>
        <ul className="list-group">
          <li className="list-group-item">Lorem ipsum dolor sit amet eiusmod tempor  quis nostrud exercitation</li>
          <li className="list-group-item">consectetur adipisicing elit, sed do u irure dolor  pariatur.</li>
          <li className="list-group-item">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</li>
          <li className="list-group-item">llamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</li>
          <li className="list-group-item">in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</li>
          <li className="list-group-item">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ul>
      </section>
    )
  }
}
