 <!-- 메인 슬라이드  -->
        function slide(){
            $('#slide').stop().animate({marginLeft:-1400},function(){
                $('#slide li:first').appendTo('#slide');
                $('#slide').css({marginLeft:0});
            });
        }
        setInterval(slide,3500);