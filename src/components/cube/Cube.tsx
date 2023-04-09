import { twMerge } from "tailwind-merge";
import "./cube.css";

import type { Component } from "solid-js";

const Cube: Component = () => {
  // TODO: Animate the cube using motion
  return (
    <div
      class={twMerge(
        "cube-wrapper",
        "fixed hidden top-[50vw] md:top-[10vw] left-[50vw] md:left-[10vw] z-50"
      )}
    >
      <div class="cube" aria-hidden="true">
        <div class="front">٩(｡•́‿•̀｡)۶</div>
        <div class="back">٩(× ×)۶</div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>
  );
};

export default Cube;
