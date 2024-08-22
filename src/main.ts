import { Scenes } from "./core/scene";

import console from "./core/console";
import { GameTime } from "./core/systems/timer";
import { game_events } from "./game";

import collisions_test from "./core/test_scenes/collisions";

import main_menu from "./scenes/main_menu";
import scene_test from "./core/test_scenes/scene_test";

love.load = () => {
  Scenes.switch(scene_test);

  game_events.on("quit", () => {
    love.event.quit();
  });

  game_events.on("start", () => {
    console.log("Starting game...");
    // Start here
    // Scenes.switch(main_game);
  });
};

love.update = (dt: number) => {
  GameTime.update(dt);
  Scenes.update(dt);
};

love.keypressed = (key, scancode, isrepeat) => {
  if (key === "escape") {
    game_events.emit("quit");
  }

  Scenes.handlers.keypressed(key, scancode, isrepeat);
};

love.mousemoved = (x, y, dx, dy, istouch) => {
  Scenes.handlers.mousemoved(x, y, dx, dy, istouch);
};

love.draw = () => {
  Scenes.draw();
  love.graphics.setColor(1, 1, 0, 1);
};

// Forward the rest of these events along to the scene
love.touchmoved = Scenes.handlers.touchmoved;
love.touchreleased = Scenes.handlers.touchreleased;
love.touchmoved = Scenes.handlers.touchmoved;
love.joystickpressed = Scenes.handlers.joystickpressed;
love.joystickreleased = Scenes.handlers.joystickreleased;
love.joystickaxis = Scenes.handlers.joystickaxis;
love.joystickhat = Scenes.handlers.joystickhat;
love.gamepadpressed = Scenes.handlers.gamepadpressed;
love.gamepadreleased = Scenes.handlers.gamepadreleased;
love.gamepadaxis = Scenes.handlers.gamepadaxis;
love.joystickadded = Scenes.handlers.joystickadded;
love.joystickremoved = Scenes.handlers.joystickremoved;
love.focus = Scenes.handlers.focus;
love.resize = Scenes.handlers.resize;
love.mousefocus = Scenes.handlers.mousefocus;
love.visible = Scenes.handlers.visible;
// love.keypressed = Scenes.handlers.keypressed;
love.lowmemory = Scenes.handlers.lowmemory;
love.keyreleased = Scenes.handlers.keyreleased;
love.textinput = Scenes.handlers.textinput;
love.filedropped = Scenes.handlers.filedropped;
love.textedited = Scenes.handlers.textedited;
love.directorydropped = Scenes.handlers.directorydropped;
love.mousemoved = Scenes.handlers.mousemoved;
love.displayrotated = Scenes.handlers.displayrotated;
love.quit = Scenes.handlers.quit;
love.mousepressed = Scenes.handlers.mousepressed;
love.mousereleased = Scenes.handlers.mousereleased;
love.wheelmoved = Scenes.handlers.wheelmoved;
love.touchpressed = Scenes.handlers.touchpressed;
