function Descript_and_title(){
	$(".header_title, .header_descript, .site-social").insertAfter(".logo-wrapper .logo");
}

function Add_class_breadcrumbs(){
	$("#wrapper-inner #portal-breadcrumbs").addClass("container");
}

$(document).ready(function(){
    if($('.header_title').length>0){
        
    }
    Add_class_breadcrumbs();
})