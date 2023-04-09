import { inView as motionInView } from "motion";

export const inView = (id: string) =>
  motionInView(
    id,
    () => {
      document.querySelector<HTMLDivElement>(id)!.classList.add("visible");
    },
    { amount: window.matchMedia("(min-width: 768px)").matches ? 0.75 : 0.1 }
  );
