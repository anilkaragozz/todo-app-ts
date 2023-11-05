import React from 'react'

type IProps = {
    todo: string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    addMessage: () => void
}


const Input:React.FC<IProps> = ({todo, setTodo, addMessage}) => {
  return (
    <div> 
        <input type="text" onChange={e => setTodo(e.target.value)} placeholder='Yazınız'/>
        <button onClick={addMessage}> Ekle </button>
    </div>
  )
}

export default Input
