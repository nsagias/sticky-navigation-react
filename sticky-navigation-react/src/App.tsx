import React from 'react';
import './App.css';
import './Nav.css';
// import LandingPage from './components/LandingPage';
// import NavigationMenu from './components/NavigationMenu';

function App() {

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    console.log("scrollTop", scrollTop );
    if(scrollTop > 200) console.log('bingo');
  };
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


  return (
    <div className="App" onScroll={scrollHandler} >
      <nav className="nav">
      <div className="container" >
        <h1 className="logo"><a href="/index.html">A Company</a></h1>
        <ul>
          {parsedNavigationPages}
        </ul>
      </div>
    </nav>
    <div className="hero" >
      <div className="container">
        <h1>Sticky Navigation and Scroll</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, possimus.</p>
      </div>
    </div>

    <section className="container content" >
      <h2>Paragraph One</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus natus ab distinctio odio. Exercitationem ad vel possimus dolore in, incidunt blanditiis minus unde voluptatem quaerat quae numquam ratione velit ut dolor voluptas beatae temporibus obcaecati provident deserunt repellat. Voluptas beatae dolore tempore ullam molestias sed voluptate voluptatibus, ducimus provident distinctio deserunt laboriosam optio, consequuntur necessitatibus! Velit in quisquam earum voluptatibus nihil dolorum corporis, enim dolore laudantium rerum voluptates inventore! Reprehenderit officia maxime explicabo ratione delectus. Harum, unde ea reiciendis, nihil deleniti earum voluptate rerum numquam in assumenda illo molestias amet. Placeat magnam a consequuntur voluptatibus! Quisquam officiis suscipit quod minima.</p>
      <h3>Paragraph Two</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione necessitatibus quo repudiandae officia laboriosam nulla sed iure ducimus. Animi, voluptatem ipsa veniam sequi praesentium repellendus nihil sint excepturi, ratione nobis voluptate in suscipit et officiis perferendis esse eligendi obcaecati? Repudiandae nisi at, veniam sit pariatur corrupti soluta molestiae nihil ipsum, eaque ut odio modi. Dolor culpa, reprehenderit aliquid labore cum deserunt explicabo corrupti expedita, officia adipisci consequatur quasi! Maiores omnis, debitis aliquid consequuntur placeat et deleniti, perspiciatis quibusdam iure doloremque facilis? Quidem ratione harum voluptatum maiores ipsam dicta accusantium impedit eaque quo quaerat nam illum rerum, id voluptate dolorem nesciunt.</p>
    </section>
     
    </div>
  );
}

export default App;
