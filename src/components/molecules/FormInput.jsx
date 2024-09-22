import Input from "../atoms/Input";


const FormInput = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <Input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default FormInput;
