import React from "react";
import "../../resource/css/layout.css";
import "../../resource/css/vendor/nice-select.css";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
const AccountDeletePopup = ({ accountDelete, setAccountDelete }) => {
  return (
    <>
      {accountDelete && (
        <div class="layer-pop" id="layer-account-delete">
          <div class="layer-cnt">
            <div class="layer-top">
              <h2 class="title">계정 삭제</h2>
            </div>
            <div class="layer-mid">
              <p class="info-txt02">
                탈퇴 사유 선택과 비밀번호 입력 완료 후 버튼을 클릭하면 계정
                삭제가 완료됩니다.
              </p>
              <div class="form-area">
                <label for="user_phone" class="filter-title">
                  탈퇴 사유
                </label>
                <FormControl sx={{ width: "100%" }}>
                  <Select>
                    <MenuItem value={10}>1</MenuItem>
                  </Select>
                </FormControl>

                {/* <div class="inp-select type03">
                  <select name="areaType" style={{ width: "100%" }}>
                    <option value="000" disabled selected>
                      탈퇴 사유를 선택해주세요
                    </option>
                    <option value="001">1</option>
                  </select>
                </div> */}
                <p class="warning-txt02">탈퇴 사유를 선택해주세요.</p>
                <label for="user_auth" class="filter-title">
                  비밀번호
                </label>
                <div class="inp">
                  <input
                    type="password"
                    id="user_auth"
                    placeholder="비밀번호"
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
                    setAccountDelete(false);
                  }}
                >
                  <span>취소</span>
                </button>
                <button type="button" class="btn btn-bk layer-close btn-ok">
                  <span>삭제</span>
                </button>
              </div>
            </div>
            <button
              type="button"
              class="btn-close layer-close"
              onClick={() => {
                setAccountDelete(false);
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

export default AccountDeletePopup;
