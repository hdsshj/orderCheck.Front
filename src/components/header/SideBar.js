import React from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router";

import logoMark from "../../resource/images/common/ico_logo-mark.png";
import logoName from "../../resource/images/common/ico_logo-name.png";
import openBtn from "../../resource/images/nav/ico_lnb-open.png";
import closeBtn from "../../resource/images/nav/ico_lnb-close.png";
import icoHomeHover from "../../resource/images/nav/ico_home-hover.png";
import icoFileHover from "../../resource/images/nav/ico_file-hover.png";
import icoUserHover from "../../resource/images/nav/ico_user-hover.png";
import icoFormHover from "../../resource/images/nav/ico_form-hover.png";

// import "../../resource/css/layout.css";

const SideBar = (props) => {
  const history = useHistory();
  const location = useLocation();

  const [sidebarState, setSidebarState] = React.useState(false);
  const [selectPage, setSelectPage] = React.useState(location.pathname);

  console.log(location.pathname);

  const handleSidebar = () => {
    setSidebarState(!sidebarState);
  };

  const handleSelectPage = (path) => {
    if (path === "/") {
      setSelectPage("home");
    }
  };

  const moveToPage = (path) => {
    history.push(`${path}`);
  };

  return (
    <Sidebar
      state={sidebarState}
      className={sidebarState ? "sidebar open" : "sidebar"}
    >
      <LogoDetail state={sidebarState}>
        <button type="button" className="btn-side-open" onClick={handleSidebar}>
          <img src={logoMark} alt="오더체크" />
        </button>
        <h1 className="logo_name">
          <img src={logoName} alt="오더체크" />
        </h1>
      </LogoDetail>

      <NavList state={sidebarState} className="nav-list">
        <li
          onClick={() => {
            moveToPage("/");
          }}
        >
          <i className="ico home"></i>
          <span className="links_name">홈</span>
        </li>
        <li
          className="on"
          onClick={() => {
            moveToPage("/custom_manage");
          }}
        >
          <i className="ico user"></i>
          <span className="links_name">고객 관리</span>
        </li>
        <li
          onClick={() => {
            moveToPage("/file_storage");
          }}
        >
          <i className="ico file"></i>
          <span className="links_name">파일 보관함</span>
        </li>
        <li
          onClick={() => {
            moveToPage("/consulting_form");
          }}
        >
          <i className="ico form"></i>
          <span className="links_name">상담 신청폼</span>
        </li>
      </NavList>
      <ul className="btm">
        <li>
          <a href="#">
            <i className="ico help"></i>
            <span className="links_name">자주 묻는 질문</span>
          </a>
        </li>
        <li
          onClick={() => {
            moveToPage("/setting");
          }}
        >
          <i className="ico setting"></i>
          <span className="links_name">설정</span>
        </li>
      </ul>
      <button type="button" className="btn-lnb-close" onClick={handleSidebar}>
        <span className="hide">메뉴 닫기</span>
      </button>
    </Sidebar>
  );
};

const Sidebar = styled.div`
  position: fixed;
  width: ${({ state }) => (state ? "218px" : "80px")};
  height: 100%;
  top: 0;
  left: 0;
  background: #02164f;
  padding: 6px 16px;
  box-sizing: border-box;
  z-index: 99;
  transition: all 0.4s ease;

  .btn-lnb-close {
    position: absolute;
    right: -15px;
    top: 106px;
    z-index: 1;
    width: 30px;
    height: 30px;
    background: url(${({ state }) => (state ? closeBtn : openBtn)}) no-repeat
      center;
  }

  .ico {
    /* min-width: 42px;
    width: 42px; */
    display: inline-block;
    min-width: 48px;
    width: 48px;
    height: 42px;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.5s;
  }

  li {
    display: flex;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: #02164f;

    .links_name {
      padding-left: 12px;
      color: #fff;
      font-size: 15px;
      font-weight: 400;
      white-space: nowrap;
      pointer-events: none;
      transition: 0.4s;
      opacity: ${({ state }) => (state ? 1 : 0)};
      ${({ state }) => state && "pointer-events: auto"};
    }

    .ico.home {
      &:hover {
        background-image: url(${icoHomeHover});
      }
    }
    .ico.file {
      &:hover {
        background-image: url(${icoFileHover});
      }
    }
    .ico.user {
      &:hover {
        background-image: url(${icoUserHover});
      }
    }
    .ico.form {
      &:hover {
        background-image: url(${icoFormHover});
      }
    }
  }
`;

const LogoDetail = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;

  .logo_name {
    padding-left: 50px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    opacity: ${({ state }) => (state ? 1 : 0)};

    img {
      vertical-align: middle;
    }
  }

  .btn-side-open {
    position: absolute;
    top: 5px;
    left: 0;
    width: 50px;
    height: 50px;
    font-size: 22px;
    color: #fff;
    z-index: 1;
  }

  .ico {
    opacity: 0;
    transition: all 0.5s ease;
  }
`;

const NavList = styled.ul`
  margin-top: 34px;
  height: 100%;

  .on {
    background: #1d58ff;
    color: #fff;
  }

  li {
    position: relative;
    margin: 8px 0;
    list-style: none;

    display: flex;
    width: ${({ state }) => (state ? "100%" : "42px")};
    height: 42px;
    border-radius: 8px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: #02164f;
  }
`;
export default SideBar;
