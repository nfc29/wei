(function($){
  var canvas, stage, exportRoot;
  $(function(){
    init();
  });

  function init() {
    canvas = document.getElementById("canvas");
    images = images||{};

    var manifest = [
      {src:"images/index.jpg", id:"index"}
    ];

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest);
  }

  function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
  }

  function handleComplete() {
    exportRoot = new lib.main();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);
  }

})(jQuery);
