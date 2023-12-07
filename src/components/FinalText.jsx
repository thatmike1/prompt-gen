/* eslint-disable react/prop-types */
const FinalText = ({ text, onCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    onCopy();
  };

  return (
    <div>
      <p>{text}</p>
      <button className="button" onClick={handleCopy}>
        Copy to clipboard
      </button>
    </div>
  );
};

export default FinalText;
