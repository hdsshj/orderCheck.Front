import React from "react";

import "../../resource/css/layout.css";
import "../../resource/css/contents.css";
import "../../resource/css/vendor/daterangepicker.css";

import profile from "../../resource/images/profile.jpg";

const Header = (props) => {
  return (
    <div id="header" className="header">
      <h2 className="title">프로필 설정</h2>
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
        <li>
          <button type="button" className="btn-menu" data-info="alarm">
            <i className="ico alarm"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
