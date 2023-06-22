import { useState } from 'react'
import './App.css'
import { InputType, inputs, sides } from './assets/items';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Zone from './components/Zone';

function App() {

  const [items, setitems] = useState(inputs);

  const handleChanges = (e: any) => {
    console.log(e.target.value)
    if (e.target.name === InputType.TEXT || e.target.name === InputType.LIST) {
      setitems(prev => {
        const index = prev.findIndex(el => el.id === e.target.id);
        prev[index] = { ...prev[index], value: e.target.value }
        return [...prev];
      });
    } else {
      setitems(prev => {
        const index = prev.findIndex(el => el.id === e.target.id);
        prev[index] = { ...prev[index], checked: e.target.checked }
        return [...prev];
      });
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
    <div className='w-screen bg-white m-0 p-0 h-screen'>
        <div className='flex pt-4 justify-around w-full h-1/2'>
          {sides.map(side=>{
            return <Zone items={items} handleZone={handleChanges} side={side} key={side} setitems={setitems}/>
          })}
        </div>

      <div className='flex justify-center mt-4'>
        <button className='bg-blue-600 w-60 h-8 rounded text-white'>Save</button>
      </div>

      <section className='mt-4 flex justify-center'>
        <table className='rounded border-collapse border border-slate-400'>
          <thead className='bg-slate-100'>
            <tr>
              <th className='border border-slate-300'>Id</th>
              <th className='border border-slate-300'>Value</th>
            </tr>
          </thead>
          <tbody>
            {items.filter(el=> el.side === 'right').map(el => {
              return <tr key={el.id}>
                <td className='p-2 border border-slate-300'>{el.id}</td>
                <td className='p-2 border border-slate-300'>
                  {(el.type === InputType.TEXT || el.type === InputType.LIST) ? el.value : (el.checked ? 'checked' : 'unchecked')}
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </section>
    </div>
    </DndProvider>
  )
}

export default App
