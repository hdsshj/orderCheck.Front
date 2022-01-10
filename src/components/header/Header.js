import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

import profile from "../../resource/images/profile.jpg";

const Header = (props) => {
  const location = useLocation();

  const HeaderText = (path) => {
    if (path === "/custom_manage") {
      return "고객 관리";
    } else if (path === "/file_storage") {
      return "파일보관함";
    } else if (path === "/consulting_form") {
      return "상담 신청폼";
    }
  };

  if (location.pathname === "/") {
    return null;
  }

  return (
    <HeaderWrap id="header" className="header">
      <h2 className="title">{HeaderText(location.pathname)}</h2>
      <ul className="menu">
        <li>
          <div className="searchbox">
            <i className="ico search"></i>
            <input type="text" placeholder="검색해보세요." />
          </div>
        </li>
        <li>
          <div className="dropdown-wrap">
            <button type="button" className="btn-drop">
              <div className="profile-details">
                <img src={profile} className="img" alt="profileImg" />
                <span className="name">홍길동님</span>
                <i className="arrow down"></i>
              </div>
            </button>
            <div className="dropdown-box">
              <ul>
                <li>
                  <a href="#" className="btn-drop-menu">
                    내 프로필
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-drop-menu">
                    회사 정보
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-drop-menu">
                    알림 설정
                  </a>
                </li>
                <li>
                  <a href="#" className="btn-drop-menu">
                    로그아웃
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <button type="button" className="btn-menu" data-info="mail">
            <i className="ico mail"></i>
          </button>
        </li>
        <li style={{ marginLeft: "14px" }}>
          <button type="button" className="btn-menu" data-info="alarm">
            <i className="ico alarm"></i>
          </button>
        </li>
      </ul>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: relative; /*min-width:1842px;*/
  background: #f7f8fb;
  top: 0;
  left: 80px;
  width: calc(100% - 140px);
  height: 70px;
  padding: 0px 30px;
  z-index: 2;

  .menu {
    display: flex;
    align-items: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    display: inline-block;
    color: #41495e;
    line-height: 32px;
    font-size: 22px;
    font-weight: 700;
  }

  .ico {
    /* min-width: 48px; */
    /* width: 30px; */
    /* height: 42px; */
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    min-width: 30px;
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .button[class*="btn"] {
    display: inline-block;
  }

  .btn-menu {
  }
`;

export default Header;
