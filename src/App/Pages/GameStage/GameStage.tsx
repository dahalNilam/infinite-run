import React from "react";
import { GraphRenderer } from "./GraphRenderer";
import { IPosition } from "Src/App/Interfaces/IPosition";

interface IState {
  hero: IPosition | null;
}

export class GameStage extends React.Component<{}, IState> {
  public readonly state: IState = {
    hero: null
  };

  private parentDOMNode = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    this.loadHero();
  }

  private loadHero = () => {
    const hero: IPosition = { x: 50, y: 50 };

    this.setState({ hero });
  };

  public render() {
    const { hero } = this.state;

    if (!hero) {
      return null;
    }

    return (
      <div ref={this.parentDOMNode}>
        <GraphRenderer
          hero={hero}
          attachToParent={this.parentDOMNode.current}
        />
      </div>
    );
  }
}
