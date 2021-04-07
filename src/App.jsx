import React from 'react';
import './App.scss';
import { Login, Register } from "./Components/Login/index";

class App extends React.Component { 

   constructor(props) {
     super(props);
     this.state = {
       isLogginActive: true
     };
   }

   /* Adicoionando if para aba lateral */
   changeState() { 
     const { isLogginActive } = this.state;
      if (isLogginActive) {
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
      } else {
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
      }
      this.setState((prevState) => ({ isLogginActive: !prevState.isLogginActive }));
   }

   render() {
     const { isLogginActive } = this.state;
     /* Aqui acrescentamos abas ao lado para logar ou registrar-se */
     const current = isLogginActive ? "Register" : "Login";
     const currentActive = isLogginActive ? "login" : "register";
     return(
    <div className="App">
     <div className="login">
      <div className="container">
        {isLogginActive && (
        <Login containerRef={(ref) => this.current = ref} /> 
        )}
        { !isLogginActive && (
        <Register containerRef={(ref) => this.current = ref} />
        )}
      </div>
      <RightSide current={current} containerRef= {ref => this.rightSide = ref} onClick={this.changeState.bind(this)} />
     </div>
    </div>
      )

   }

}

/*function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}
*/

const RightSide = props => {
  return (
  <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
      <div className="text">{props.current}</div>
    </div>
  </div>
  );
};


export default App;
