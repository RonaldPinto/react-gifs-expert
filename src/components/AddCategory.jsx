import { useState } from 'react'




export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState('One Punch')

  const onInputChange = ({target}) => {
    setinputValue(target.value)
    // console.log(event);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    if (inputValue.trim().length <= 1) return
    // setCatergories((categories) => [inputValue, ...categories])
    setinputValue('')
    onNewCategory(inputValue)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
