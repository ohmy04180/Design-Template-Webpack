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
