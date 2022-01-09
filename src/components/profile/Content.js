import React, { useState, useRef } from "react";

import PwdChangePopup from "./PwdChangePopup";
import AccountDeletePopup from "./AccountDeletePopup";

import homeIconBk from "../../resource/images/nav/ico_home-bk.png";
import "../../resource/css/layout.css";
import "../../resource/css/contents.css";

const Content = (props) => {
  const [tab, setTab] = useState({ myProfile: true, cmpInfo: false });
  const [pwdChange, setPwdChange] = useState(false);
  const [accountDelete, setAccountDelete] = useState(false);
  const [toast, setToast] = useState(false);
  const toastRef = useRef();

  console.log(toastRef, toast);
  const handleToastPopup = () => {
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);
  };

  return (
    <>
      {toast && (
        <div id="toast">
          <div class="toast" ref={toastRef}>
            클립보드에 복사되었습니다.
          </div>
        </div>
      )}
      <div id="content" class="content-section type04">
        {/* <!-- #include file="include_header.html" --> */}
        {/* <!-- header --> */}
        <div>헤더</div>
        {/* <!-- location --> */}
        <ul class="location-wrap">
          <li>
            <a href="dahboard.html" target="_blank">
              <img src={homeIconBk} alt="" />
            </a>
          </li>
          <li>
            <a href="myprofile.html">프로필 설정</a>
          </li>
        </ul>
        {/* <!-- //location --> */}

        <div class="cnt-box-wrap">
          {/* <!-- cnt-inner --> */}
          <div class="cnt-inner">
            <div class="content-box profile">
              {/* <!-- tabs --> */}
              <div class="tab-wrap">
                <ul class="tabs">
                  <li class={tab.myProfile && "on"}>
                    <button
                      type="button"
                      class="tab-btn active"
                      data-tab="tab1"
                      onClick={() => {
                        setTab({ myProfile: true, cmpInfo: false });
                      }}
                    >
                      내 프로필
                    </button>
                  </li>
                  <li class={tab.cmpInfo && "on"}>
                    <button
                      type="button"
                      class="tab-btn"
                      data-tab="tab2"
                      onClick={() => {
                        setTab({ myProfile: false, cmpInfo: true });
                      }}
                    >
                      회사 정보
                    </button>
                  </li>
                </ul>
                <span class="slider" data-left="0"></span>
              </div>
              {/* <!-- //tabs --> */}
              <div class="tab-content">
                {tab.myProfile ? (
                  <div class="content active" id="tab1">
                    <h2 class="inp-title">프로필 이미지</h2>
                    <div class="profile-box">
                      <div class="profile-head">
                        <div class="profile">
                          {/* <!-- dropdown-wrap --> */}
                          <div class="dropdown-wrap hover">
                            <button type="button" class="btn-thum-edit">
                              <span>수정하기</span>
                            </button>
                            <div class="dropdown-box">
                              <ul>
                                <li>
                                  <span class="inp">
                                    <input
                                      type="file"
                                      name=""
                                      id="file1"
                                      placeholder="파일 검색"
                                    />
                                    <label for="file1" class="btn-drop-menu">
                                      <span>사진 변경</span>
                                    </label>
                                  </span>
                                </li>
                                <li>
                                  <button type="button" class="btn-drop-menu">
                                    사진 삭제
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <!-- //dropdown-wrap --> */}
                        </div>
                      </div>
                      <div class="profile-cnt">
                        <div class="filter-box">
                          <p class="filter-title">
                            개인 코드{" "}
                            <button
                              type="button"
                              class="btn-copy on pop-toast"
                              onClick={() => {
                                handleToastPopup();
                              }}
                            >
                              <span>복사하기</span>
                            </button>
                          </p>
                          <div class="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="sklksl234"
                              disabled
                            />
                          </div>
                        </div>

                        <div class="filter-box">
                          <p class="filter-title">이름</p>
                          <div class="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="고객명"
                              value="홍길동"
                              readonly
                            />
                            <button type="button" class="pos btn-edit">
                              <span class="txt hide">수정</span>
                            </button>
                          </div>
                          <p class="warning-txt02">이름을 입력해주세요.</p>
                        </div>

                        <div class="filter-box">
                          <p class="filter-title">이용중인 플랜</p>
                          <div class="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="스타터"
                              disabled
                            />
                          </div>
                        </div>

                        <div class="filter-box">
                          <p class="filter-title">휴대폰 번호</p>
                          <div class="inp">
                            <input
                              type="tel"
                              name=""
                              id=""
                              value="010.1234.5678"
                              disabled
                            />
                          </div>
                        </div>

                        <div class="filter-box">
                          <p class="filter-title">비밀번호</p>
                          <div class="inp">
                            <input
                              type="password"
                              name=""
                              id=""
                              value="123456"
                              readonly
                            />
                            <button
                              type="button"
                              class="pos btn-edit open-layer"
                              data-info="layer-password-change"
                              onClick={() => {
                                setPwdChange(true);
                              }}
                            >
                              <span class="txt hide">수정</span>
                            </button>
                          </div>
                        </div>

                        <div class="filter-box">
                          <p class="filter-title">이메일</p>
                          <div class="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="sample@naver.com"
                              readonly
                            />
                            <button type="button" class="pos btn-edit">
                              <span class="txt hide">수정</span>
                            </button>
                          </div>
                          <p class="warning-txt02">
                            정확한 이메일을 입력해주세요.
                          </p>
                          <p class="warning-txt02">이미 가입된 이메일입니다.</p>
                        </div>
                        <div class="btn-group02" style={{ marginTop: "40px" }}>
                          <button
                            type="button"
                            class="btn-link open-layer"
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
                  <div class="content active" id="tab2">
                    <h2 class="inp-title">회사 로고</h2>
                    <div class="profile-box">
                      <div class="profile-head">
                        <div class="profile"></div>
                      </div>
                      <div class="profile-cnt">
                        <div class="filter-box">
                          <p class="filter-title">회사 명</p>
                          <div class="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="오더킹"
                              readonly
                            />
                          </div>
                        </div>

                        <div class="filter-box">
                          <p class="filter-title">
                            회사 URL
                            <button
                              type="button"
                              class="btn-copy on pop-toast"
                              onClick={() => {
                                handleToastPopup();
                              }}
                            >
                              <span>복사하기</span>
                            </button>
                          </p>
                          <div class="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="www.sample1233.com"
                              readonly
                            />
                          </div>
                        </div>

                        <div class="filter-box">
                          <p class="filter-title">대표자 명</p>
                          <div class="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="홍길동"
                              readonly
                            />
                          </div>
                        </div>

                        <div class="filter-box">
                          <p class="filter-title">
                            회사 주소
                            <button
                              type="button"
                              class="btn-copy on pop-toast"
                              onClick={() => {
                                handleToastPopup();
                              }}
                            >
                              <span>복사하기</span>
                            </button>
                          </p>
                          <span class="inp">
                            <input
                              type="text"
                              name=""
                              value="서울시 강남구 도산대로1234-56"
                              readonly
                            />
                          </span>
                          <div class="inp">
                            <input
                              type="text"
                              name=""
                              placeholder="123호"
                              readonly
                            />
                          </div>
                        </div>

                        <div class="filter-box">
                          <p class="filter-title">
                            사업자 번호
                            <button
                              type="button"
                              class="btn-copy on pop-toast"
                              onClick={() => {
                                handleToastPopup();
                              }}
                            >
                              <span>복사하기</span>
                            </button>
                          </p>
                          <div class="inp">
                            <input
                              type="tel"
                              name=""
                              id=""
                              value="123-1566789-09876"
                              readonly
                            />
                          </div>
                        </div>

                        <div class="filter-box">
                          <p class="filter-title">
                            사업자등록증
                            <button type="button" class="btn-down on">
                              <span>다운로드</span>
                            </button>
                          </p>
                          <div class="inp">
                            <input
                              type="text"
                              name=""
                              id=""
                              value="sample.jpg"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="btn-group02 flex-sidebox center">
                          <button
                            type="button"
                            class="btn-link open-layer"
                            data-info="layer-company-out-confirm"
                          >
                            <span>회사 나가기</span>
                          </button>
                          <button
                            type="button"
                            class="btn btn-light-blue btn-inp-revise"
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
      {/* 비밀번호 변경 팝업 */}
      <PwdChangePopup pwdChange={pwdChange} setPwdChange={setPwdChange} />
      {/* 계정 삭제 */}
      <AccountDeletePopup
        accountDelete={accountDelete}
        setAccountDelete={setAccountDelete}
      />
    </>
  );
};

export default Content;
