
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addStuApi, editStuByIdApi, getStuByIdApi } from '../api/stuApi';

export function AddOrEdit(props) {

    const navigate = useNavigate()
    const [stu, setStu] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        education: '本科',
        graduationschool: '',
        profession: '',
        profile: ''
    })

    const { id } = useParams();

    useEffect(()=> {
        if(id){
            getStuByIdApi(id).then(e => {
                if(e.status === 200){
                    setStu(e.data)
                }
            })
        }
    }, [id])

    function submitStuInfo(e) { 
        e.preventDefault();
        for (const key in stu) {
            if (Object.hasOwnProperty.call(stu, key)) {
                const v = stu[key];
                if(!v){
                    alert('请完善表单每一项')
                    return
                }
            }
        }
        if(id){
            editStuByIdApi(id, stu).then(e => {
                if(e.status === 200){
                    navigate('/home', {
                        state: {
                            alert: "修改成功",
                            type: 'success'
                        }
                    })
                }else{
                    navigate('/home', {
                        state: {
                            alert: e.statusText,
                            type: 'error'
                        }
                    })
                }
                console.log(e);
            })
            return 
        }
        addStuApi(stu).then(e => {
            console.log(e);
            if(e.status === 201){
                
                navigate('/home', {
                    state: {
                        alert: "用户添加成功",
                        type: "success"
                    }
                })
            }
        })
    }


    function updateStuInfo(v, key) {
        const newCV = { ...stu }
        newCV[key] = v.trim();
        setStu(newCV)
    }

    return (
        <div className="container">
            <h1>{id ? "修改学生" : "添加学生"}</h1>
            <form action="" id="form" onSubmit={submitStuInfo}>
                <div className="well">
                    <div className="form-group">
                        <label>姓名</label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='请填写用户名'
                            value={stu.name}
                            onChange={e => updateStuInfo(e.target.value, 'name')}
                        />
                    </div>
                    <div className="form-group">
                        <label>年龄</label>
                        <input type="text" className='form-control' placeholder='请填写用户年龄'
                            value={stu.age}
                            onChange={e => updateStuInfo(e.target.value, 'age')}
                        />
                    </div>

                    <div className="form-group">
                        <label>电话</label>
                        <input className='form-control' type="text" placeholder='请填写用户电话'
                            value={stu.phone}
                            onChange={e => updateStuInfo(e.target.value, 'phone')}
                        />
                    </div>
                    <div className="form-group">
                        <label>邮箱</label>
                        <input className='form-control' type="text" placeholder='请填写用户邮箱'
                            value={stu.email}
                            onChange={e => updateStuInfo(e.target.value, 'email')}
                        />
                    </div>
                    <div className="form-group">
                        <label>学历</label>
                        <select className='form-control' value={stu.education}
                            onChange={e => updateStuInfo(e.target.value, 'education')}
                        >

                            <option>小学</option>
                            <option>初中或职中</option>
                            <option>高中或职高</option>
                            <option>专科</option>
                            <option>本科</option>
                            <option>硕士</option>
                            <option>博士</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>毕业学校</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="请填写用户毕业院校"
                            value={stu.graduationschool}
                            onChange={(e) => updateStuInfo(e.target.value, 'graduationschool')}
                        />
                    </div>
                    <div className="form-group">
                        <label>职业</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="请填写用户从事的相关职业"
                            value={stu.profession}
                            onChange={(e) => updateStuInfo(e.target.value, 'profession')}
                        />
                    </div>
                    <div className="form-group">
                        <label>个人简介</label>
                        <textarea className='form-control' placeholder='请简单介绍一下你自己，包括兴趣、爱好等信息...'
                            value={stu.profile}
                            onChange={e => updateStuInfo(e.target.value, 'profile')}
                            cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">{id ? "确认修改" : "确认添加"}</button>
                </div>
            </form>
            
        </div>
    )
}