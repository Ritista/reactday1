import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import Card from "./component/card";
import Pic from "./assets/img1.avif";
import Picture from "./assets/img2.avif";
import New from "./component/new";
function App() {
  let b="Ritista"
  let c="https://images.unsplash.com/photo-1718830884370-cf77049f79ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8";
  return (
    <React.Fragment>
    <Header/>
    <Card img={Pic} title="today is day 25" desc="Hi I'm ritista."/>
    <New img src={Picture}/>
    <img src={c} alt=""/>
    <img src={Pic} alt=""/>
    <img src="https://images.unsplash.com/photo-1718603630685-d2605d5190e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8" alt=""/>
    <h1>hello {b}</h1>
    <h2>What's up?</h2>
    <br/>
    <hr/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
