import React from "react";

const CompanyExitPopup = ({ cmpExit, setCmpExit }) => {
  return (
    <>
      {cmpExit && (
        <div class="layer-pop" id="layer-company-out-confirm">
          <div class="layer-cnt">
            <div class="layer-top">
              <h2 class="title">회사 나가기</h2>
            </div>
            <div class="layer-mid">
              <p class="info-txt02">
                비밀번호 입력 완료 후 버튼을 클릭하면 회사 나가기가 완료됩니다.
              </p>
              <div class="form-area">
                <label for="user_auth" class="filter-title">
                  비밀번호
                </label>
                <div class="inp">
                  <input
                    type="password"
                    id="user_auth"
                    placeholder="비밀번호를 입력해주세요."
                  />
                  <button type="button" class="pos btn-pw-show">
                    <span class="txt hide">비밀번호 보기</span>
                  </button>
                </div>
                <p class="warning-txt02">비밀번호가 일치하지 않습니다.</p>
              </div>

              <div class="layer-btn tr">
                <button type="button" class="btn btn-gray layer-close">
                  <span>취소</span>
                </button>
                <button type="button" class="btn btn-bk layer-close btn-ok">
                  <span>회사 나가기</span>
                </button>
              </div>
            </div>
            <button
              type="button"
              class="btn-close layer-close"
              onClick={() => {
                setCmpExit(false);
              }}
            >
              <span class="txt">팝업 닫기</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyExitPopup;
