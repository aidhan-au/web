export default function Icon(props: {
  children: React.ReactNode;
  label: string;
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  size?: string;
}) {
  const attributes = {
    className: props.className || "inline-block",
    fill: props.fill || "none",
    stroke: props.stroke || "currentColor",
    strokeWidth: props.strokeWidth || "1.5",
    width: props.size || "24",
    height: props.size || "24",
    viewBox: `0 0 ${props.size || 24} ${props.size || 24}`,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={props.label}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...attributes}
    >
      {props.children}
    </svg>
  );
}
