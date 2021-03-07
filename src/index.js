import React, { Component, Fragment, Suspense } from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";
import Boy from "./Boy";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActif : false,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState(state => ({
            isActif: !state.isActif
        }));
      }

  render(){
    return (
        <Fragment>
      <Canvas >
        <ambientLight />
        <directionalLight intensity={1} />
        <ambientLight intensity={0.2} />
        <Suspense fallback={null}>
          <Boy animation={this.state.isActif} />
        </Suspense>
      </Canvas>
      <button onClick={this.handleClick}>Animation</button>
      </Fragment>
    );
  }
}

render(<App />, document.querySelector("#root"));
