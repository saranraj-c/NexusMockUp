
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
//	setTimeout( function () {
//		$('.mobile-back-arrow').trigger('click');
//	}, 1);
	


	//Toggle Gift Details in Gift order summary
	$('.show-gift-details').on('click', function(e){
			if($(this).hasClass('open')){
				$(this).closest('tr').next().hide();
				$(this).removeClass('open');
				$(this).find('span.acs').hide();
				$(this).find('span.dsc').show();
			} else {
				var toToggle = $(this).closest('tr').next();
				$(toToggle).show('300');
				$(this).addClass('open');
				$(this).find('span.acs').show();
				$(this).find('span.dsc').hide();
			}
	});


	$('th.close-gift-o-details').on('click', function(e){
		var parentTable = $(this).closest('table').parent().parent().hide('300');
		$(parentTable).prev().find('span.acs').hide();
		$(parentTable).prev().find('span.dsc').show();
	});
	//Gift order toggleing in mobile	
	$('.sub-title.visible-xs').on('click', function(e){
		var self = this;
		var CurrentlyClicked = $(this).data('source-event').toLowerCase(); 
		var summaryList = this.dataset.summaryToshow; //$(this).data('summary-toShow');		
		var giftList = this.dataset.sourceEvent;		
		if(CurrentlyClicked == 'gift'){
			$("#gitf_items").show('300');
			$("#gitf_ord_summary").hide('300');	
			$('.sub-title').removeClass('active');
			$("#history-title .sub-title.visible-xs").addClass('active');
		} else {		
			$("#gitf_ord_summary").show('300');
			$("#gitf_items").hide('300');
			$('.sub-title').removeClass('active');
			$("#gift-title .sub-title.visible-xs").addClass('active');
		}	
	});

	//Toggle Gift Details in Table - Responsive
	$('span.angle-down').on('click', function(e){
		$(this).hide();
		$('.gift-o-detail').hide();
		$(this).next().show();
		$(this).parent().next().show();

	});
	
	$('span.angle-up, .close-gift-detail').on('click', function(e){					
		$('.gift-o-detail').hide('300');
		$('span.angle-up').hide();
		$('span.angle-down').show();
	});
	
	$('.gift-summ-mobile-container .angle-up').on('click', function(){
		$(this).hide();
		$('.gift-detail-mobile-container').hide('300');
		$('span.angle-down').show();
	});
	$('.gift-summ-mobile-container .angle-down').on('click', function(){
		$(this).hide();
		$('.gift-detail-mobile-container').show('300');
		$('span.angle-up').show();
	});

	$('.close-gift-detail').on('click', function(){
		$(this).closest('.gift-detail-mobile-container').hide();
	})
});
