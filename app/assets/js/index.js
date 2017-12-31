class MobileMenue{
	constructor(){
this.menuIcon = $(".navBar");
this.events();
this.menuContent =$(".nav-list"); 
	}
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this)); 
	
	}
	toggleTheMenu(){

		this.menuContent.toggleClass("nav-list-is-visable");
	}
}
var mobileMenue = new MobileMenue(); 