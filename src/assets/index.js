// ****************************
// SCSS
// ****************************
import "./index.scss";

// ****************************
// svg icon
// ****************************

function requireSvgAll(r) {
  r.keys().forEach(r);
}

requireSvgAll(require.context("./style-core/images/icon/", true, /\.svg$/));
requireSvgAll(require.context("./style-product/images/icon/", true, /\.svg$/));

// ****************************
// png img
// ****************************

function requirePngAll(r) {
  r.keys().forEach(r);
}

requirePngAll(require.context("./style-core/images/", true, /\.png$/));
requirePngAll(require.context("./style-product/images/", true, /\.png$/));

// ****************************
// UI Event
// ****************************

// toggle variation
const beforeSelectElement = document.querySelectorAll(
  ".toggle-switch__switch, .toggle-button__item, .pagination__link"
);
const afterSelectSuffix = "--selected";
const beforeOpenElement = document.querySelectorAll(
  ".accordion__head, .select"
);
const afterOpenSuffix = "--open";

// 토글 버튼 클릭시 --selected 추가
const toggleSelect = () => {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  beforeSelectElement.forEach(i => {
    i.addEventListener("click", event => {
      event.preventDefault();
      let afterSelectButton = i.classList[0].concat(afterSelectSuffix);

      // Test
      console.log(`Click Element => ${i.classList[0]}`);
      console.log(`Element + "--selected" => ${afterSelectButton}`);

      i.classList.toggle(afterSelectButton);
    });
  });
};

// 열리기 class 추가
const toggleOpen = () => {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  beforeOpenElement.forEach(i => {
    i.addEventListener("click", event => {
      event.preventDefault();
      let afterOpenButton = i.classList[0].concat(afterOpenSuffix);

      // Test
      console.log(`Click Element => ${i.classList[0]}`);
      console.log(`Element + "--open" => ${afterOpenButton}`);

      i.classList.toggle(afterOpenButton);
    });
  });
};

const init = () => {
  toggleSelect();
  toggleOpen();
};

init();
