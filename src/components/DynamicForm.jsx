import { useState } from "react";

const DynamicForm = ({ placeholders, onSubmit }) => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {placeholders.map((placeholder, index) => (
        <div key={index}>
          <label>{placeholder}</label>
          <input
            type="text"
            name={placeholder}
            value={values[placeholder] || ""}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Generate</button>
    </form>
  );
};

export default DynamicForm;
