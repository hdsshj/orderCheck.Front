import React, { useState, useRef } from "react";

import PwdChangePopup from "./PwdChangePopup";
import AccountDeletePopup from "./AccountDeletePopup";
import CompanyExitPopup from "./CompanyExitPopup";

import homeIconBk from "../../resource/images/nav/ico_home-bk.png";
import "../../resource/css/layout.css";
import "../../resource/css/contents.css";

const Content = (props) => {
  const [tab, setTab] = useState({ myProfile: true, cmpInfo: false });
  const [nameInput, setNameInput] = useState("홍길동");
  const [emailInput, setEmailInput] = useState("sample@naver.com");
  const [profileEdit, setProfileEdit] = useState(false);
  const [nameEditBtn, setNameEditBtn] = useState(false);
  const [pwdEditBtn, setPwdEditBtn] = useState(false);
  const [emailEditBtn, setEmailEditBtn] = useState(false);
  const [pwdChange, setPwdChange] = useState(false);
  const [accountDelete, setAccountDelete] = useState(false);
  const [cmpExit, setCmpExit] = useState(false);
  const [toast, setToast] = useState(false);
  const toastRef = useRef(null);

  const handleToastPopup = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
      toastRef.current.classList.remove("active");
    }, 2000);
  };

  const handleProfileEdit = () => {
    setProfileEdit(!profileEdit);
  };

  return (
    <>
      {toast && (
        <div id="toast">
          <div className={"toast " + (toast ? "active" : "")} ref={toastRef}>
            클립보드에 복사되었습니다.
          </div>
        </div>
      )}
      <div id="content" className="content-section type04">
        {/* <!-- header --> */}
        <ul className="location-wrap">
          <li>
            <a href="dahboard.html" target="_blank">
              <img src={homeIconBk} alt="" />
            </a>
          </li>
          <li>
            <a href="myprofile.html">프로필 설정</a>
          </li>
        </ul>

        <div className="cnt-box-wrap">
          {/* <!-- cnt-inner --> */}
          <div className="cnt-inner">
            <div className="content-box profile">
              {/* <!-- tabs --> */}
              <div className="tab-wrap">
                <ul className="tabs">
                  <li className={tab.myProfile && "on"}>
                    <button
                      type="button"
                      className="tab-btn active"
                      data-tab="tab1"
                      onClick={() => {
                        setTab({ myProfile: true, cmpInfo: false });
                      }}
                    >
                      내 프로필
                    </button>
                  </li>
                  <li className={tab.cmpInfo && "on"}>
                    <button
                      type="button"
                      className="tab-btn"
                      data-tab="tab2"
                      onClick={() => {
                        setTab({ myProfile: false, cmpInfo: true });
                      }}
                    >
                      회사 정보
                    </button>
                  </li>
                </ul>
                <span className="slider" data-left="0"></span>
              </div>
              {/* <!-- //tabs --> */}
              <div className="tab-content">
                {tab.myProfile ? (
                  <div className="content active" id="tab1">
                    <h2 className="inp-title">프로필 이미지</h2>
                    <div className="profile-box">
                      <div className="profile-head">
                        <div className="profile">
                          {/* <!-- dropdown-wrap --> */}
                          <div className="dropdown-wrap hover">
                            <button
                              type="button"
                              className="btn-thum-edit"
                              onClick={() => {
                                handleProfileEdit();
                              }}
                            >
                              <span>수정하기</span>
                            </button>
                            {profileEdit && (
                              <div className="dropdown-box on">
                                <ul>
                                  <li>
                                    <span className="inp">
                                      <input
                                        type="file"
                                        name=""
                                        id="file1"
                                        placeholder="파일 검색"
                                      />
                                      <label
                                        for="file1"
                                        className="btn-drop-menu"
                                      >
                                        <span>사진 변경</span>
                                      </label>
                                    </span>
                                  </li>
                                  <li>
                                    <button
                                      type="button"
                                      className="btn-drop-menu"
                                    >
                                      사진 삭제
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                          {/* <!-- //dropdown-wrap --> */}
                        </div>
                      </div>
                      <div className="profile-cnt">
                        <div className="filter-box">
                          <p className="filter-title">
                            개인 코드{" "}
                            <button
                              type="button"
                              className="btn-copy on pop-toast"
                              onClick={() => {
                                handleToastPopup();
                              }}
                            >
                              <span>복사하기</span>
                            </button>
                          </p>
                          <div className="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="sklksl234"
                              disabled
                            />
                          </div>
                        </div>

                        <div className="filter-box">
                          <p className="filter-title">이름</p>
                          <div
                            className={
                              "inp " + (nameEditBtn ? "edit active" : "")
                            }
                          >
                            <input
                              type="text"
                              placeholder="고객명"
                              value={nameInput}
                              onChange={(e) => {
                                setNameInput(e.target.value);
                              }}
                              disabled={!nameEditBtn ? true : false}
                              style={{ background: "#fff" }}
                            />
                            <button
                              type="button"
                              className={
                                "pos " + "btn-edit " + (nameEditBtn && "active")
                              }
                              onClick={() => {
                                setNameEditBtn(!nameEditBtn);
                              }}
                            >
                              <span className="txt hide">수정</span>
                            </button>
                          </div>
                          <p className="warning-txt02">이름을 입력해주세요.</p>
                        </div>

                        <div className="filter-box">
                          <p className="filter-title">이용중인 플랜</p>
                          <div className="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="스타터"
                              disabled
                            />
                          </div>
                        </div>

                        <div className="filter-box">
                          <p className="filter-title">휴대폰 번호</p>
                          <div className="inp">
                            <input
                              type="tel"
                              name=""
                              id=""
                              value="010.1234.5678"
                              disabled
                            />
                          </div>
                        </div>

                        <div className="filter-box">
                          <p className="filter-title">비밀번호</p>
                          <div
                            className={
                              "inp " + (pwdEditBtn ? "edit active" : "")
                            }
                          >
                            <input
                              type="password"
                              name=""
                              id=""
                              value="123456"
                              readonly
                            />
                            <button
                              type="button"
                              className="pos btn-edit open-layer"
                              data-info="layer-password-change"
                              onClick={() => {
                                setPwdChange(true);
                                setPwdEditBtn(!pwdEditBtn);
                              }}
                            >
                              <span className="txt hide">수정</span>
                            </button>
                          </div>
                        </div>

                        <div className="filter-box">
                          <p className="filter-title">이메일</p>
                          <div
                            className={
                              "inp " + (emailEditBtn ? "edit active" : "")
                            }
                          >
                            <input
                              type="text"
                              style={{ background: "#fff" }}
                              value={emailInput}
                              disabled={!emailEditBtn ? true : false}
                              onChange={(e) => {
                                setEmailInput(e.target.value);
                              }}
                            />
                            <button
                              type="button"
                              className={
                                "pos " +
                                "btn-edit " +
                                (emailEditBtn && "active")
                              }
                              onClick={() => {
                                setEmailEditBtn(!emailEditBtn);
                              }}
                            >
                              <span className="txt hide">수정</span>
                            </button>
                          </div>
                          <p className="warning-txt02">
                            정확한 이메일을 입력해주세요.
                          </p>
                          <p className="warning-txt02">
                            이미 가입된 이메일입니다.
                          </p>
                        </div>
                        <div
                          className="btn-group02"
                          style={{ marginTop: "40px" }}
                        >
                          <button
                            type="button"
                            className="btn-link open-layer"
                            data-info="layer-account-delete"
                            onClick={() => {
                              setAccountDelete(true);
                            }}
                          >
                            <span>계정 삭제</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="content active" id="tab2">
                    <h2 className="inp-title">회사 로고</h2>
                    <div className="profile-box">
                      <div className="profile-head">
                        <div className="profile"></div>
                      </div>
                      <div className="profile-cnt">
                        <div className="filter-box">
                          <p className="filter-title">회사 명</p>
                          <div className="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="오더킹"
                              readonly
                            />
                          </div>
                        </div>

                        <div className="filter-box">
                          <p className="filter-title">
                            회사 URL
                            <button
                              type="button"
                              className="btn-copy on pop-toast"
                              onClick={() => {
                                handleToastPopup();
                              }}
                            >
                              <span>복사하기</span>
                            </button>
                          </p>
                          <div className="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="www.sample1233.com"
                              readonly
                            />
                          </div>
                        </div>

                        <div className="filter-box">
                          <p className="filter-title">대표자 명</p>
                          <div className="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="홍길동"
                              readonly
                            />
                          </div>
                        </div>

                        <div className="filter-box">
                          <p className="filter-title">
                            회사 주소
                            <button
                              type="button"
                              className="btn-copy on pop-toast"
                              onClick={() => {
                                handleToastPopup();
                              }}
                            >
                              <span>복사하기</span>
                            </button>
                          </p>
                          <span className="inp">
                            <input
                              type="text"
                              name=""
                              value="서울시 강남구 도산대로1234-56"
                              readonly
                            />
                          </span>
                          <div className="inp">
                            <input
                              type="text"
                              name=""
                              placeholder="123호"
                              readonly
                            />
                          </div>
                        </div>

                        <div className="filter-box">
                          <p className="filter-title">
                            사업자 번호
                            <button
                              type="button"
                              className="btn-copy on pop-toast"
                              onClick={() => {
                                handleToastPopup();
                              }}
                            >
                              <span>복사하기</span>
                            </button>
                          </p>
                          <div className="inp">
                            <input
                              type="tel"
                              name=""
                              id=""
                              value="123-1566789-09876"
                              readonly
                            />
                          </div>
                        </div>

                        <div className="filter-box">
                          <p className="filter-title">
                            사업자등록증
                            <button type="button" className="btn-down on">
                              <span>다운로드</span>
                            </button>
                          </p>
                          <div className="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="sample.jpg"
                              readonly
                            />
                          </div>
                        </div>
                        <div className="btn-group02 flex-sidebox center">
                          <button
                            type="button"
                            className="btn-link open-layer"
                            data-info="layer-company-out-confirm"
                            onClick={() => {
                              setCmpExit(true);
                            }}
                          >
                            <span>회사 나가기</span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-light-blue btn-inp-revise"
                          >
                            <span>회사 정보 수정</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <!-- //cnt-inner --> */}
        </div>
      </div>
      {/* 비밀번호 변경 */}
      <PwdChangePopup pwdChange={pwdChange} setPwdChange={setPwdChange} />
      {/* 계정 삭제 */}
      <AccountDeletePopup
        accountDelete={accountDelete}
        setAccountDelete={setAccountDelete}
      />
      {/* 회사 나가기 */}
      <CompanyExitPopup cmpExit={cmpExit} setCmpExit={setCmpExit} />
    </>
  );
};

export default Content;
