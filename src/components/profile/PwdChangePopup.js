import React, { useState } from "react";

import "../../resource/css/layout.css";

const PwdChangePopup = ({ pwdChange, setPwdChange }) => {
  const [pwdShow, setPwdShow] = useState(false);
  const [pwdCheckShow, setPwdCheckShow] = useState(false);

  return (
    <>
      {pwdChange && (
        <div className="layer-pop" id="layer-password-change">
          <div className="layer-cnt">
            <div className="layer-top">
              <h2 className="title">비밀번호 변경</h2>
            </div>
            <div className="layer-mid">
              <div className="form-area">
                <label for="user_phone" className="filter-title">
                  새 비밀번호
                </label>
                <div className="inp">
                  <input
                    type={!pwdShow && "password"}
                    id="user_phone"
                    placeholder="새 비밀번호"
                  />
                  <button
                    type="button"
                    className={"pos btn-pw-show " + (pwdShow && "active")}
                    onClick={() => {
                      setPwdShow(!pwdShow);
                    }}
                  >
                    <span className="txt hide">비밀번호 보기</span>
                  </button>
                </div>
                <p className="warning-txt02">
                  영문, 숫자, 특수문자 혼합 8~16자리로 입력해주세요.{" "}
                </p>

                <label for="user_auth" className="filter-title">
                  새 비밀번호 확인
                </label>
                <div className="inp">
                  <input
                    type={!pwdCheckShow && "password"}
                    id="user_auth"
                    placeholder="새 비밀번호 확인"
                  />
                  <button
                    type="button"
                    className={"pos btn-pw-show " + (pwdCheckShow && "active")}
                    onClick={() => {
                      setPwdCheckShow(!pwdCheckShow);
                    }}
                  >
                    <span className="txt hide">비밀번호 보기</span>
                  </button>
                </div>
                <p className="warning-txt02">비밀번호가 일치하지 않습니다.</p>
              </div>

              <div className="layer-btn tr">
                <button
                  type="button"
                  className="btn btn-gray layer-close"
                  onClick={() => {
                    setPwdChange(false);
                  }}
                >
                  <span>취소</span>
                </button>
                <button
                  type="button"
                  className="btn btn-bk layer-close confirm"
                  onClick={() => {
                    setPwdChange(false);
                  }}
                >
                  <span>확인</span>
                </button>
              </div>
              <button
                type="button"
                className="btn-close layer-close"
                onClick={() => {
                  setPwdChange(false);
                }}
              >
                <span className="txt">닫기</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PwdChangePopup;
