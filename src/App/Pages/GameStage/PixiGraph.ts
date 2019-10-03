import * as PIXI from "pixi.js";
import { CreateApplication, CreateImage } from "Src/App/Utilities/PIXIUtils";
import { IPosition } from "Src/App/Interfaces/IPosition";
import { IHero } from "Src/App/Interfaces/IHero";

export class PixiGraph {
  public application = CreateApplication();

  private static NodeRadius = 20;

  private hero;

  public addHero(hero: IPosition) {
    if (!hero) {
      return;
    }

    this.parseHero(hero);
  }

  private parseHero = (hero: IPosition) => {
    const shape = CreateImage(hero.x, hero.y, 50, 50, "src/Assets/mario.png");

    const centerX = this.application.view.width / 2;
    // Opt-in to interactivity
    shape.interactive = true;

    // Shows hand cursor
    shape.buttonMode = true;

    // Pointers normalize touch and mouse
    shape.on("pointerdown", () => console.log("Clicked"));

    this.hero = shape;
  };

  public applyToScene() {
    if (this.hero) {
      this.application.stage.addChild(this.hero);
    }
  }
}
