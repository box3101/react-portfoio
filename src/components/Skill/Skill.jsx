import { Link } from "react-router-dom";

const Skill = () => {
  const projects = [
    {
      업무명: "성과관리 OKR 솔루션 개발 (SaaS 플랫폼)",
      참여기간: "2024.06~",
      고객사: "㈜이퀄썸",
      근무회사: "㈜이퀄썸"
    },
    {
      업무명: "자사 서비스 포트폴리오 및 랜딩 페이지 개발",
      참여기간: "2024.02~2024.06",
      고객사: "㈜포켓컴퍼니",
      근무회사: "㈜포켓컴퍼니"
    },
    {
      업무명: "자사 CRM 포켓캠프 프론트엔드 개발",
      참여기간: "2020.01~2024.02",
      고객사: "㈜포켓컴퍼니",
      근무회사: "㈜포켓컴퍼니"
    },
    {
      업무명: "인천광역시 통합 웹사이트 운영 및 구축",
      참여기간: "2020.01~2022.12",
      고객사: "인천광역시",
      근무회사: "㈜이즈파크"
    },
    {
      업무명: "금융감독원 마이플랫폼 넥사크로 변환 프로젝트",
      참여기간: "2024.01~2024.02",
      고객사: "금융감독원",
      근무회사: "㈜이즈파크"
    },
    {
      업무명: "한국문화정보원 문화포털 통합 웹사이트 운영",
      참여기간: "2023.01~2024.01",
      고객사: "한국문화정보원",
      근무회사: "㈜이즈파크"
    },
    {
      업무명: "삼성 GSOP 시스템 개발 및 2차 고도화 개발",
      참여기간: "2022.09~2023.08",
      고객사: "삼성 SDI",
      근무회사: "㈜이즈파크"
    },
    {
      업무명: "인천광역시 중구청 평생교육센터 프론트화면 구축",
      참여기간: "2022.10~2023.03",
      고객사: "인천광역시 중구청",
      근무회사: "㈜이즈파크"
    },
    {
      업무명: "ICT 한국표준협회 성과관리 시스템 프론트화면 구축",
      참여기간: "2022.07~2022.11",
      고객사: "ICT 한국표준협회",
      근무회사: "㈜이즈파크"
    },
    {
      업무명: "한국정보통신기술협회 김포공항 출입관리시스템 어드민화면 구축",
      참여기간: "2022.09~2022.11",
      고객사: "한국정보통신기술협회",
      근무회사: "㈜이즈파크"
    },
    {
      업무명: "더반찬 PASS 기획전",
      참여기간: "2019.11~2019.12",
      고객사: "동원홈푸드",
      근무회사: "㈜케이와이엔네트웍스"
    },
    {
      업무명: "에코바이오 홈페이지 리뉴얼",
      참여기간: "2019.09~2019.11",
      고객사: "㈜에코바이오 홀딩스",
      근무회사: "㈜케이와이엔네트웍스"
    },
    {
      업무명: "MBC 아케데미 원격교육원 웹 접근성 작업",
      참여기간: "2019.08~2019.09",
      고객사: "㈜바른스터디",
      근무회사: "㈜케이와이엔네트웍스"
    },
    {
      업무명: "태그멤버스 홈페이지 리뉴얼",
      참여기간: "2019.07~2019.09",
      고객사: "㈜태그",
      근무회사: "㈜케이와이엔네트웍스"
    },
    {
      업무명: "MBC 아카데미 사이버 평생교육원 사이트 구축",
      참여기간: "2019.06~2019.09",
      고객사: "㈜바른스터디",
      근무회사: "㈜케이와이엔네트웍스"
    },
    {
      업무명: "네패스신소재 웹사이트 구축",
      참여기간: "2019.05~2019.07",
      고객사: "㈜네패스",
      근무회사: "㈜케이와이엔네트웍스"
    },
    {
      업무명: "GREL 웹사이트 구축",
      참여기간: "2019.03~2019.05",
      고객사: "㈜GREL",
      근무회사: "㈜케이와이엔네트웍스"
    },
    {
      업무명: "WEEP 사이트 구축",
      참여기간: "2019.04~2019.11",
      고객사: "㈜케이엘큐브",
      근무회사: "㈜케이와이엔네트웍스"
    },
    {
      업무명: "건강회복 알리미 앱 구축",
      참여기간: "2019.01~2019.03",
      고객사: "㈜이비엠센터",
      근무회사: "㈜케이와이엔네트웍스"
    },
    {
      업무명: "검단인포 사이트 운영",
      참여기간: "2018.09~2018.12",
      고객사: "이트라이브",
      근무회사: "이트라이브"
    },
    {
      업무명: "김앤장 뉴스레터 사이트 운영",
      참여기간: "2018.09~2018.12",
      고객사: "이트라이브",
      근무회사: "이트라이브"
    },
    {
      업무명: "농민신문 사이트 운영",
      참여기간: "2018.09~2018.12",
      고객사: "이트라이브",
      근무회사: "이트라이브"
    },
    {
      업무명: "바슈롬 사이트 운영",
      참여기간: "2018.09~2018.12",
      고객사: "이트라이브",
      근무회사: "이트라이브"
    },
    {
      업무명: "JW메리어트호텔 사이트 운영",
      참여기간: "2018.09~2018.12",
      고객사: "이트라이브",
      근무회사: "이트라이브"
    }
  ];

  return (
    <div className='history-section'>
      <Link to='/' className='history-close hover-target' />
      <div className='container'>
        <div className='col-12 text-center' data-aos='fade-up' style={{marginBottom : '5rem'}}>
          <h3>Skill Inventory</h3>
        </div>
        <table>
          <colgroup>
            <col width='25%' />
          </colgroup>
          <thead>
            <tr>
              <th>업무명</th>
              <th>참여기간</th>
              <th>고객사</th>
              <th>근무회사</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td className="sm-view">{project.업무명}</td>
                <td className="sm-view">{project.참여기간}</td>
                <td>{project.고객사}</td>
                <td>{project.근무회사}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skill;
