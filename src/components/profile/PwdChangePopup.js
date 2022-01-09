import React from "react";

import "../../resource/css/layout.css";

const PwdChangePopup = ({ pwdChange, setPwdChange }) => {
  return (
    <>
      {pwdChange && (
        <div class="layer-pop" id="layer-password-change">
          <div class="layer-cnt">
            <div class="layer-top">
              <h2 class="title">비밀번호 변경</h2>
            </div>
            <div class="layer-mid">
              <div class="form-area">
                <label for="user_phone" class="filter-title">
                  새 비밀번호
                </label>
                <div class="inp">
                  <input
                    type="password"
                    id="user_phone"
                    placeholder="새 비밀번호"
                  />
                  <button type="button" class="pos btn-pw-show">
                    <span class="txt hide">비밀번호 보기</span>
                  </button>
                </div>
                <p class="warning-txt02">
                  영문, 숫자, 특수문자 혼합 8~16자리로 입력해주세요.{" "}
                </p>

                <label for="user_auth" class="filter-title">
                  새 비밀번호 확인
                </label>
                <div class="inp">
                  <input
                    type="password"
                    id="user_auth"
                    placeholder="새 비밀번호 확인"
                  />
                  <button type="button" class="pos btn-pw-show">
                    <span class="txt hide">비밀번호 보기</span>
                  </button>
                </div>
                <p class="warning-txt02">비밀번호가 일치하지 않습니다.</p>
              </div>

              <div class="layer-btn tr">
                <button
                  type="button"
                  class="btn btn-gray layer-close"
                  onClick={() => {
                    setPwdChange(false);
                  }}
                >
                  <span>취소</span>
                </button>
                <button type="button" class="btn btn-bk layer-close confirm">
                  <span>확인</span>
                </button>
              </div>
              <button
                type="button"
                class="btn-close layer-close"
                onClick={() => {
                  setPwdChange(false);
                }}
              >
                <span class="txt">닫기</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PwdChangePopup;
