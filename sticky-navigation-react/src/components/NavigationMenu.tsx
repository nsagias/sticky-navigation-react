import React from 'react';

export default function NavigationMenu() {

  const navigationPagesList = [
    {id: 1, pageName: "Home", pageLink: "/"},
    {id: 2, pageName: "About", pageLink: "about"},
    {id: 3, pageName: "Services", pageLink: "services"},
    {id: 4, pageName: "Contact", pageLink: "contact"},
    {id: 5, pageName: "Login", pageLink: "Login"}
  ];
  
  const parsedNavigationPages = Array.isArray(navigationPagesList) && navigationPagesList.map(navigationPage => (
    <li key={navigationPage.id}>
      <a href={navigationPage.pageLink}>{navigationPage.pageName}</a>
    </li>
  ));

  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo"><a href="/index.html">A Company</a></h1>
        <ul>
          {parsedNavigationPages}
        </ul>
      </div>
    </nav>
  )
}