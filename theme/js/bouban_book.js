// 为HTML里的豆瓣图书超链接注册事件处理函数
function registerDoubanBookEventHanler(){
	var a = $('a.douban_book');
	for(var i=0, length=a.length;i<length;i++){
		a[i].onmouseover = function(){
			requestBookInfo(this);
			return false;
		};
		a[i].onmouseout = function(){
			setTimeout("$('#div_douban_wrapper').fadeOut(600);",1200);
			return false;
		};
	}
}
// 请求豆瓣图书数据
// element为事件的target元素
function requestBookInfo(element){
	var bookID = element.name;
	var url = 'https://api.douban.com/v2/book/'+bookID+'?apikey=yourAPIKey&callback=showBookInfo';
	var script =  document.createElement("script");
	script.src = url;
	script.setAttribute("class","script_for_ajax");  // 设置class属性是为了在完成Ajax请求后将其删除
	document.body.appendChild(script);
}