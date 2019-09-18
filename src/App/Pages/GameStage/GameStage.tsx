import React from "react";
import * as PIXI from "pixi.js";
import {
  CreateApplication,
  CreateRectangle,
  CreateImage,
  AddObjects
} from "App/Utilities/PIXIUtils";

export default class GameStage extends React.Component {
  private app: PIXI.Application = CreateApplication();

  private DOM = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    if (this.DOM.current) {
      this.initializeCanvas();

      this.DOM.current.appendChild(this.app.view);
    }
  }

  private initializeCanvas = () => {
    const rectangle = CreateRectangle(50, 50, 100, 100, 0xde3249);

    const mario = CreateImage(200, 50, 50, 50, "src/Assets/mario.png");

    AddObjects(this.app, rectangle);
    AddObjects(this.app, mario);
  };

  public render() {
    return <div ref={this.DOM} />;
  }
}
