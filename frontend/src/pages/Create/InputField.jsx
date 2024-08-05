const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  isTextArea,
  required,
  min,
  max,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold">{label}</label>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          name={name}
          type={type}
          className="py-1 px-4 border rounded-md shadow"
          required={required}
        />
      ) : (
        <input
          placeholder={placeholder}
          className="py-1 px-4 border rounded-md shadow"
          name={name}
          type={type}
          min={min}
          max={max}
          required={required}
          step={type === "number" && "0.1"}
        />
      )}
    </div>
  );
};
export default InputField;
