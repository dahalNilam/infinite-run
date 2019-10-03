import React from "react";
import { GameStage } from "./Pages/GameStage/GameStage";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ height: 600, width: 900, backgroundColor: "#DDDDDD" }}>
          <GameStage />
        </div>
      </div>
    );
  }
}

export default App;
