// document.getElementsByTagName("li")[0].addEventListener("click",function(){
// 	if(!this.parentNode.getAttribute("class")){
// 		this.parentNode.setAttribute("class","slideDown");
// 	}
// 	else{
// 		this.parentNode.removeAttribute("class");
// 	}
// });

$(function(){
  $('#responsive-nav').click(function(){
    $(this).parent().toggleClass('slideDown');
  })
});