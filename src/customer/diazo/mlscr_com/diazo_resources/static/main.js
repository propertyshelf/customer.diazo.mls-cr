function Descript_and_title(){
    $(".header_title, .header_descript, .site-social").insertAfter(".logo-wrapper .logo");
}

function div_full_width(){
    if($('.full_mls_search').length>0){   
        $('#wrapper-inner').after('<div class="ps_full_width">&nbsp;</div>');
        $('.full_mls_search').prependTo('.ps_full_width');
    }
}
function embed_im_map(){
    embedmap = $(".embed_im").children("div.full_map");
    
    if($('.full_mls_search').length>0){   
        $(embedmap).prependTo(".ps_full_width .full_mls_search");
    }
}

function Add_class_breadcrumbs(){
    console.log("XX");
	$("#wrapper-inner #portal-breadcrumbs").addClass("container");
}

$(document).ready(function(){
    if($('body.template-view').length>0){   
        div_full_width();
        embed_im_map();
    }

    Add_class_breadcrumbs();
})