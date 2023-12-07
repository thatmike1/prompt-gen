import Prompt from "./Prompt";

const PromptGenerator = ({ onPromptSelect }) => {
  const prompts = [
    { text: "The best [Product] in [City]", placeholders: ["Product", "City"] },
    {
      text: "Discover the amazing [Product] for [Audience]",
      placeholders: ["Product", "Audience"],
    },
    {
      text: "Travel to [Destination] with our special [Product]",
      placeholders: ["Destination", "Product"],
    },
    {
      text: "Experience the [Product] in [City] for [Audience]",
      placeholders: ["Product", "City", "Audience"],
    },
  ];

  return (
    <div>
      {prompts.map((prompt, index) => (
        <Prompt
          key={index}
          text={prompt.text}
          onGenerate={() => onPromptSelect(prompt)}
        />
      ))}
    </div>
  );
};

export default PromptGenerator;
