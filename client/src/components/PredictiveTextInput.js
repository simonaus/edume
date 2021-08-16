import { useState } from 'react';

export const PredictiveTextInput = () => {

  const [input, setInput] = useState('');
  const [warning, setWarning] = useState('');

  function submitHandler(e) {
    e.preventDefault();

    if (input.match(new RegExp(/[^2-9]/))) {
      setWarning('* Input must only contain digits 2-9');
      return;
    }

    setWarning('');
    setInput('');
  }

  return (
    <div>
      <div style={styles.warning}>{warning}</div>
      <form onSubmit={submitHandler}>
        <input type='text' value={input} placeholder="Input digits (2-9) here" onChange={(e) => { setInput(e.target.value) }} />
        <button style={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
}

const styles = {
  warning: {
    color: '#8B0000',
    fontWeight: 'bold',
    fontSize: '.7rem',
  },
  button: {
    marginLeft: '5px',
  }
}