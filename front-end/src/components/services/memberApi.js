// spring boot 연동하기
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_SPRING_IP, // 예: http://localhost:8000/,
    timeout: 10000
})



export const loginUser2 = async (member) => {
    const res = await api.post('member/memberLogin', member)
    return res.data
}
// 로그인
//http://localhost:8000/member/memberLogin
export const loginUser = async (member) => {
    try {
        const res = await axios({
            method: 'post',
            url: import.meta.env.VITE_SPRING_IP+'member/memberLogin',
            data: member
        });
        
        // SEQ: console.log(res.data[0].MEM_SEQ)
        // 아이디: console.log(res.data[0].MEM_ID)
        // NAME: console.log(res.data[0].MEM_NAME)
        // TEL: console.log(res.data[0].MEM_TEL)

        return res        
    } catch (error) {
        console.log(error)
        return error
    }
}

export const deptListDB = async () => {
    const res = await axios({
        method: 'get',
        url: import.meta.env.VITE_SPRING_IP + 'member/memberList'
    })
    return res;
}

// 회원리스트
// http://localhost:8000/member/memberList
export const memberListDB = async () => {
    //console.log(JSON.stringify(member))
    const res = await axios({
        method: 'get',
        url: import.meta.env.VITE_SPRING_IP + 'member/memberList'
    })
    return res.data
}