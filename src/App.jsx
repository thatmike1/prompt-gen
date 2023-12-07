import { useState } from "react";
import PromptGenerator from "./components/PromptGenerator";
import DynamicForm from "./components/DynamicForm";
import FinalText from "./components/FinalText";

function App() {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [finalText, setFinalText] = useState("");

  const handlePromptSelection = (prompt) => {
    setSelectedPrompt(prompt);
  };

  const handleFormSubmission = (values) => {
    setFormValues(values);
    let text = selectedPrompt.text;
    for (let key in values) {
      text = text.replace(`[${key}]`, values[key]);
    }
    setFinalText(text);
  };

  return (
    <div className="App">
      <PromptGenerator onPromptSelect={handlePromptSelection} />
      {selectedPrompt && (
        <DynamicForm
          placeholders={selectedPrompt.placeholders}
          onSubmit={handleFormSubmission}
        />
      )}
      {finalText && <FinalText text={finalText} />}
    </div>
  );
}

export default App;
