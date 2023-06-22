import { useDrop } from 'react-dnd';
import { Item } from './Item'

const Zone = ({ items, handleZone, side, setitems }: {items: any, handleZone: any, side: any, setitems: any}) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item: any) => addItemToZone(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addItemToZone = (id: any) => {
       setitems(prev =>{
        const newItems = prev.map(el=>{
            if (el.id === id){
                return {...el, side: side}
            }
            return el;
        })
        return newItems
       })
    }

    return (
        <section
            ref={drop}
            className={`w-1/3 h-auto border-solid border-black items-center rounded border-2 flex flex-col pt-4 gap-2 ${isOver && 'bg-slate-200'}`}>
            {items.filter(el=> el.side === side).map((item: any) => {
                return <Item id={item.id} type={item.type} handleChange={handleZone} key={item.id} />
            })
            }
        </section>
    )
}

export default Zone