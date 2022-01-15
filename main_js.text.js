$(function(){
	$("#ham").click(function(){
    	$("#menu1").slideToggle();
    });
	$("#sub1").click(function(){
    	$("#sub1_1").slideToggle();
    });
    $("#sub2").click(function(){
    	$("#sub2_1").slideToggle();
    });
    $("#sub3").click(function(){
    	$("#sub3_1").slideToggle();
    });

 
	$('#no1').mouseover(function(){
		$('#poster1').show();
		$('#poster2').hide();
		$('#poster3').hide();
	});
	$('#no2').mouseover(function(){
		$('#poster2').show();
		$('#poster1').hide();
		$('#poster3').hide();
	});
	$('#no3').mouseover(function(){
		$('#poster3').show();
		$('#poster1').hide();
		$('#poster2').hide();
	});



	$("#close").click(function(){
		$("#pi_secret").slideUp(500);
	});
	$(".img1").click(function(){
		$("#pi_secret").slideDown(500);
	});
	$(".img2").click(function(){
		$("#pi_secret").slideDown(500);
	});
	$(".img3").click(function(){
		$("#pi_secret").slideDown(500);
	});
	$(".img4").click(function(){
		$("#pi_secret").slideDown(500);
	});
	$(".img5").click(function(){
		$("#pi_secret").slideDown(500);
	});
	$("#piece1").click(function(){
		$("#art1").show();
		$("#art2").hide();
		$("#art3").hide();
		$("#art4").hide();
		$("#art5").hide();
		$("#art6").hide();
		$("#art7").hide();
	});
	$("#piece2").click(function(){
		$("#art2").show();
		$("#art1").hide();
		$("#art3").hide();
		$("#art4").hide();
		$("#art5").hide();
		$("#art6").hide();
		$("#art7").hide();
	});
	$("#piece3").click(function(){
		$("#art3").show();
		$("#art1").hide();
		$("#art2").hide();		
		$("#art4").hide();
		$("#art5").hide();
		$("#art6").hide();
		$("#art7").hide();
	});
	$("#piece4").click(function(){
		$("#art4").show();
		$("#art1").hide();
		$("#art2").hide();
		$("#art3").hide();
		$("#art5").hide();
		$("#art6").hide();
		$("#art7").hide();
	});
	$("#piece5").click(function(){
		$("#art5").show();
		$("#art1").hide();
		$("#art2").hide();
		$("#art3").hide();
		$("#art4").hide();
		$("#art6").hide();
		$("#art7").hide();
	});
	$("#piece6").click(function(){
		$("#art6").show();
		$("#art1").hide();
		$("#art2").hide();
		$("#art3").hide();
		$("#art4").hide();
		$("#art5").hide();
		$("#art7").hide();
	});
	$("#piece7").click(function(){
		$("#art7").show();
		$("#art1").hide();
		$("#art2").hide();
		$("#art3").hide();
		$("#art4").hide();
		$("#art5").hide();
		$("#art6").hide();
	});
	
	$('.tell').focus(function () {
        	$('.tell').removeAttr('placeholder');
        }).blur(function () {
        	$('.tell').attr('placeholder', "Tell Us Everything");
        });
	
	$('#name').focus(function () {
        	$(this).removeAttr('placeholder');
        }).blur(function () {
        	$(this).attr('placeholder',"Name");
        });
	$('#email').focus(function () {
        	$(this).removeAttr('placeholder');
        }).blur(function () {
        	$(this).attr('placeholder',"E-mail");
        });
	$('#number').focus(function () {
        	$(this).removeAttr('placeholder');
        }).blur(function () {
        	$(this).attr('placeholder',"Phone number");
        });
});

$(window).resize(function(){
	if(window.innerWidth>=599){
    	$('#menu1').show();
    }

});