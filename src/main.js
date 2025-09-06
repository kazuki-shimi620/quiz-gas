// Webページ本体を返す関数
function doGet() {
  // frontend/index.htmlをテンプレートとして評価して返す
  return HtmlService.createTemplateFromFile('frontend/index').evaluate();
}

// 外部ファイルをHTMLに埋め込むための関数
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}