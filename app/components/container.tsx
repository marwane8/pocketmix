type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode;
};

export default function Container({ size, className, children }: Props) {
  let divSize = "max-w-screen-xl";
  if (size) {
    divSize = "max-w-screen-" + size;
  }

  return <div className={`container ${divSize} mx-auto px-5 ${className}`}>{children}</div>;
}
