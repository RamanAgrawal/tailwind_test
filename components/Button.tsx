interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

// Create a button component with  props
const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <button
      {...rest}
      className="p-3 border rounded-full bg-white hover:-translate-y-1 transition-all duration-150 font-bold"
    >
      {title}
    </button>
  );
};

export default Button;
