///////////////////////////////////////////////
/**
// Author: Jason Worrell
// Creation Date: 2015-01-27
// Revised: 
// Note: Short app to slide the front page
// to reveal a dashboard or menu.
*/
////////////////////////////////////////////////

//=========Data================
var openSize = "80rem";
var menuOpen = true;
var menu = O("menu");
var contentDiv = O("content");




//======Event Handlers=========
window.onload = init;
//----------------------------
window.onresize = resize;
//----------------------------
menu.onclick = toggleMenu;
//----------------------------



//========Functions============
function resize(){
    S(document.documentElement).fontSize = innerWidth/100 + "px";
}
//-------------------------
function init(){
	resize();
	toggleMenu();
}
//-------------------------
function toggleMenu(){
	if(menuOpen){
		closeMenu();
	}
	else{
		openMenu();
	}
	/////helper functions////
	function closeMenu(){
		S("front").width = "100rem";
		menuOpen = false;
	}
	function openMenu(){
		S("front").width = openSize;
		menuOpen = true;
	}
}
//---------------------------


