// 메인 슬라이드
        var w=window.innerWidth;

        function slide(){
            $('#slide').stop().animate({marginLeft:-w},function(){
                $('#slide li:first').appendTo('#slide');
                $('#slide').css({marginLeft:0});
            });
        }
        setInterval(slide,3000);

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

//menu bar 
        // $(function(){
        //     $('.main_menu>li').click(function(){
        //         $('.sub').stop().slideUp();
        //         $('this').find('.sub').stop().slideToggle('fast');

        //     });
        // });
        
        $(function(){
            $('.menu1').click(function(){
                $('.sub').slideToggle();
            });
            $("#toplogo").mouseleave(function(){
                $('.sub').hide();
            });
        });