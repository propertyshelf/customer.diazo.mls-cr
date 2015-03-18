function Descript_and_title(){
	$(".header_title, .header_descript, .site-social").insertAfter(".logo-wrapper .logo");
}

function Add_class_breadcrumbs(){
	$("#wrapper-inner #portal-breadcrumbs").addClass("container");
}

function doormatColumn_double(){
	$(".doormatColumn .doormatSection .doormatSectionBody .doormatColumn").removeClass();
}

$(document).ready(function(){
    if($('.header_title').length>0){
        
    }

    if($('.doormatColumn .doormatSection .doormatSectionBody .doormatColumn').length>0){
        doormatColumn_double();
    }
    Add_class_breadcrumbs();
})