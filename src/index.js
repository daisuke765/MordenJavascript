// TODO SyntaxError: Cannot use import statement outside a module
//  import "./styles.css";

function createIncompleteTodo(title) {
  //create div
  const todoItem = document.createElement("div");
  todoItem.className = "list-row";
  //create li
  const content = document.createElement("li");
  content.innerText = inputText;
  // create button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
}

function createcompleteTodo(title) {}

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;

  if (inputText !== "") {
    document.getElementById("add-text").value = "";
  } else {
    alert("なにか入力してください。");
    return;
  }
  createIncompleteList(inputText);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //create div
  const todoItem = document.createElement("div");
  todoItem.className = "list-row";
  //create li
  const content = document.createElement("li");
  content.innerText = text;
  // create button(Complete)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const target = completeButton.parentElement;
    document.getElementById("incomplete-list").removeChild(target);
    const text = target.firstElementChild.innerText;

    target.textContent = null; // 内容クリア

    const content = document.createElement("li");
    content.innerText = text;
    const returnButton = document.createElement("button");
    // create button(Return)
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      const target = returnButton.parentElement;
      document.getElementById("complete-list").removeChild(target);

      const text = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    target.appendChild(content);
    target.appendChild(returnButton);

    document.getElementById("complete-list").appendChild(target);
  });

  // create button(Delete)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentElement;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // append child
  todoItem.appendChild(content);
  todoItem.appendChild(completeButton);
  todoItem.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(todoItem);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
