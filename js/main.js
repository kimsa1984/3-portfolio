// 메인 슬라이드
        function slide(){
            $('#slide').stop().animate({marginLeft:-1400},function(){
                $('#slide li:first').appendTo('#slide');
                $('#slide').css({marginLeft:0});
            });
        }
        setInterval(slide,3500);

// popup iframe
        $(".click").click(function(){
            $(".popup").hide();
            $(".iframe").show();
            $(".iframe iframe").attr("src","https://player.vimeo.com/video/616246851?title=0&amp;byline=0&amp;portrait=0&amp;h=6bcc005cb8");
            $(".popup").show();
            $(".close").show();
        });
        $(".close").click(function(){
            $(".iframe").hide();
            $(".closebtn").hide();
           
        });
        