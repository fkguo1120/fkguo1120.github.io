function game3(game_score) {
  clearInterval(interval);
  var highestIntervalId = setInterval(";");
  for (var i = 0 ; i < highestIntervalId ; i++) {
      clearInterval(i); 
  }
  $('#game1-content').removeClass("game2-content");
  logFile.push("第二關遊戲開始(H)\n")
  logFileSimple.push("H")

  var game2_time = 120;
  var score2 = game_score
  $('#qa_total').show();
  var game2_topic = 1
  $('#topic').html(game2_topic)
  var game2_qatatle = 9
  $("#qatotal").html(game2_qatatle)
  var timeCount = $('.second_top-time span'); //倒數計時dom
  timeCount.text(game2_time);


  //第二關遊戲循環倒數
  var interval;
  var intervalCall = function() {
    if (game2_time >= 0) { 
      timeCount.text(game2_time);
      game2_time--
      clearInterval(interval);
      interval = setInterval(intervalCall, 1000);
    }else{
      clearInterval(interval);
      alert("第二關遊戲結束");
      logFile.push("遊戲分數:" + score2 + "\n")
      logFile.push("第二關遊戲結束-時間到，題目未作答完(Q)\n")
      logFile.push("\n")
      logFileSimple.push("Q")
      $('#game3').css('display', 'none');
      $('#game4').css('display', 'block');
      $('.bingo_line').css('display', 'inline-block');
      $('.base_qa_line').css('display', 'none');
      game4(score2)
      $('#game1-content').css("background-image", "url('images/game4_bg.jpg')");
    }
  };
  interval = setInterval(intervalCall, 1000); 

  $('#game_score').text(score2)
  var vocabulary = [
    {
      tw:"多樣的(adj)",
      en:"diverse"
    },
    {
      tw:"課外的(adj)",
      en:"extracurricular"
    },
    {
      tw:"參與(v)",
      en:"participate"
    },
    {
      tw:"奉獻(v)",
      en:"devote"
    },
    {
      tw:"積極的(adj)",
      en:"motivated"
    },
    {
      tw:"財務的(adj)",
      en:"financial"
    },
    {
      tw:"態度(n)",
      en:"attitude"
    },
    {
      tw:"興趣(n)",
      en:"hobby"
    },
    {
      tw:"堂兄弟(n)",
      en:"cousin"
    },
    {
      tw:"批判的(adj)",
      en:"critical"
    },
    {
      tw:"耗盡(v)",
      en:"exhaust"
    },
    {
      tw:"討厭(v)",
      en:"disfavor"
    },
    {
      tw:"保險(n)",
      en:"insurance"
    },
    {
      tw:"非凡的(adj)",
      en:"remarkable"
    },
    {
      tw:"同時地(adv)",
      en:"concurrently"
    },
    {
      tw:"不必要的(adj)",
      en:"needless"
    }
  ];
  var newobj = [];
  var obj = [];
  var game2_number = 0
  var game2_now_word = []
  var game2_now_word_length = Number
  var game2_word_left = ""
  var game2_word_left_length = Number
  
  //用Math.random()函式生成0~1之間的隨機數與0.5比較，返回-1或1
  function randomsort(a, b) {
    return Math.random() > .5 ? -1 : 1;
  }
  
  //隨機亂數涵式
  function makeid(game2_word_left_length) {
    var result           = '';
    var characters       = 'qwertyuiopasdfghjklzxcvbnm';
    for ( var i = 0; i < game2_word_left_length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * game2_word_left_length));
    };
    return result;
  }

  //第一題涵式
  function game2_init() {
    newobj = [];
    // 切割新單字丟回陣列
    $("#data_tw").html(vocabulary[game2_number].tw)
    var game2_now_word = vocabulary[game2_number].en.split("");
    for ( var i = 0; i < game2_now_word.length; i++ ) {
       var new_words = {
         type: game2_now_word[i],
         word: game2_now_word[i]
       };
       newobj.push(new_words);
    }

    $('#game2_support').append(game2_now_word[0])
    for ( var i = 1; i < game2_now_word.length-1; i++ ) {
      $('#game2_support').append(" _ ")
    }
    $('#game2_support').append(game2_now_word[game2_now_word.length-1])
    
    // 剩餘的空格補亂數單字
    game2_now_word_length = game2_now_word.length;
    game2_word_left_length = 16 - game2_now_word_length;
    game2_word_left = makeid(game2_word_left_length);
    var abc = game2_word_left.split("");
    for ( var i = 0; i < abc.length; i++ ) {
       var xxx = {
         type: abc[i],
         word: abc[i]
       };
       newobj.push(xxx);
    }
    
    newobj.sort(randomsort);
    newobj.reverse();
    
    // 渲染回宮格上面
    $(".in").each(function( index ) {
      $(this).removeData('value');
      $(this).html('<h3>' + newobj[index]["word"] + '</h3>');
      $(this).data('value', newobj[index]["word"]);
    });
            
    // DOM渲染亂數單字
    // $('#aaa').html(game2_word_left);
  }   

  //下一題涵式
  function next_word() {
    newobj = [];
    $('#data_v').html('');
    $('.in').removeClass('pointer_none');
    
    // 切割新單字丟回陣列
    $("#data_tw").html(vocabulary[game2_number].tw)
    var game2_now_word = vocabulary[game2_number].en.split("");
    for ( var i = 0; i < game2_now_word.length; i++ ) {
       var new_words = {
         type: game2_now_word[i],
         word: game2_now_word[i]
       };
       newobj.push(new_words);
    }

    $('#game2_support').html('')
    $('#game2_support').append(game2_now_word[0])
    for ( var i = 1; i < game2_now_word.length-1; i++ ) {
      $('#game2_support').append(" _ ")
    }
    $('#game2_support').append(game2_now_word[game2_now_word.length-1])    
    
    // 剩餘的空格補亂數單字
    game2_now_word_length = game2_now_word.length;
    game2_word_left_length = 16 - game2_now_word_length;
    game2_word_left = makeid(game2_word_left_length);
    var abc = game2_word_left.split("");
    for ( var i = 0; i < abc.length; i++ ) {
       var xxx = {
         type: abc[i],
         word: abc[i]
       };
       newobj.push(xxx);
    }
    
    newobj.sort(randomsort);
    newobj.reverse();
    
    // 渲染回宮格上面
    $(".in").each(function( index ) {
      $(this).removeData('value');
      $(this).html('<h3>' + newobj[index]["word"] + '</h3>');
      $(this).attr('data-value', newobj[index]["word"]);
    });
       
   // DOM渲染亂數單字
    // $('#aaa').html(game2_word_left);
  }

  function game2_check(){
    if(game2_number===(vocabulary.length)){
      setTimeout(function () {
        alert("第二關遊戲結束")
        clearInterval(interval);
        logFile.push("遊戲分數:" + score2 + "\n")
        logFile.push("第二關遊戲結束-全部題目作答完(Z)\n")
        logFile.push("\n")
        logFileSimple.push("Z")
        $('#game3').css('display', 'none');
        $('#game4').css('display', 'block');
        $('.bingo_line').css('display', 'inline-block');
        $('.base_qa_line').css('display', 'none');
        game4(score2)
        $('#game1-content').css("background-image", "url('images/game4_bg.jpg')");
      }, 500);
    }else{
      $('#topic').html(game2_topic)
    }
  }

  // 下一題點擊之後
  $('#game2_next_btn').on( "click", function() {
    logFile.push(game2_time + "秒-------------->下一題按鈕(I)\n")
    logFileSimple.push("I")
    game2_number+=1;
    game2_topic+=1;
    game2_check();
    next_word();
  })

  //隨機排列陣列
  // newobj.sort(randomsort);
  // $('.out').html('')
  // $.each(newobj, function( index, item ) {
  // 	var template_game2 = ""
  // 	template_game2 += '<div class="in">';
  // 		template_game2 += '<h3>' + item.word + '</h3>';
  // 	template_game2 += '</div>';

  // 	$('.out').append(template_game2);
  // });

  // 字母點擊之後
  $('.in').on( "click", function() {
    $(this).addClass('pointer_none');
    var bcc = $(this).data('value');
    $('#data_v').append(bcc);
    // console.log(bcc);
  });

  // 重新輸入單字按鈕
  $('#game2_reset_btn').on( "click", function() {
    logFile.push(game2_time + "秒-------------->重新拼字(J)\n")
    logFileSimple.push("J")
    $('#data_v').html('');
    $('.in').removeClass('pointer_none');
  });

  // 提交點擊之後
  $('#game2_submit_btn').on( "click", function() {
    if($('#data_v').html()===vocabulary[game2_number].en){
      alert("答對了!");
      game2_number+=1;
      score2 += 50
      game2_topic+=1
      $('#topic').html(game2_topic)
      logFile.push(game2_time + "秒-------------->送出-答題正確(K)\n")
      logFileSimple.push("K")
      game2_check()
      $('#game_score').text(score2)
      next_word()
    }else{
      alert("答錯了!");
      game2_number+=1;
      game2_topic+=1
      $('#topic').html(game2_topic)
      logFile.push(game2_time + "秒-------------->送出-答題錯誤(L)\n")
      logFileSimple.push("L")
      game2_check()
      next_word()
    };
  });

  game2_init();  

};