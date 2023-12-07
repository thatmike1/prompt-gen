const Prompt = ({ text, onGenerate }) => {
  return (
    <div>
      <p>{text}</p>
      <button onClick={onGenerate}>Generate</button>
    </div>
  );
};

export default Prompt;
