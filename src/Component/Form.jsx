import React, { useState } from "react";
const Form = () => {
  const [userName, setUserName] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("React");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${userName} ${comments} ${topic}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>userName</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br /> <br />
      <label>Comments</label>
      <textarea
        type="text"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      ></textarea>
      <br /> <br />
      <label>Topic</label>
      <select value={topic} onChange={(e) => setTopic(e.target.value)}>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">VUE</option>
      </select>
      <br />
      <br />
      <button type="Submit">SUBMIT</button>
    </form>
  );
};
export default Form;
