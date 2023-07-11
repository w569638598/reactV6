import request from "./request";

/**
 * 获取学生列表
 * @returns 
 */
export function getStuListApi() {
    return request({
        url: '/students',
        method: 'get'
    })
}



/**
 * 添加学生
 * @param {object} data 学生信息对象
 * @returns 
 */
export function addStuApi(data){
    return request({
        url: '/students',
        method: 'post',
        data
    })
}



/**
 * 根据id获取学生信息
 * @param {number} id 学生id
 * @returns 
 */
export function getStuByIdApi(id){
    return request({
        url: `/students/${id}`,
        method: "get"
    })
}


/**
 * 根据id删除学生
 * @param {number} id 学生id
 * @returns 
 */
export function delStuByIdApi(id){
    return request({
        url: `/students/${id}`,
        method: 'delete',
    })
}



export function editStuByIdApi(id, data) {
    return request({
        url: `/students/${id}`,
        method: "patch",
        data
    })
}