
jQuery(document).ready(function() {
   console.log("Document Loaded");

    $('#prodLink').on('click', function(e){
        $(this).removeClass('isactive').addClass('isactive');
        $('#rallyLink').removeClass('isactive');
    });

    $('#rallyLink').on('click', function(e){
        $(this).removeClass('isactive').addClass('isactive');
        $('#prodLink').removeClass('isactive');
    });

    //Hover Effect to Parent in Top Menu
    $('.dropdown-menu li, .togglelink-statistic').hover( function(e){
        $(this).parent().prev().addClass('hovering');
    }, function(){
        $(this).parent().prev().removeClass('hovering');
    });


    $('.menu-toggle').on('click', function() {
        $('#sidebar').toggleClass('collapsed');
        $("#wrapper").toggleClass("active");
    });

	//Hide Toggled Nav in mobile
   	$('.mobile-back-arrow').on('click', function(){
       	$("#sidebar").animate({ "left": "-320px" });
       	$("#overlay").hide();
	});

	//Hamburger Menu action for mobile

	 $('#icon-bar-responsive').on('click', function(){
        $("#icon-bar-responsive, nav.header-responsive").addClass('responsive-toggle');
        $("#sidebar").animate({ "left": "0", "width":"320" }).css("display","block");
        $("#overlay").show();
    });
	setTimeout( function () {
		$('.mobile-back-arrow').trigger('click');
	}, 1);
	
	//Toggle Gift Details in Gift order summary
	$('.show-gift-details').on('click', function(e){
		$(this).toggleClass('open');
		var toToggle = $(this).closest('tr').next();
			$(toToggle).show('300');
			$(this).find('span.acs').show('300');
			$(this).find('span.dsc').hide('300');
	});
	
	$('th.close-gift-o-details').on('click', function(e){
		$(this).closest('table').parent().hide('300');
		$(this).find('span.acs').show('300');
		$(this).find('span.dsc').hide('300');
	});

});
