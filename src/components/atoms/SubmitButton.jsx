
const SubmitButton = ({ onClick, label }) => (
  <button
    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out"
    onClick={onClick}
  >
    {label}
  </button>
);

export default SubmitButton;
