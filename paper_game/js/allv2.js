function game3(game_score) {
  clearInterval(interval);
  var score2 = game_score
  $('#game_score').text(score2)
  var vocabulary = [
    "apple",
    "banana",
    "orange"
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

  //下一題涵式
  function next_word() {
    newobj = [];
    $('#data_v').html('');
    $('.in').removeClass('pointer_none');
    
    // 切割新單字丟回陣列
    var game2_now_word = vocabulary[game2_number].split("");
    for ( var i = 0; i < game2_now_word.length; i++ ) {
       var new_words = {
         type: game2_now_word[i],
         word: game2_now_word[i]
       };
       newobj.push(new_words);
    }
    
    // 剩餘的空格補亂數單字
    game2_now_word_length = game2_now_word.length;
    game2_word_left_length = 9 - game2_now_word_length;
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
    $('#aaa').html(game2_word_left);
  }

  // 下一題點擊之後
  $('#game2_next_btn').on( "click", function() {
    game2_number+=1;
    next_word();
  })

  function game2_init() {
    newobj = [];
    // 切割新單字丟回陣列
    var game2_now_word = vocabulary[game2_number].split("");
    for ( var i = 0; i < game2_now_word.length; i++ ) {
       var new_words = {
         type: game2_now_word[i],
         word: game2_now_word[i]
       };
       newobj.push(new_words);
    }
    
    // 剩餘的空格補亂數單字
    game2_now_word_length = game2_now_word.length;
    game2_word_left_length = 9 - game2_now_word_length;
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
    $('#aaa').html(game2_word_left);
  }  

  game2_init();

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
    if($('#data_v').html()===vocabulary[game2_number]){
      alert("答對了!");
      game2_number+=1;
      next_word()
    }else{
      alert("答錯了!");
      game2_number+=1;
      next_word()
    };
  });

};