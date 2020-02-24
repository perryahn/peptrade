import React from 'react';
import { Link } from 'react-router-dom';

export const BodyMenu = () => (
  <div className="pa_bodyMenu">
    <div className="pa_bodyMenu_items">
      <div className="pa_bodyMenu_item">
        <Link
          to="/peptrade"
        >
          <span>PepTrade</span>
        </Link>
      </div>
      <div className="pa_bodyMenu_item">
        <Link
          to="/portfolio"
        >
          <span>Portfolio</span>
        </Link>
      </div>
    </div>
    <div className="pa_bodyMenu_border" />
  </div>
);

export default BodyMenu;
