import React from 'react';

function FilterButton(props) {
  return (
    <button
      type='button'
      className='btn toggle-btn'
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className='visually-hidden'>Tareas a ser mostradas: </span>
      <span>{props.name}</span>
    </button>
  );
}

export default FilterButton;
