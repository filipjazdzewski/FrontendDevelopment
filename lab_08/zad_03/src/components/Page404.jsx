import React from 'react';
import { useLocation } from 'react';

function Page404() {
  let location = useLocation();

  return (
    <div>
      <h1>Whoops!</h1>
      <p>{location.pathname}</p>
      <h3>Page Not Found!</h3>
    </div>
  );
}

export default Page404;
