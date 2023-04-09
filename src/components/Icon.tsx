import { Component, ComponentProps, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

interface IconProps extends ComponentProps<any> {
  icon: string;
}

const Icon: Component<IconProps> = (props: IconProps) => {
  const [component, classes, container] = splitProps(
    props,
    ["icon"],
    ["class"]
  );
  return (
    <svg {...container} class={twMerge("h-5 w-5", classes.class)}>
      <use href={`#icon-${component.icon}`} />
    </svg>
  );
};

export default Icon;
