import List from "./components/List"
import Input from "./components/input"
import './css/index.css'
function Todo(props) {
    return (
        <div className="todoPage">
            <h1 className="lead" style={{
                marginBottom: '30px'
            }}>待办事项</h1>
            <Input store={props.store}></Input>
            <List  store={props.store}></List>
        </div>
    )
}

export default Todo