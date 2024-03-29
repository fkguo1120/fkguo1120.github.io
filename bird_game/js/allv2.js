function game3(game_score) {
  clearInterval(interval);
  
  logFile.push("第1關遊戲開始(A)\n")
  logFileSimple.push("A")

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
      tw:"奉獻(v)",
      en:"devote"
    },
    {
      tw:"金融的(adj)",
      en:"financial"
    },
    {
      tw:"忌妒的(adj)",
      en:"jealous"
    },
    {
      tw:"興趣(n)",
      en:"hobby"
    },
    {
      tw:"購買(v)",
      en:"purchase"
    },
    {
      tw:"原始的(adj)",
      en:"original"
    },
    {
      tw:"厭惡的(adj)",
      en:"disfavored"
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
    game2_number+=1;
    game2_topic+=1
    game2_check()
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
    console.log(bcc);
  });

  // 重新輸入單字按鈕
  $('#game2_reset_btn').on( "click", function() {
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
      game2_check()
      $('#game_score').text(score2)
      next_word()
    }else{
      alert("答錯了!");
      game2_number+=1;
      game2_topic+=1
      $('#topic').html(game2_topic)
      game2_check()
      next_word()
    };
  });

  game2_init();  

};