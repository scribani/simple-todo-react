import React, { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      alert('¡No se puede añadir una tarea sin nombre!');
    } else {
      props.addTask(name);
    }
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='label-wrapper'>
        <label htmlFor='new-todo-input' className='label__lg'>
          ¿Qué se necesita hacer?
        </label>
      </h2>
      <input
        type='text'
        id='new-todo-input'
        className='input input__lg'
        name='text'
        autoComplete='off'
        value={name}
        onChange={handleChange}
        autoFocus
      />
      <button type='submit' className='btn btn__primary'>
        Añadir
      </button>
    </form>
  );
}

export default Form;
