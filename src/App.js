import React from "react";
import "./styles.css";

export const App() = () => {
  return (
    <>
    <div>
    <input id="add-text" placeholder="TODOを入力" />
    <button id="add-button">追加</button>
  </div>
  <div class="incomplete-area">
    <p class="title">未完了のTODO</p>
    <ul>
      <div class="list-row">
        <li>TODOです</li>
        <button>完了</button>
        <button>削除</button>
      </div>
      <div class="list-row">
        <li>TODOです</li>
        <button>完了</button>
        <button>削除</button>
      </div>
      </div>
      </>
    );
};
