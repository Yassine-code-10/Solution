import { useDrag } from "react-dnd"
import { InputType } from "../assets/items"

export const Item = ({id, type, handleChange}: {id:string, type:InputType, handleChange: any}) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'item',
    item: {id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));
  
  return (
    <div 
    ref={drag} 
    className={`flex items-center pl-4 border-solid border-black rounded border h-9 w-2/3 ${isDragging && 'opacity-25'}`}>
      <label className='pr-2' htmlFor={id}>{type}</label>
      {
      type === InputType.TEXT || type === InputType.CHECKBOX ? 
      <input onChange={handleChange}  type={type} id={id}  name={type} 
      className ={type === InputType.TEXT ? 'w-2/3 border rounded border-black':''}
      />:
      <select onChange={handleChange} name={type} id={id}>
        <option value='option1'>option1</option>
        <option value='option2'>option2</option>
        <option value='option3'>option3</option>
      </select>
      }
    </div>
  )
}
