import { useState } from 'react';

export const PredictiveTextInput = () => {

  const [input, setInput] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    setInput('');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' value={input} placeholder="Input digits here" onChange={(e) => { setInput(e.target.value) }} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}