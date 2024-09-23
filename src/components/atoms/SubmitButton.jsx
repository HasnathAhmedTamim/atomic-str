const SubmitButton = ({ onClick, label, color }) => (
  <button
    className={`w-full font-semibold  text-white py-2 px-4 rounded-lg ${color}  `}
    onClick={onClick}
  >
    {label}
  </button>
);

export default SubmitButton;
