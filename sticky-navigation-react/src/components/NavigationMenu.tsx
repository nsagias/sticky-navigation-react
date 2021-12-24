import React from 'react';

export default function NavigationMenu() {

  const navigationPagesList = [
    {id: 1, pageName: "Home"},
    {id: 2, pageName: "About"},
    {id: 3, pageName: "Services"},
    {id: 4, pageName: "Contact"}
  ];
  
  const navigationPages = Array.isArray(navigationPagesList) && navigationPagesList.map(navigationPage => {
    
  });

  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo"><a href="/index.html">A Company</a></h1>
        <ul>
          <li><a href="#" className="current">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}