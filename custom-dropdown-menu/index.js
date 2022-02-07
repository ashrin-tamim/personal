// $('.dropdown-menu').on( 'click', 'a', function() {
//     $(".changing_scrollbar_position").toggleClass("show_hide");
//     var text = $(this).attr("data-value");
//     var htmlText = text;
//     $(this).closest('.dropdown').find('.dropdown-toggle').html(htmlText);
   
// });

// $(".btn.btn-default.dropdown-toggle").click(function() {
//     $(".changing_scrollbar_position").toggleClass("show_hide");
// });

// $(document).click(function() {
//     if(document.querySelector(".changing_scrollbar_position").classList.contains("show_hide")) {
//         $(".changing_scrollbar_position").toggleClass("show_hide");
//     }
// });

$(document).ready(function(){

    $('.dropdown-menu').on( 'click', 'a', function() {
        var text = $(this).html();
        var htmlText = text + ' <span class="caret"></span>';
        $(this).closest('.dropdown').find('.dropdown-toggle').html(htmlText);
    });
    
    $(".btn.btn-default.dropdown-toggle").click(function() {
        $(".changing_scrollbar_position").toggleClass("show_hide");
        $(".changing_scrollbar_position > ul").toggleClass("show_hide");

    });
    $(document).click(function() {
        if(document.querySelector(".changing_scrollbar_position").classList.contains("show_hide")) {
            $(".changing_scrollbar_position").toggleClass("show_hide");
            $(".changing_scrollbar_position > ul").toggleClass("show_hide");
        }
    });
  
});

