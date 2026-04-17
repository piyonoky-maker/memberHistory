import { useEffect, useState } from 'react';
import { memberListDB } from '../services/memberApi';
import ReportMemInfoDetailRow from './ReportMemInfoDetailRow';
//import { Button, Modal } from 'react-bootstrap';
//import { MyInput, MyLabel, MyLabelAb } from '../style/FormStyle';
import { useNavigate } from 'react-router';

const ReportMemInfoList = () => {
  const [reportMemInfoList, setReportMemInfoList] = useState([]);
  // 사용자 입력한 검색어 담기
  const [keyword, setKeyword] = useState('');
  const [searchType, setSearchType] = useState('');

  const [state, setState] = useState(0);
  const getMemberList = async () => {
    const dept = {
      searchType: searchType,
      keyword: keyword,
    };
    const res = await memberListDB(dept);
    setReportMemInfoList(res);
    //console.log(res.data);
  };

  useEffect(() => {
    //state가 변하면 getDeptList() 다시 호출됨.
    //0(초기값)-> 1 -> 2 -> 3
    getMemberList();
  }, [keyword, searchType, state]);

  return (
    <>
      <h3>부서정보</h3>

      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>부서번호</th>
              <th>부서명</th>
              <th>지역</th>
            </tr>
          </thead>
          <tbody>
            {reportMemInfoList.map((test) => (
              <ReportMemInfoDetailRow key={test.memSeq} dept={test} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ReportMemInfoList;
