import * as PIXI from "pixi.js";

export function AddObjects(
  app: PIXI.Application,
  object: PIXI.Graphics | PIXI.Sprite
) {
  app.stage.addChild(object);
}

export function CreateApplication(
  height: number = 600,
  width: number = 900,
  backgroundColor: number = 0x000000
): PIXI.Application {
  return new PIXI.Application({
    height: height,
    width: width,
    backgroundColor: backgroundColor,
    antialias: true
  });
}

export function CreateRectangle(
  x: number,
  y: number,
  width: number,
  height: number,
  backgroundColor: number
) {
  const rectangle = new PIXI.Graphics();

  rectangle.beginFill(backgroundColor);
  rectangle.drawRect(x, y, width, height);
  rectangle.endFill();

  return rectangle;
}

export function CreateImage(
  x: number,
  y: number,
  width: number,
  height: number,
  src: string
) {
  const image = PIXI.Sprite.from(src);

  image.anchor.set(0.5);

  image.x = x;
  image.y = y;
  image.width = width;
  image.height = height;

  return image;
}
