chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
     var taburl = tab.url;
    var tabtitle = tab.title;
    var id = tab.id;
    myFunction(taburl,tabtitle,id);
    });
  });
});
function myFunction(taburl,tabtitle,id){
    var res = taburl.split("/",3);
    var finalres = res[res.length-1];
    if(finalres == "opengrok.lge.com:8080"){
        var title = tabtitle.split("/");
        var restitle = title[(title.length-1)];
       document.title = restitle;
        console.log("---------------------------------------------------------");
        console.log("Developed by CHAKRADHAR REDDY <www.chakrireddy.com>");
        console.log("---------------------------------------------------------");
        }
};
