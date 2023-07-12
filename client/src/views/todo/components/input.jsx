import { useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../../../redux/todolistSlice"

function Input(props) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    function submitEvent() {
        dispatch(add(value))
        setValue('')
    }
    return(
        <div className="form-inline" style={{
            display: 'flex',
        }}>
            <input 
                type="text"
                className="form-control" 
                style={{
                    width: 'auto',
                    marginRight: '10px'
                }}
                placeholder="请输入待办事项"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="btn btn-primary" onClick={e => submitEvent(e.target.value)}>提交</button>
        </div>
    )
}

export default Input