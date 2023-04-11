import type { OverlayScrollbars } from "overlayscrollbars";
import { twMerge } from "tailwind-merge";
import "./cube.css";

import { spring, timeline } from "motion";
import { Component, onMount } from "solid-js";
import { debounce } from "../../shared/debounce";

// transform: scale3d(var(--cube-scale), var(--cube-scale), var(--cube-scale))
//     rotateX(-25deg) rotateY(var(--cube-ry)) rotateZ(0deg);

const enterAnimation = (direction: "left" | "right" = "right") => {
  return timeline([
    [
      ".cube-wrapper",
      { opacity: [0, 1], scale: [0, 1], translateY: ["100%", "0%"] } as any,
      { duration: 1, easing: "ease-out" },
    ],
    [
      ".cube",
      { rotateY: [90, direction === "right" ? 15 : -15], rotateX: [-25, -25] },
      { easing: spring({ damping: 7, velocity: 1000 }) },
    ],
  ]);
};

// [
//   ".cube",
//   {
//     rotateY: [15, 15],
//     rotateX: [-25, -25],
//     rotateZ: [0, 20],
//   },
//   { easing: spring() },
// ],
// [
//   ".cube",
//   {
//     rotateY: [15, 15],
//     rotateX: [-25, -25],
//     rotateZ: [20, 0],
//   },
//   { easing: spring({ velocity: 100, damping: 5 }), at: "-0.5" },
// ],

const warnAnimation = () => {
  return timeline([
    [
      ".cube",
      { rotateY: [15, 180 + 15], rotateX: [-25, -25] },
      { easing: spring() },
    ],
    [".cube-wrapper", { scale: 0 }, { easing: "ease-in", duration: 0.5 }],
    [".cube-wrapper", { left: "61vw" }, { duration: 0.1 }],
    [".cube-wrapper", { scale: 1 }, { easing: "ease-in", duration: 0.5 }],
    [
      ".cube",
      { rotateY: [180 + 15, -15], rotateX: [-25, -25] },
      { easing: spring(), at: "-0.3" },
    ],
  ]);
};

const Cube: Component = () => {
  let wrapper!: HTMLDivElement;
  // TODO: Animate the cube using motion
  onMount(async () => {
    if (getComputedStyle(wrapper).display === "none") return;
    await enterAnimation().finished;
    const osi = (window as any).lheidoOSI as OverlayScrollbars;
    osi.on(
      "scroll",
      debounce(() => {
        // Detect the collision between the cube wrapper and the span inside the h1 elements
        // const spans = document.querySelectorAll("h1 span");
        // const cubeRect = wrapper.getBoundingClientRect();
        // const isColliding = Array.from(spans).some((span) => {
        //   const spanRect = span.getBoundingClientRect();
        //   return (
        //     cubeRect.left < spanRect.right &&
        //     cubeRect.right > spanRect.left &&
        //     cubeRect.top < spanRect.bottom &&
        //     cubeRect.bottom > spanRect.top
        //   );
        // });
        // if (isColliding) {
        //   warnAnimation();
        // }
      }, 500)
    );
  });
  return (
    <div
      ref={wrapper}
      class={twMerge(
        "cube-wrapper",
        "absolute opacity-0 max-md:hidden top-[20vh] left-[16vw] z-50"
      )}
    >
      <div class="cube" aria-hidden="true">
        <div class="front select-none">٩(｡•́‿•̀｡)۶</div>
        <div class="back select-none">٩(× ×)۶</div>
        <div class="left select-none"></div>
        <div class="right select-none"></div>
        <div class="top select-none"></div>
        <div class="bottom select-none"></div>
      </div>
    </div>
  );
};

export default Cube;
