// (function () {

function game2(game_score) {
  // // ie GG
  // if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
  //   $('.ie-mask').css('display', 'block');
  // }

  // $(window).on("load", function () {
  //   // $('.loading_mask').addClass('fadeOut').show().delay(500).fadeOut(0);
  //   setTimeout(animation, 400);
  // })
  $('#qa_total').hide();
  var score1 = game_score
  function animation() {
    var game1_right_total = 0
    var game1_time = 180;
    var timeCount = $('.second_top-time span'); //倒數計時dom
    timeCount.text(game1_time);
    //第一關遊戲循環倒數
    var interval;
    var intervalCall = function() {
      if (game1_time >= 0) { 
        timeCount.text(game1_time);
        game1_time--
        clearInterval(interval);
        interval = setInterval(intervalCall, 1000);
      }else{
        clearInterval(interval);
        alert("第一關遊戲結束");
        $('#game2').css('display', 'none');
        $('#game3').css('display', 'block');
        game3(score1)
      }
    };

    interval = setInterval(intervalCall, 1000);


    var obj = [
      {
        type: 1,
        img: '1',
      },
      {
        type: 1,
        img: '1',
      },
      {
        type: 2,
        img: '2',
      },
      {
        type: 2,
        img: '2',
      },
      {
        type: 3,
        img: '3',
      },
      {
        type: 3,
        img: '3',
      },
      {
        type: 4,
        img: '4',
      },
      {
        type: 4,
        img: '4',
      }, 
      {
        type: 5,
        img: '5',
      },
      {
        type: 5,
        img: '5',
      },
      {
        type: 6,
        img: '6',
      },
      {
        type: 6,
        img: '6',
      }, 
      {
        type: 7,
        img: '7',
      },
      {
        type: 7,
        img: '7',
      },
      {
        type: 8,
        img: '8',
      },
      {
        type: 8,
        img: '8',
      },
      {
        type: 9,
        img: '9',
      },
      {
        type: 9,
        img: '9',
      }                                   
    ]
    //隨機排列陣列
    obj.sort(randomsort);

    //印出&於父層加入屬性data-value
    var htmlPD = '';
    $.each(obj,function ( index, item ) {
      // var backHtml = 
      // $(this).html('<h1 class="facevalue">' + obj[index]["img"] + '</h1>');
      // $(this).parent().attr('data-value', obj[index].type);
      htmlPD += '<div class="col-2">';
      htmlPD += '<div class="flip_card-container">'
        htmlPD += '<div class="flip_card-item" data-value="' + obj[index].type + '">'
          htmlPD += '<div class="front face">'
            htmlPD += '<img src="images/card.png">'
          htmlPD += '</div>'
          htmlPD += '<div class="back face">'
            htmlPD += '<h1 class="facevalue">' + obj[index]["img"] + '</h1>'
          htmlPD += '</div>'          
      htmlPD += '</div><img src="images/card_height.png"></div></div>';
    });
    $('#cardcard').html(htmlPD);


  /* 版身顯示商品內容 */ 
  // var htmlPD = '';
  // for (var i = 0; i < obj; i++) {
  //   htmlPD += '<div class="col-3">';
  //     htmlPD += '<div class="flip_card-container">'
  //       htmlPD += '<div class="flip_card-item">'
  //         htmlPD += '<div class="flip_card-item" data-value="' + obj[i].type + '">'
  //           htmlPD += '<img src="images/card.png">'
  //         htmlPD += '</div>'
  //         htmlPD += '<div class="back face">'
  //           htmlPD += '<h1 class="facevalue">' + obj[i]["img"] + '</h1>'
  //         htmlPD += '</div>'          
  //   htmlPD += '</div><img src="images/card_height.png"></div></div>';
  // }
  // $('#cardcard').html(htmlPD);

    //點擊卡片數量
    var count = 0;
    //目前的data-value
    var nowValue = '';
    var $cardItem = $('.flip_card-item');

    function flipCard() {
      console.log(count)
      $(this).addClass('rotation');
      thisValue = $(this).data('value');
      if (count % 2 !== 0 && thisValue !== nowValue) {
        //條件符合則全部關閉
        allFlipBack(thisValue);
      } else {
        count++;
        nowValue = thisValue;
        if (count > 0 && count % 2 == 0) {
          game1_right_total++
          score1+=50
          $('#game_score').text(score1)
          borderLight();
          if(game1_right_total===9){
            setTimeout(function () {
              alert("第一關遊戲結束")
              clearInterval(interval);
              $('#game2').css('display', 'none');
              $('#game3').css('display', 'block');
              game3(score1)
            }, 1500);
          }
        }
        if (count === 6) {
          score1+=500
			    $('#game_score').text(score1)
          // 六格全開遊戲結束
          setTimeout(success, 1000);
        }
      }
    }
    //關閉並重置
    function allFlipBack() {
      $cardItem.addClass('pointer_none');
      setTimeout(function () {
        $('.flip_card-item[data-value="' + nowValue + '"]').removeClass('rotation box-shadow');
        $('.flip_card-item[data-value="' + thisValue + '"]').removeClass('rotation box-shadow');
      }, 800)
      setTimeout(function () {
        $cardItem.removeClass('pointer_none');
        count = 0;
        nowValue = '';
      }, 1000);
    }


    function success() {
      var $successMask = $('.success_mask');
      var $successModal = $('.success_modal');
      $successMask.css('display', 'block');
      $successModal.css('display', 'block');
      TweenLite.from($successMask, 0.5, { opacity: 0, ease: Power0.easeNone });
      TweenLite.from($successModal, 0.5, { opacity: 0, y: '-=50px', ease: Power2.easeOu });
      setTimeout(function () {
        $('.fireworks').css('display', 'block');
      }, 400)
    };
    function borderLight() {
      console.log('success');
      var nowValue2 = nowValue;
      setTimeout(function () {
        $('.flip_card-item[data-value="' + nowValue2 + '"]').addClass('box-shadow');
      }, 300);
    }
    $cardItem.on("click",flipCard);

    //用Math.random()函式生成0~1之間的隨機數與0.5比較，返回-1或1
    function randomsort(a, b) {
      return Math.random() > .5 ? -1 : 1;
    }
  }
  animation()
};
// })();

