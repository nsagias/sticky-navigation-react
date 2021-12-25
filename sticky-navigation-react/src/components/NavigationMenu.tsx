import React from 'react';

export default function NavigationMenu() {

  const navigationPagesList = [
    {id: 1, pageName: "Home", pageLink: "/", fontColor: ""},
    {id: 2, pageName: "About", pageLink: "about", fontColor: "#307B7F"},
    {id: 3, pageName: "Services", pageLink: "services", fontColor: "orange"},
    {id: 4, pageName: "Contact", pageLink: "contact", fontColor: ""},
    {id: 5, pageName: "Login", pageLink: "Login", fontColor: ""},
  ];
  

  const parsedNavigationPages = Array.isArray(navigationPagesList) && navigationPagesList.map(navigationPage => (
    <li key={navigationPage.id}>
      <a 
        className={navigationPage.pageName}
        href={navigationPage.pageLink} 
        onMouseOver={(event:any)=>{event.target.style.color = "red"}}
        onMouseLeave={(event:any)=>{event.target.style.color = navigationPage.fontColor}}
        style={{color: navigationPage.fontColor}}
        
        >{navigationPage.pageName}</a>
    </li>
  ));

  // function onHoverFontColor(event: any) {
  //   event.target.style.color = "green";
  // }
  // function onHoverFontColorLeave(event: any) {
  //   event.target.style.color = "#fff";
  // }

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