import React from 'react';

export default function NavigationMenu() {

  const NAV_HOME_COLOR:     string = "#C2185B";
  const NAV_ABOUT_COLOR:    string = "#1976D2";
  const NAV_SERVICES_COLOR: string = "#F57C00";
  const NAV_CONTACT_COLOR:  string = "#327F62";
  const NAV_LOGIN_COLOUR:   string = "#fff";
 
  const navigationPagesList = [
    {id: 1, pageName: "Home", pageLink: "/", fontColor: NAV_HOME_COLOR},
    {id: 2, pageName: "About", pageLink: "about", fontColor: NAV_ABOUT_COLOR},
    {id: 3, pageName: "Services", pageLink: "services", fontColor:  NAV_SERVICES_COLOR},
    {id: 4, pageName: "Contact", pageLink: "contact", fontColor: NAV_CONTACT_COLOR},
    {id: 5, pageName: "Login", pageLink: "Login", fontColor: NAV_LOGIN_COLOUR},
  ];
  
  const NAV_LOGIN_MOUSE_OVER: string = "#D500F9"

  const parsedNavigationPages = Array.isArray(navigationPagesList) && navigationPagesList.map(navigationPage => (
    <li key={navigationPage.id}>
      <a 
        className={navigationPage.pageName}
        href={navigationPage.pageLink} 
        onMouseOver={(event:any)=>{event.target.style.color = NAV_LOGIN_MOUSE_OVER}}
        onMouseLeave={(event:any)=>{event.target.style.color = navigationPage.fontColor}}
        style={{color: navigationPage.fontColor}}
        >{navigationPage.pageName}</a>
    </li>
  ));


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