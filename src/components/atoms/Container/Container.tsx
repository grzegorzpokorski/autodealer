type ContainerProps = JSX.IntrinsicElements["div"] & {
  as?: "div";
};

export const Container = ({
  as: Tag = "div",
  children,
  ...rest
}: ContainerProps) => (
  <Tag className="max-w-7xl w-full mx-auto px-3 relative z-[2]" {...rest}>
    {children}
  </Tag>
);
