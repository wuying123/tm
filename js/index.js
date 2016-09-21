$(function(){
	$(".wdtb").hover(function(){
		$(".ymbb").show();
		$(".wdtb1").css({borderLeft:"1px solid #eee",borderRight:"1px solid #eee"})
	},function(){
		$(".ymbb").hide();
		$(".wdtb1").css({borderLeft:"1px solid #f2f2f2",borderRight:"1px solid #f2f2f2"})
	})

	$(".scj").hover(function(){
		$(".scbb").show();
		$(".wdtb1").css({borderLeft:"1px solid #eee",borderRight:"1px solid #eee"})
	},function(){
		$(".scbb").hide();
		$(".wdtb1").css({borderLeft:"1px solid #f2f2f2",borderRight:"1px solid #f2f2f2"})
	})

	$(".shouji").hover(function(){
		$(".ewm").show();
	},function(){
		$(".ewm").hide();
	})

	$(".sjzz").hover(function(){
		$(".g-sj").show();
		$(".sjzz").css({borderLeft:"1px solid #eee",borderRight:"1px solid #eee"})
	},function(){
		$(".g-sj").hide();
		$(".sjzz").css({borderLeft:"1px solid #f2f2f2",borderRight:"1px solid #f2f2f2"})
	})
	$(".wzdh").hover(function(){
		$(".gyf").show();
		$(".wzdh1").css({borderLeft:"1px solid #eee",borderRight:"1px solid #eee"})
	},function(){
		$(".gyf").hide();
		$(".wzdh1").css({borderLeft:"1px solid #f2f2f2",borderRight:"1px solid #f2f2f2"})
	})

})

// banner
$(function(){
	var gbanner=$(".main-banner");
	var yuan=$(".g-yd");
	var index=0;
	var flag=true;
	gbanner.hide().eq(index).show();
	yuan.eq(index).addClass("g-select");
	var t=setInterval(move,2000);
	function move(){
		index++;
		if(index==gbanner.length){
			index=0;
		}
		gbanner.fadeOut().eq(index).fadeIn();
		yuan.removeClass("g-select").eq(index).addClass("g-select");
		
	}
	$(".g-banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,2000);
	})
	var t2;
	yuan.hover(function(){
					var that=this;

					clearTimeout(t2);
					t2=setTimeout(function(){
					gbanner.finish();
					if(index==$(that).index()){
						return;
					}
					gbanner.fadeOut().eq($(that).index()).fadeIn();
					yuan.removeClass("g-select").eq($(that).index()).addClass("g-select");
					index=$(that).index();
				},300)
	},function(){})	

})


$(function(){
	var solid=$(".solid-item");
	var index1=0;
	var next1=0;
	solid.css("top",30).eq(0).css("top",0);
	setInterval(moveTop,2000);
	function moveTop(){
		next1++;
		if(next1==solid.length){
			next1=0;
		}
		solid.eq(next1).css("top",30);
		solid.eq(index1).animate({top:-30});
		solid.eq(next1).animate({top:0});
		index1=next1;
	}
})
$(function(){
	$($(".color-mask")[2]).css({background:"#F15453"});
})





$(function(){
	var content=$(".fixed_content");
	var item=$(".dc2");
	item.find("img").hover(function(){
		$(this).parent(".dc2").css({background:"#c40000"}).find(".fixed_content").stop().animate({left:-90,opacity:1});
	},function(){
		$(this).parent(".dc2").css({background:"#000"}).find(".fixed_content").stop().animate({left:-150,opacity:0});
	});
});


$(function(){
	var content=$(".dc3");
	var item=$(".fixed_ewm");
	item.find("img").hover(function(){
		$(this).parent(".fixed_ewm").css({background:"#c40000"}).find(".dc3").stop().animate({left:-153,opacity:1});
	},function(){
		$(this).parent(".fixed_ewm").css({background:"#000"}).find(".dc3").stop().animate({left:-180,opacity:0});
	});
});

$(function(){
	var item=$(".fixed_gwc");
	item.hover(function(){
		$(item).find("img").eq(1).hide().end().eq(0).show();
	},function(){
		$(item).find("img").eq(0).hide().end().eq(1).show();
	});
});

//返回顶部

$(function(){
	$(".fixed_top").click(function(){
		$(window).scrollTop(0);
	});





	// 楼层跳转
var obj=document.body.scrollTop?document.body:document.documentElement;
var ch=document.documentElement.clientHeight;
// alert(ch);
var wym=true;
 var floor=$('.g-lctz')
 
 var offtop=$('.g-lctz').offset(top);
 var floorArr=[];
     floor.each(function(index,value){
        
        floorArr.push(floor[index].offsetTop);
           // alert(floor[index].offsetTop)
     })
     // alert(floorArr.length);

  



  
      var colorb=["#F7A945","#19C8A9","#F15453","#64C333","#499DFC","#EA5F8D"];
     //  //色块随着楼层跳转跳转
    

    var item=$('.g-nav');
    item.each(function(index){
       
      $(".g-nav").eq(index).on("click", function(){
        wym=false;
        item.css({background:"#626262"}).eq(index).css({background:colorb[index]}
          
        )
        $(obj).animate({scrollTop:floorArr[index]},function(){
          wym=true;
        })

      });

     
    


    })

   // console.log(floorArr);
   // var flag=true;
  
  // console.log(scrollTop);
    $(window).scroll(function(){
      var scrollTop=obj.scrollTop;
     if(!wym) return;
    //获取当前滚轮滚动的距离
         obj=document.body.scrollTop?document.body:document.documentElement;
           item.each(function(index){

           if(ch+scrollTop-180>=floorArr[index]){
             item.css({background:'#626262'}).eq(index).css({background:colorb[index]})
          }
           })

        //临界条件 可视窗口的高度+滚动条滚动的距离>=某个楼层的offsetTop
        
          

        


        })


// 返回顶部
 var back=$('.nav-fh');
     back.on('click',function(){
               $(document.body).animate({scrollTop:0})
            
     } )

// 出现 消失

$(window).scroll(function(){
  var top1=$(this).scrollTop();

  
  if(top1>=450){
     
    $('.zcfix').show(500,'linear')
    
  }
  else{
    
      $('.zcfix').hide(500,'linear')
    
  }
})



});

$(function(){
	var flag=true;
	var flag1=true;
	var GT=$(".Top-container");
	$(window).scroll(function(){
		var top=$(this).scrollTop();
		if(top>=500){
			if(flag){
				flag=false;
			GT.animate({top:0},function(){
					flag1=true;
				});
			}
		}else{
			if(flag1){
				flag1=false;
				GT.animate({top:-50},function(){
					flag=true;
				})
			}
		}
	})


})
