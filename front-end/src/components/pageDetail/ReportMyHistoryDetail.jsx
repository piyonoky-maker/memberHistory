import React from 'react'

const CC = () => {
  return (
    <>
      <h1>프로젝트 리스트</h1>

      <table className='tg'>
        <thead>
          <tr>
            <th className='tg-c3ow'>순번</th>
            <th className='tg-c3ow'>아이디</th>
            <th className='tg-c3ow'>이름</th>
            <th className='tg-c3ow'>전화번호</th>
            <th className='tg-c3ow'>가입일</th>
            <th className='tg-c3ow'>링크</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tg-c3ow'>1</td>
            <td className='tg-c3ow'>gar</td>
            <td className='tg-c3ow'>가람</td>
            <td className='tg-c3ow'>010-1111-1111</td>
            <td className='tg-c3ow'>2024-12-12</td>
            <td className='tg-c3ow'>
              <Link to='/ReportTask?1'>보러가기</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default CC