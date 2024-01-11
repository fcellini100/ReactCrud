import { ButtonProps } from "../Models/Interfaces";

const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => {
  const bgColor = `bg-${color}`;
  const hoverColor = `hover:bg-${color}/10`;
  const activeColor = `active:bg-${color}/30`;
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${hoverColor} ${activeColor} middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase transition-all bg-wi disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
    >
      {label}
    </button>
  );
};

export default Button;
