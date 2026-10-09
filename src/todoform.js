import { useState } from "react";

function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSumbit();
    }
  };
  return (
    <form onSubmit={handleSumbit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="введите задачу.."
      />
      <button>Save</button>
    </form>
  );
}
export default TodoForm;
