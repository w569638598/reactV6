import { useEffect, useState } from "react"
import { getStuListApi } from "../api/stuApi"
import { NavLink, useLocation } from "react-router-dom"
import Alert from './Alert';
export function Home(props) {
    const [stuList, setStuList] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [searchList, setSearchList] = useState([])
    function changeSearch(v) {
        setSearchItem(v)
        const arr = stuList.filter(e => e.name.match(v))
        setSearchList(arr)
    }

    useEffect(() => {
        getStuListApi().then(e => {
            setStuList(e.data)
        })
    }, [])

    const location = useLocation();
    useEffect(() => {
        setAlert(location.state)
    }, [location])

    const [alert, setAlert] = useState(null)

    const showAlert = alert ? <Alert alert={alert.alert} type={alert.type}></Alert> : '';
const list = searchItem ? searchList : stuList
    const trs = list.map((item, i) => {
        return (
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td><NavLink to={`/Detail/${item.id}`}>详情</NavLink></td>
                
            </tr>
        )
    })
    return (
        <div>
            {showAlert}
            <h1>学生列表</h1>
            <input
                type="text"
                placeholder="搜索"
                className="form-control"
                value={searchItem}
                onChange={e => changeSearch(e.target.value)}
            />
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>联系方式</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </div>
    )
}