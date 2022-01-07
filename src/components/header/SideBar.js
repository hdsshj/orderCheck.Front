import React from "react";
// import "../../style/css/layout.css";
import logoMark from "../../resource/images/common/ico_logo-mark.png";
import logoName from "../../resource/images/common/ico_logo-name.png";

import "../../resource/css/layout.css";

const SideBar = (props) => {
  const [sidebarState, setSidebarState] = React.useState(false);

  const handelSidebar = () => {
    setSidebarState(!sidebarState);
  };
  return (
    <div class={sidebarState ? "sidebar" : "sidebar open"}>
      <div class="logo-details">
        <button type="button" class="btn-side-open" onClick={handelSidebar}>
          <img src={logoMark} alt="오더체크" />
        </button>
        <h1 class="logo_name">
          <img src={logoName} alt="오더체크" />
        </h1>
      </div>

      <ul class="nav-list">
        <li>
          <a href="dashboard.html">
            <i class="ico home"></i>
            <span class="links_name">홈</span>
          </a>
        </li>
        <li class="on">
          <a href="customManage_list.html">
            <i class="ico user"></i>
            <span class="links_name">고객 관리</span>
          </a>
        </li>
        <li>
          <a href="file_storage.html">
            <i class="ico file"></i>
            <span class="links_name">파일 보관함</span>
          </a>
        </li>
        <li>
          <a href="form_list.html">
            <i class="ico form"></i>
            <span class="links_name">상담 신청폼</span>
          </a>
        </li>
      </ul>
      <ul class="btm">
        <li>
          <a href="#">
            <i class="ico help"></i>
            <span class="links_name">자주 묻는 질문</span>
          </a>
        </li>
        <li>
          <a href="setting_company-info.html">
            <i class="ico setting"></i>
            <span class="links_name">설정</span>
          </a>
        </li>
      </ul>
      <button type="button" class="btn-lnb-close" onClick={handelSidebar}>
        <span class="hide">메뉴 닫기</span>
      </button>
    </div>
  );
};

export default SideBar;
