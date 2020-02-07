import React from 'react';
import { Link } from 'react-router-dom';

export const HeadLogo = () => (
  <div className="pa_headLogo">
    <Link
      to="/"
    >
      <span className="pa_headLogo_text">PepTrade</span>
    </Link>
  </div>
);

export default HeadLogo;
