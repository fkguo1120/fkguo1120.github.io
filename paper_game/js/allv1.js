// (function () {

function game2(game_score) {
  clearInterval(interval);
  $('#game1-content').addClass("game2-content");
  // // ie GG
  // if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
  //   $('.ie-mask').css('display', 'block');
  // }

  // $(window).on("load", function () {
  //   // $('.loading_mask').addClass('fadeOut').show().delay(500).fadeOut(0);
  //   setTimeout(animation, 400);
  // })
  logFile.push("第一關遊戲開始(A)\n")
  logFileSimple.push("A")
  $('#qa_total').hide();
  var score1 = game_score
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
      logFile.push("遊戲分數:" + score1 + "\n")
      logFile.push("第一關遊戲結束-配對未完成(W)\n")
      logFile.push("\n")
      logFileSimple.push("W")
      $('#game2').css('display', 'none');
      $('#game3').css('display', 'block');
      game3(score1)
      $('#game1-content').css("background-image", "url('images/game3_bg.jpg')");
      $('#game1-content > div').css("background-color", "transparent");
      
    }
  };

  interval = setInterval(intervalCall, 1000);


  function animation() {
    var game1_right_total = 0

    var obj = [
      {
        type: 1,
        text: 'purchase',
      },
      {
        type: 1,
        img: 'purchase.png',
      },
      {
        type: 2,
        text: 'jealous',
      },
      {
        type: 2,
        img: 'jealous.png',
      },
      {
        type: 3,
        text: 'lonely',
      },
      {
        type: 3,
        img: 'lonely.png',
      },
      {
        type: 4,
        text: 'creative',
      },
      {
        type: 4,
        img: 'creative.png',
      }, 
      {
        type: 5,
        text: 'target',
      },
      {
        type: 5,
        img: 'target.png',
      },
      {
        type: 6,
        text: 'examination',
      },
      {
        type: 6,
        img: 'examination.png',
      }, 
      {
        type: 7,
        text: 'elementary student',
      },
      {
        type: 7,
        img: 'elementary_student.png',
      },
      {
        type: 8,
        text: 'persuade',
      },
      {
        type: 8,
        img: 'persuade.png',
      },
      {
        type: 9,
        text: 'basketball',
      },
      {
        type: 9,
        img: 'basketball.png',
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
      htmlPD += '<div class="col-22">';
      htmlPD += '<div class="flip_card-container">'
        htmlPD += '<div class="flip_card-item" data-value="' + obj[index].type + '">'
          htmlPD += '<div class="front face">'
            htmlPD += '<img src="images/card.png">'
          htmlPD += '</div>'
          htmlPD += '<div class="back face">'
            if(obj[index].hasOwnProperty('text')){
              htmlPD += '<h3 class="facevalue">' + obj[index]["text"] + '</h3>'
            }else{
              htmlPD += '<img width="100%" src="images/' + obj[index]["img"] + '"/>'
            }
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
      // console.log(count)
      $(this).addClass('rotation');
      thisValue = $(this).data('value');
      logFile.push(game1_time + "秒-------------->翻出" + thisValue + "\n")
      if (count % 2 !== 0 && thisValue !== nowValue) {
        //條件符合則全部關閉
        logFile.push("配對失敗(C)\n")
        logFileSimple.push("C")
        allFlipBack(thisValue);
      } else {
        count++;
        nowValue = thisValue;
        if (count > 0 && count % 2 == 0) {
          game1_right_total++
          score1+=50
          $('#game_score').text(score1)
          borderLight();
          logFile.push("配對成功(M)\n")
          logFileSimple.push("M")
          if(game1_right_total===9){
            setTimeout(function () {
              alert("第一關遊戲結束")
              clearInterval(interval);
              logFile.push("遊戲分數:" + score1 + "\n")
              logFile.push("第一關遊戲結束-配對皆完成(F)\n")
              logFile.push("\n")
              logFileSimple.push("F")
              $('#game2').css('display', 'none');
              $('#game3').css('display', 'block');
              game3(score1)
              $('#game1-content').css("background-image", "url('images/game2_bg.jpg')");
              $('#game1-content > div').css("background-color", "transparent");
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
      // console.log('success');
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

