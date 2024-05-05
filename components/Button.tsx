interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  transparent?: boolean;
  className?: string;
}

// Create a button component with  props
const Button: React.FC<ButtonProps> = ({
  title,
  transparent,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`p-3 px-6 border-2 rounded-full transition-all duration-150 ${
        transparent
          ? "bg-transparent text-white hover:bg-white hover:text-black"
          : "bg-white"
      } hover:-translate-y-1 transition-all duration-150 font-semibold ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
