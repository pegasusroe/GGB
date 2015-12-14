// GeoGebraCore.widget loaded ?
var coreLoaded = false;

// 在 DOM 完成解析後，就執行 loadCore()，不等待圖片下載或 CSS
document.addEventListener("DOMContentLoaded",function(event){loadCore()});

// 執行主要的 JavaScript
function loadCore(){

  // 載入 ../GeoGebraCore.wdgt/scripts/deployggb.js 後，載入 ggbApplet
  loadScript("../GeoGebraCore.wdgt/", "scripts/deployggb.js", loadApplet);

  // GeoGebraCore-1.wdgt, -2.wdgt, ... -9.wdgt ? (what for?)
  for(var index = 1; index < 10; index++){
    loadScript("../GeoGebraCore-" + index + ".wdgt/", "scripts/deployggb.js", loadApplet)
  }

}

// 載入 JavaScript
function loadScript(basedir, path, callback){

  // 建立新的 <script> 元素
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = basedir + path;

  // javascript 載入完成後，執行 callback
  script.onload = function(){ callback(basedir) };

  // 放入 <head> 裡面
  document.getElementsByTagName("head")[0].appendChild(script)
}

// 載入 CSS：
function loadStyle(basedir, path){

  // 建立新的 <link> 元素
  var style = document.createElement("link");
  style.type = "text/css";
  style.rel = "stylesheet";
  style.media = "screen";
  style.href = basedir + path;

  // 放入 <head> 裡面
  document.getElementsByTagName("head")[0].appendChild(style)
}

// 載入 ggbApplet
function loadApplet(basedir){
  if(!coreLoaded){        // 如果為第一次啟動則：
    coreLoaded = true;    // 設定為 GeoGebraCore 已啟動
    start(basedir)        // 新增 GGBApplet 並完成設定
  }
}
