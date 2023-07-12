
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { change, del } from '../../../redux/todolistSlice';




function List(props) {
    const listItem = useSelector(state => state.todo.list)
    const dispatch = useDispatch()
    const list = listItem.map((e, i) => {
        return (
            <li style={{
                cursor: 'pointer'
            }} key={i} className="text-primary">
                <span onClick={() => dispatch(change(i))} className={['item', e.status ? 'completed' : ''].join(" ")}>{e.content}</span>
                <Icon icon="iconamoon:close-duotone" onClick={() => dispatch(del(i))}></Icon>
            </li>
        )
    })
    return(
        <ul>
           {list} 
        </ul>
    )
}

export default List