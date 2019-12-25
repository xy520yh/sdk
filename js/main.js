// JavaScript Document
function text_tab(list,listEles,num,contlist,contlistEles){
	list=document.getElementById(list).getElementsByTagName(listEles);
	contlist = document.getElementById(contlist).getElementsByTagName(contlistEles);
	for(var i=0;i<list.length;i++){
        var lastIndex = list[i].src.lastIndexOf("_");
        var lastIndex2 = list[i].src.lastIndexOf(".");
        if(i==num){
            list[i].src = list[i].src.substring(0, lastIndex2 - 1) + "1" + list[i].src.substring(lastIndex2, list[i].src.length);
            contlist[i].className = 'show';
        }else{
            list[i].src = list[i].src.substring(0, lastIndex2 - 1) + "0" + list[i].src.substring(lastIndex2, list[i].src.length);
            contlist[i].className = 'hide';
        }
	}
}
function onImgOver(obj) {
	var s = obj.src;
	//obj.style.cursor = "pointer";
	var lastIndex = s.lastIndexOf("_");
	var lastIndex2 = s.lastIndexOf(".");
	var newSrc = s.substring(0, lastIndex2 - 1) + "1" + s.substring(lastIndex2, s.length);
	obj.src = newSrc;
}
function onImgOut(obj) {
	var s = obj.src;
	var lastIndex = s.lastIndexOf("_");
	var lastIndex2 = s.lastIndexOf(".");
	var newSrc = s.substring(0, lastIndex2 - 1) + "0" + s.substring(lastIndex2, s.length);
	obj.src = newSrc;
}
