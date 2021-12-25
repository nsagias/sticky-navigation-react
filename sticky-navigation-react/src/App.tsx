import React from 'react';
import './App.css';
import './Nav.css';
// import LandingPage from './components/LandingPage';
// import NavigationMenu from './components/NavigationMenu';

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


function App() {

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    console.log("scrollTop", scrollTop );
    if(scrollTop > 200) console.log('bingo');
  };

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
    <div style={styles.container} onScroll={scrollHandler}>
      <nav style={styles.nav} >
      <div style={styles.navContainer} >
        <h1 ><a style={styles.navA} href="/index.html">A Company</a></h1>
        <ul style={styles.navUl}>
          {parsedNavigationPages}
        </ul>
      </div>
    </nav>
    <div style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.heroH1}>Sticky Navigation and Scroll</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, possimus.</p>
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


const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0px auto",
    overflowY: "auto",
    overflowX: "hidden",
  },
  nav: {
    position: "fixed",
    backgroundColor: "#222",
    top: 0,
    left: 0,
    right: 0,
    transition: "all 0.3s ease-in-out",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
    transition: "all 0.3s ease-in-out",
  },
  navUl :{
    display: 'flex',
    listStyleType: 'none',
    alignItems: 'center',
    justifyCcontent: 'center',
  },
  navA: {
    color: '#fff',
    textDecoration: 'none',
    padding: '7px 15px',
    transition: 'all 0.3s ease-in-out',
  },
  navActive: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  navActiveA: {
    color: '#000',
  },
  navActiveContainer: {
    padding: "10px 0",
  },
  navACurrent: {
    color: "#86B049",
    fontWeight: 'bold', 
    },
  navAHover: {
    color: "#86B049",
    fontWeight: 'bold', 
  },
  hero: {
    backgroundImage: "url('https://images.unsplash.com/photo-1578104053615-4d7664bd6364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
    height: "100vh",
    // /* text section */
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    marginBottom: "10px",
    zIndex: -2,
    // '&::before': {
    //   content: "",
    //   position: "absolute", 
    //   top: '0',
    //   left: '0',
    //   width: "100%",
    //   height: "100%",
    //   backgroundColor: "rgba(0, 0, 0, 0.5)",
    //   zIndex: -1
    //   }
    },
    heroH1: {
      fontSize: "50px",
      margin: "20px 0 20px",
    },
    heroP: {
      fontSize: "20px",
      letterSpacing: "1.5px",
    },
    contentH2: {
      fontSize: "150%",
      margin: "20px 0",
    },
    contentH3: {
      fontSize: "150%",
      margin: "20px 0",
    },
    contentP: {
      color: "#555",
      lineHeight: "30px",
      letterSpacing: "0.3px",
    }


} as const;

export default App;
