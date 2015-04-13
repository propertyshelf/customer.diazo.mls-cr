function collection_data(){
    $( ".tile-default .collection-item p.description" ).prev('p').addClass("p_date");
}
/*Clear bg from application.js*/
function hoverme(state){
  var img_url ='++theme++customer.diazo.mlscr_com/images/map' + state +'.png';
  $('#map-image').attr('src', img_url);
}

function clearbg(){
  $('#map-image').attr('src', '++theme++customer.diazo.mlscr_com/images/map.png');
}

function fillselect(state){
  //unset all selected options
  $("#form-widgets-location_state").find('option').selected(false);
  //find the one to select
  $("#form-widgets-location_state option").each(function()
  {
    if($(this).val() == state){
      $(this).attr("selected","selected");
    }
    if(state == 'SanJose' && escape($(this).val())=='San%20Jos%5Cxe9') $(this).attr("selected","selected");
    if(state == 'Limon' && escape($(this).val())=='Lim%5Cxf3n') $(this).attr("selected","selected");
  });

return false;
}
/*Clear bg from application.js*/

function Descript_and_title(){
    $(".header_title, .header_descript, .site-social").insertAfter(".logo-wrapper .logo");
}

function div_full_width(){
    if($('.full_mls_search').length>0){   
        $('#wrapper-inner').after('<div class="ps_full_width">&nbsp;</div>');
        $('.full_mls_search').prependTo('.ps_full_width');
        $(".full_map").insertBefore(".full_mls_search .listing-search-tile #form");
    }
}

function header_of_quicksearch(){
    if($('.header_full_quicksearch').length>0){   
        $('.header_full_quicksearch').insertBefore('.ps_full_width #form');
    }
}

function Add_class_breadcrumbs(){
    $("#wrapper-inner #portal-breadcrumbs").addClass("container");
}

function Add_member_login(){
    $('.member-login').insertAfter('#portal-breadcrumbs span#breadcrumbs-home');
}

$(document).ready(function(){
    if($('#portal-breadcrumbs span#breadcrumbs-home').length>0){   
        Add_member_login();
    }
    Add_member_login();
    if($('.tile-default .collection-item p.description').length>0){   
        collection_data();
    }
    if($('body.template-view').length>0){   
        div_full_width();
        header_of_quicksearch();
    }
    Add_class_breadcrumbs();
    
/*application.js*/    
/* add class-name to every last li of a list */
  $("ul li:last-child").addClass("last-item");
  $("#tab-menu li:first-child").addClass("active");

  var defaultText_Min = 'MIN';
  var defaultText_Max = 'MAX';
  var defaultValue_Location ='--NOVALUE--';

  /* Preparation not make the side no-skript safe */
  /* turn off onbeforeunload dialog for pages with #home-search-map  */
  if($('#home-search-map').length !==0){
    window.onbeforeunload = null;
    
  /*Unselect ALL checkboxes in homesearchmap*/
  $('#home-search-map input[type=checkbox]').attr('checked', false);

  if($('#form-widgets-location_state option:selected').val()==defaultValue_Location){
    $('#form-widgets-location_state option:selected').text(' ');
  }

  $('#form').removeClass('rowlike enableUnloadProtection');
  $('#form').submit(function() {
    
    if($("#form-widgets-price_min").val() == defaultText_Min){
        $("#form-widgets-price_min").text("");
        $("#form-widgets-price_min").val("");
    }
    if($("#form-widgets-price_max").val() == defaultText_Max){
        $("#form-widgets-price_max").val("");
        $("#form-widgets-price_max").text("");
    }

    });
  }  
})