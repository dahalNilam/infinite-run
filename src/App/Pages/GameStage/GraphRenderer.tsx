import React from "react";
import { PixiGraph } from "./PixiGraph";
import { IPosition } from "Src/App/Interfaces/IPosition";

interface IProps {
  hero: IPosition;
  attachToParent?: HTMLElement | null;
}

export class GraphRenderer extends React.Component<IProps> {
  private pixiGraph = new PixiGraph();
  private DOMRef = React.createRef<HTMLDivElement>();

  /**
   * Setup the renderer using PIXI
   */
  public componentDidMount() {
    const { hero, attachToParent } = this.props;

    if (this.DOMRef.current) {
      this.DOMRef.current.appendChild(this.pixiGraph.application.view);
    }

    if (attachToParent) {
      this.handleResize(attachToParent);
    }

    window.addEventListener("resize", () => this.handleResize(attachToParent));

    this.renderHero(hero);
  }

  /**
   * Clear memory after component unmounts
   */
  public componentWillUnmount() {
    window.removeEventListener("resize", () =>
      this.handleResize(this.props.attachToParent)
    );
  }

  public componentDidUpdate(nextProps: IProps) {
    const { hero, attachToParent } = this.props;

    if (hero !== nextProps.hero) {
      this.renderHero(hero);
    }

    if (attachToParent !== nextProps.attachToParent) {
      this.handleResize(nextProps.attachToParent);
    }
  }

  /**
   * Resize the "canvas" area when the window resizes
   */
  private handleResize = (obj?: HTMLElement | null) => {
    if (!obj) {
      return;
    }

    this.pixiGraph.application.renderer.resize(
      obj.clientWidth,
      obj.clientHeight
    );
    this.pixiGraph.application.render();
  };

  private renderHero = (hero: IPosition) => {
    this.pixiGraph.addHero(hero);

    this.pixiGraph.applyToScene();
  };

  public render() {
    return <div ref={this.DOMRef} />;
  }
}
