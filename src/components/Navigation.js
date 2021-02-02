import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="wrap-navigation">
    <ul>
      <li>
        <NavLink exact activeClassName="is-active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="is-active" to="/barcode">
          Barcode
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="is-active" to="/smart-connect">
        Smart Connect
        </NavLink>
      </li>
    </ul>
  </div>
);
