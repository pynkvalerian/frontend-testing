import React, {useState} from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event) => {
    setSubmitted(true);
    setName('');
    event.preventDefault();
  }

  const onChangeInput = (event) => {
    const {value} = event.target;
    setName(value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type={'text'}
        name={'firstName'}
        id={'firstName'}
        value={name}
        placeholder={'first name'}
        onChange={onChangeInput} />
      <button type="submit" disabled={submitted}>Submit</button>
      {submitted && (
        <p id="submitted-text">submitted</p>
      )}
    </form>
  )
}

export default Form;
