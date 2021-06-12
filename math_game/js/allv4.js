var logFileSimple = []
var logFile = []
$('#game5').css('display', 'block');

$.preload(
  'img/boxman.png',
  'img/boxman2.png',
  'img/boxman3.png',
  'img/boxman4.png',
  'img/boxman7.png',
  'img/boxman9.png',
  'img/cloud_v3.png',
  'img/cloud_v2.png',
  'img/cloud_v1.png',
  'img/bonus.png',
  'img/btn2.png',
  'img/btn1.png',
  'img/menu1.png',
  'img/menu2.png',
  'img/menu3.png',
  'img/menu4.png',
  'img/menu5.png',
  'img/menu9.png',
  'img/panel_down.png',
  'img/game_bg.jpg',
  'img/block_lv3-2.png',
  'img/block_lv3-3.png',
  'img/panel_top.png',
);

$('#game5').css('display', 'block');

$('#menu-btn').on( "click", function() {
  // $('#nextModalMessage').html("")
  $('#title-h1').css('display', 'none');
  $('#title-man').css('display', 'none');
  $('#nextModal').modal({backdrop: 'static', keyboard: false})
});

$('#menu-done-btn').on( "click", function() {
  $('#menu-btn').css('display', 'none');
  $('.start__startgame').css('display', 'block');
  $('.infoo').css('display', 'block');
  $('#nextModal').modal('hide')
  game5(0)
})



function game5(game_score) {
  $('#game1-content').css("background-image", "none");
  $('#game1-content').css("background-color", "#a9d1dd");
  var highestIntervalId = setInterval(";");
  for (var i = 0 ; i < highestIntervalId ; i++) {
      clearInterval(i);
  }
  logFile.push("第四關遊戲開始(a)\n")
  logFileSimple.push("a")
  
  var score5 = game_score
  $('#game5_score').text(score5)

  var game5QuestionArray = [
    {
      title: '牙籤的長度是5公分4毫米，可以說是幾毫米?'
    },
    {
      title: '一支筆的長度是17公分，也可以說是幾毫米?',
    },
    // {
    //   title: '一根球棒長1公尺28公分，也可以說是幾毫米?',
    // },
    // {
    //   title: '教室一面牆的長度9500毫米，也可以說是幾公分?',
    // },
    // {
    //   title: '一塊巧克力重2公斤320公克，也可以說是幾公克?',
    // }, 
    // {
    //   title: '37000平方公分是幾平方公尺?',
    // },
    // {
    //   title: '3700000立方公分是幾立方公尺?',
    // },
    // {
    //   title: '比大小: 128000公克  口  1280公斤',
    // },
    // {
    //   title: "比大小: 12800公分  口  0.128公里",
    // }, 
    // {
    //   title: '比大小: 1289000毫米  口  0.1289公里',
    // }, 
    // {
    //   title: '比大小: 38000000立方公分  口  38立方公尺',
    // },
    // {
    //   title: '比大小: 29860公分  口  2986公尺',
    // }, 
    // {
    //   title: '比大小: 53000公克  口  53公斤',
    // },
    // {
    //   title: '一日24小時，也可以說是幾分鐘?',
    // }, 
    // {
    //   title: '比大小: 洗衣服1時22分鐘 口  烘衣服80分鐘',
    // }, 
    // {
    //   title: '1時23分20秒等於幾秒?',
    // }, 
    // {
    //   title: 'xxxx',
    // },    
  ];

  var game5AnswerArray = {
    "0":["540","54","5.4","5400",1],
    "1":["170","1700","17","1.7",0],
    "2":["12800","1280","128","12.8",1],
    // "3":["950","9500","95000","95",0],
    // "4":["2320","23200","232","232000",0],
    // "5":["3.7","370","3700","0.37",0],
    // "6":["3.7","370","3700","37000",0],
    // "7":[">","<","=",">",1],
    // "8":["=",">","<","<",0],
    // "9":[">","<","<","=",0],
    // "10":["=",">",">","<",0],
    // "11":["<",">",">","=",0],
    // "12":["=",">",">","<",0],
    // "13":["1440","14400","1280","12800",0],
    // "14":[">","<","=","<",0],
    // "15":["5000","6500","7200","4800",0],
    // "16":["xxx","xxx","xxx","xxx",0]
  }

  var game5_time = 180;
  $('#qa_total').show();
  var game5_topic = 1
  $('#game5_topic').html(game5_topic)
  var game5_qatatle = 16
  $("#qatotal").html(game5_qatatle)
  var game5_bonus = 0
  $('#game5_bonus_count').text(game5_bonus);
  $('#game5_hp_btn').attr('disabled', true);
  $('#game5_time_btn').attr('disabled', true);


  var life = 100
  var title_index = 0
  var total_indedx = game5QuestionArray.length - 1
  var right_index = game5AnswerArray[String(title_index)][4]

  var $startTitle = $('.start__title');
  var $boxman = $('.start__boxman');
  var $startGameBtn = $('.start__startgame');
  TweenMax.from($startTitle, 1, { x: -600, y: -100, rotation: 180, ease: Power3.easeOut, delay: 0.5 });
  TweenMax.from($boxman, 1, { x: -500, ease: Power3.easeOut, delay: 0.5 });
  TweenMax.from($boxman, 2, { y: '+=30px', ease: Power0.easeNone, repeat: -1, yoyo: true, delay: 0.5 });
  TweenMax.from($startGameBtn, 1, { scale: 0, ease: Bounce.easeOut, delay: 0.5 });
  $startGameBtn.on('click', function (e) {
    e.preventDefault();
    $('.start').fadeOut(100);
    startGame();
  })


  function startGame() {
    var gameHeight = $('.game5_content').height();
    var moveHeight = gameHeight + 60
    var iiiii = title_index+1
    $("#game5-notify-text").text("點擊上方圓形按鈕，可控制角色飛行高度，於物體前方近距離及同一水平線上，即可吸入。");

    //****print題目****//
    $('.game5_question').html('<h5 style="font-weight: 700;">' + iiiii + ". " + game5QuestionArray[title_index].title + '</h5>')
    logFile.push("第1題\n")

    //背景動畫及月亮
    TweenMax.to(".game5_content", 15, { backgroundPositionX: "-1050px", ease: Linear.easeNone, repeat: -1 });

    // 遊戲物件
    var GameObj = function (size, position, el) {
      this.size = size;
      this.position = position;
      this.$el = $(el);
      this.updateCss();
    }
    // 遊戲物件 --//更新css
    GameObj.prototype.updateCss = function () {
      this.$el.css("left", this.position.x);
      this.$el.css("top", this.position.y);
      this.$el.css("width", this.size.width);
      this.$el.css("height", this.size.height);
    }
    // 遊戲物件 --//檢查碰撞
    GameObj.prototype.collide1 = function (otherObject) {
      var inRangeX = otherObject.position.x + otherObject.size.width > this.position.x + 14 && otherObject.position.x < this.position.x + this.size.width - 14;
      var inRangeY = otherObject.position.y + otherObject.size.height > this.position.y + 12 && otherObject.position.y < this.position.y + this.size.height - 12;
      return inRangeX && inRangeY;
    }
    // 遊戲物件 --//正確吸入
    GameObj.prototype.collide2 = function (otherObject) {
      var inRangeX = otherObject.position.x + otherObject.size.width >= this.position.x - 50 && otherObject.position.x + otherObject.size.width < this.position.x;
      var inRangeY = otherObject.position.y + otherObject.size.height > this.position.y + 12 && otherObject.position.y < this.position.y + this.size.height - 12;
      return inRangeX && inRangeY;
    }


    // [類別] 主角boxman
    var Box = function (size, position, selector) {
      GameObj.call(this, size, position, selector);
    }
    Box.prototype = Object.create(GameObj.prototype);
    Box.prototype.constructor = Box.constructor;
    // [類別] 主角boxman --//檢查上下邊界
    Box.prototype.update = function () {
      var $gameHeight = $('.game5_content').height();
      var $thisHeight = this.size.height;
      if (this.position.y < 0) {
        this.position.y = 0;
      }
      if (this.position.y + $thisHeight > $gameHeight) {
        this.position.y = $gameHeight - $thisHeight;
      }
      this.updateCss();
    }
    // [類別] 創造boxman
    var box = new Box({ width: 110, height: 103.48 }, { x: 10, y: 200 }, '.game__boxman');
    //****boxman給予data-value正確答案****//
    $('#boxman_value').data("value",game5AnswerArray[String(title_index)][right_index])


    // [類別] 石頭
    var Block = function (size, selector) {
      this.position = { x: 1150, y: 0 }
      GameObj.call(this, size, this.position, selector);
      this.initPosition();
    }
    Block.prototype = Object.create(GameObj.prototype);
    Block.prototype.constructor = Block.contructor;
    // [類別] 石頭--// 判斷初始位置
    Block.prototype.initPosition = function () {
      var $gameHeight = $('.game5_content').height();
      var isTop = R(2, 10);
      this.updateCss();
      this.move();
      if (isTop == 0 || isTop == 1) {
        this.position.y = 0;
      } else if (isTop == 5 || isTop == 6) {
        this.position.y = $gameHeight - this.size.height
      } else if (isTop == 2 || isTop == 3) {
        this.position.y = ($gameHeight / 3) - (this.size.height / 3)
      } else if (isTop == 4 || isTop == 7) {
        this.position.y = ($gameHeight / 2) - (this.size.height / 2)
      } else {
        this.position.y = 60
      }
    }
    // [類別] 石頭--// 移動
    Block.prototype.move = function () {
      var _this = this;
      var moveTimer = setInterval(function () {

        _this.position.x -= game.blockv;

        if (_this.position.x < -(_this.size.width)) {
          _this.$el.remove();
        }
        _this.updateCss();

        if (game.gameTime > 0 && _this.collide1(box)) {
          life -= 10
          $('#barr').attr('aria-valuenow', life).css('width', life+'%');
          $('#hppp').html(life)
          _this.$el.children('img').attr("src","img/cloud_v3.png")
          _this.$el.addClass('ooo')
          // _this = null
          clearInterval(moveTimer)
          $("#boxman_value").attr("src","img/boxman4.png")
          setTimeout(function () {
            _this.$el.remove();
            $("#boxman_value").attr("src","img/boxman.png")
          }, 600);
          // setTimeout(function () {
            
          // }, 1000);
          $('#get-right').css('display', 'none');
          $('#get-error').css('display', 'none');
          $('#get-crash').css('display', 'table');
          setTimeout(function(){ 
            $('#get-crash').css('display', 'none');
          }, 1500);
          logFile.push(game5_time + "秒-------------->撞到石頭(c)\n")
          logFileSimple.push("c")
          if(life<=0){
            logFile.push("遊戲分數:" + score5 + "\n")
            logFile.push("第四關遊戲結束-沒血量(h)\n")
            logFileSimple.push("h")
            game.gameLose();
          }
        }

        if (game.gameTime > 0 && _this.collide2(box)) {
          // TweenMax.to(_this.$el, 0.1, { scale: 0});
          if($('#boxman_value').data("value")===_this.$el[0].attributes["2"].value){
            clearInterval(moveTimer)
            _this.$el.children('img').attr("src","img/cloud_v2.png")
            $("#boxman_value").attr("src","img/boxman3.png")
            setTimeout(function () {
              _this.$el.remove();
              $("#boxman_value").attr("src","img/boxman.png")
            }, 600);
            // setTimeout(function () {
              
            // }, 1000);
            title_index +=1
            right_index = game5AnswerArray[String(title_index)][4]
            score5 += 30
            $('#game5_score').text(score5)
            game5_topic ++
            $('#game5_topic').html(game5_topic)
            $('#get-right').css('display', 'table');
            $('#get-error').css('display', 'none');
            $('#get-crash').css('display', 'none');
            setTimeout(function(){ 
              $('#get-right').css('display', 'none');
            }, 1500);
            logFile.push(game5_time + "秒-------------->吸入氣球答題正確(y)\n")
            logFileSimple.push("y")
            //****boxman給予data-value正確答案****//
            $('#boxman_value').data("value",game5AnswerArray[String(title_index)][right_index])
            var iiiii = title_index+1
            //****print題目****//
            $('.game5_question').html('<h5 style="font-weight: 700;">' + iiiii + ". " + game5QuestionArray[title_index].title + '</h5>')
            // $('#rrrrr').html(game5AnswerArray[String(title_index)][right_index])
            logFile.push("第"+(title_index+1)+"題\n")
            // console.log("title_index",title_index)
            // console.log("total_indedx",total_indedx)
            if (title_index == total_indedx){
              logFile.push("遊戲分數:" + score5 + "\n")
      			  logFile.push("此關花費時間:" + (180-game5_time) + "\n")
              logFile.push("第四關遊戲結束-全部題目作答完(d)\n")
              logFileSimple.push("d")
              game.gameSuccess()
            }
          }else{
            life -= 10
            clearInterval(moveTimer)
            _this.$el.children('img').attr("src","img/cloud_v2.png")
            $('#barr').attr('aria-valuenow', life).css('width', life + '%');
            $('#hppp').html(life)
            $('#get-right').css('display', 'none');
            $('#get-error').css('display', 'table');
            $('#get-crash').css('display', 'none');
            setTimeout(function(){ 
              $('#get-error').css('display', 'none');
            }, 1500);
            score5 -= 10
            if(score5<=0){
              score5 = 0
            }
            $('#game5_score').text(score5)
            logFile.push(game5_time + "秒-------------->吸入氣球答題錯誤(n)\n")
            logFileSimple.push("n")
            if(life<=0){
              logFile.push("遊戲分數:" + score5 + "\n")
              logFile.push("第四關遊戲結束-沒血量(h)\n")
              logFileSimple.push("h")
              game.gameLose();
            }else{
              $("#boxman_value").attr("src","img/boxman2.png")
              setTimeout(function () {
                _this.$el.remove();
                $("#boxman_value").attr("src","img/boxman.png")
              }, 600);

            }
          }          
        }

      }, 10)
    }

    // [類別] 輔助物品
    var SupportBlock = function (size, selector) {
      this.position = { x: 1150, y: 0 }
      GameObj.call(this, size, this.position, selector);
      this.initPosition();
    }
    SupportBlock.prototype = Object.create(GameObj.prototype);
    SupportBlock.prototype.constructor = SupportBlock.contructor;
    // [類別] 輔助物品--// 判斷初始位置
    SupportBlock.prototype.initPosition = function () {
      var $gameHeight = $('.game5_content').height();
      var isTop = R(1, 2);
      this.updateCss();
      this.move();
      if (isTop == 1) {
        this.position.y = ($gameHeight / 3) - this.size.height
      }else{
        this.position.y = ($gameHeight / 2) + (this.size.height / 2)
      }
      
    }
    // [類別] 輔助物品--// 移動
    SupportBlock.prototype.move = function () {
      var _this = this;
      var moveTimer = setInterval(function () {

        _this.position.x -= game.blockv;

        if (_this.position.x < -(_this.size.width)) {
          _this.$el.remove();
        }
        _this.updateCss();

        if (game.gameTime > 0 && _this.collide1(box)) {
          TweenMax.to(_this.$el, 0.1, { scale: 0});
          $('#barr').attr('aria-valuenow', life).css('width', life+'%');
          $('#hppp').html(life)
          _this.$el.addClass('ooo')
          // _this = null
          clearInterval(moveTimer)
          game5_bonus += 1
          $('#game5_bonus_count').text(game5_bonus);
          $('#game5_hp_btn').attr('disabled', false);
          $('#game5_time_btn').attr('disabled', false);
          $("#boxman_value").attr("src","img/boxman3.png")
          setTimeout(function () {
            _this.$el.remove();
          }, 200);
          setTimeout(function () {
            $("#boxman_value").attr("src","img/boxman.png")
          }, 600);
          logFile.push(game5_time + "秒-------------->吃到硬幣(p)\n")
          logFileSimple.push("p")

          if(life<=0){
            logFile.push("遊戲分數:" + score5 + "\n")
            logFile.push("第四關遊戲結束-沒血量(h)\n")
            logFileSimple.push("h")
            game.gameLose();
          }

        }

        if (game.gameTime > 0 && _this.collide2(box)) {
          TweenMax.to(_this.$el, 0.1, { scale: 0});
          clearInterval(moveTimer)
          $("#boxman_value").attr("src","img/boxman3.png")
          setTimeout(function () {
            _this.$el.remove();
            $("#boxman_value").attr("src","img/boxman.png")
          }, 600);   
          // setTimeout(function () {
            
          // }, 1000);  
          game5_bonus += 1
          $('#game5_bonus_count').text(game5_bonus);
          $('#game5_hp_btn').attr('disabled', false);
          $('#game5_time_btn').attr('disabled', false);
        }
      }, 11)
    }

    // [類別] 隕石
    var StarBlock = function (size, selector) {
      this.position = { x: 1150, y: 0 }
      GameObj.call(this, size, this.position, selector);
      this.initPosition();
    }
    StarBlock.prototype = Object.create(GameObj.prototype);
    StarBlock.prototype.constructor = StarBlock.contructor;
    // [類別] 隕石--// 判斷初始位置
    StarBlock.prototype.initPosition = function () {
      var $gameHeight = $('.game5_content').height();
      var isTop = R(1, 2);
      this.updateCss();
      this.move();
      if (isTop == 1) {
        this.position.y = ($gameHeight / 3) - this.size.height
      }else{
        this.position.y = ($gameHeight / 2) + (this.size.height / 2)
      }
      
    }
    // [類別] 隕石--// 移動
    StarBlock.prototype.move = function () {
      var _this = this;
      var moveTimer = setInterval(function () {

        _this.position.x -= game.blockv;

        if (_this.position.x < -(_this.size.width)) {
          _this.$el.remove();
        }
        _this.updateCss();

        if (game.gameTime > 0 && _this.collide1(box)) {
          _this.$el.children('img').attr("src","img/block_lv3-3.png")
          life -= 10
          $('#barr').attr('aria-valuenow', life).css('width', life+'%');
          $('#hppp').html(life)
          _this.$el.addClass('ooo')
          // _this = null
          clearInterval(moveTimer)
          $("#boxman_value").attr("src","img/boxman4.png")
          setTimeout(function () {
            _this.$el.remove();
          }, 200);
          setTimeout(function () {
            $("#boxman_value").attr("src","img/boxman.png")
          }, 600);
          $('#get-right').css('display', 'none');
          $('#get-error').css('display', 'none');
          $('#get-crash').css('display', 'table');
          setTimeout(function(){ 
            $('#get-crash').css('display', 'none');
          }, 1500);
          logFile.push(game5_time + "秒-------------->撞到火焰隕石(f)\n")
          logFileSimple.push("f")
          if(life<=0){
            logFile.push("遊戲分數:" + score5 + "\n")
            logFile.push("第四關遊戲結束-沒血量(h)\n")
            logFileSimple.push("h")
            game.gameLose();
          }
        }
      }, 5)
    }

    // 遊戲本體
    var Game = function () {
      this.btnControl();
      this.createBlock();
      this.createSupportBlock();
      this.createStarBlock();
      this.startGame();
      this.startGameMain();
      this.boxv = 6;
      this.blockv = 1;
      this.touch = false;
      this.gameTime = 180;
      this.isFalse = false;
    }
    // 遊戲本體--// 按鈕控制
    Game.prototype.btnControl = function () {
      var $gameBtn = $('.game__btn');
      var _this = this;
        $gameBtn.on({
          mousedown: function (e) {
            e.preventDefault();
            _this.boxv = 6;
            _this.touch = true;
          },
          mouseup: function (e) {
            e.preventDefault();
            _this.boxv = 6;
            _this.touch = false;
          }
        })
    }
    // 遊戲本體--// 時間倒數
    Game.prototype.startGame = function () {
      var _this = this;
      setTimeout(function () {
        countDown()
      }, 500);
      function countDown() {
        var timer = setInterval(function () {
          game5_time = _this.gameTime
          $('.game__time').text(_this.gameTime);
          _this.gameTime--;
          if (_this.isFalse == true) {
            clearInterval(timer);
            console.log('lose');
          }
          if (_this.gameTime == 150) {
            $("#game5-notify-text").text("若吸入機會硬幣，可使用圓形按鈕下方的功能。");
          }
          if (_this.gameTime < 0) {
            _this.gameSuccess();
            clearInterval(timer);
            logFile.push("遊戲分數:" + score5 + "\n")
            logFile.push("第四關遊戲結束-時間到，題目未作答完(z)\n")
            logFileSimple.push("z")
            game.gameLose()
          }
        }, 1000);
      }
    }
    // 遊戲本體--// 創造石頭
    Game.prototype.createBlock = function () {
      var id = 26;
      var tt_index = 0;
      var _this = this;
      var createTimer = setInterval(function () {
        
        var blockType = R(0, 1);
        //****print石頭-附加data-value****//
        if (blockType == 0) {
          var $block = $('<div class="block" id="' + id + '" data-value="' + game5AnswerArray[String(title_index)][tt_index] + '"><p>' + game5AnswerArray[String(title_index)][tt_index] +'</p><img src="img/cloud_v1.png"></div>');          // tt_index+=1
          // if(tt_index===4){
          //   tt_index=0
          // }
        } else {
          var $block = $('<div class="block" id="' + id + '" data-value="' + game5AnswerArray[String(title_index)][tt_index] + '"><p>' + game5AnswerArray[String(title_index)][tt_index] +'</p><img src="img/cloud_v1.png"></div>');          // tt_index+=1
          // if(tt_index===4){
          //   tt_index=0
          // }
        }
        $('.game5_content').append($block);
        var block = new Block({ width: 100, height: 82.2 }, '#' + id + '');
        id++;
        tt_index++;
        if(tt_index===4){
          tt_index=0
        }
      }, 3000)
    }
    // 遊戲本體--// 創造輔助物品
    Game.prototype.createSupportBlock = function () {
      var id = 301;
      var tt_index = 0;
      var _this = this;
      var createTimer = setInterval(function () {
        
        var blockType = R(0, 1);
        //****print石頭-附加data-value****//
        if (blockType == 0) {
          var $block = $('<div class="block" id="' + id + '" data-value="' + game5AnswerArray[String(title_index)][tt_index] + '"><img src="img/bonus.png"></div>');
        } else {
          var $block = $('<div class="block" id="' + id + '" data-value="' + game5AnswerArray[String(title_index)][tt_index] + '"><img src="img/bonus.png"></div>');
        }
        $('.game5_content').append($block);
        var block = new SupportBlock({ width: 75, height: 75 }, '#' + id + '');
        id++;
        tt_index++;
        if(tt_index===4){
          tt_index=0
        }
      }, 10000)
    }
    // 遊戲本體--// 創造隕石
    Game.prototype.createStarBlock = function () {
      var id = 501;
      var tt_index = 0;
      var _this = this;
      var createTimer = setInterval(function () {
        
        var blockType = R(0, 1);
        //****print石頭-附加data-value****//
        if (blockType == 0) {
          var $block = $('<div class="block" id="' + id + '" data-value="' + game5AnswerArray[String(title_index)][tt_index] + '"><img src="img/block_lv3-2.png"></div>');
        } else {
          var $block = $('<div class="block" id="' + id + '" data-value="' + game5AnswerArray[String(title_index)][tt_index] + '"><img src="img/block_lv3-2.png"></div>');
        }
        $('.game5_content').append($block);
        var block = new StarBlock({ width: 135, height: 58.89 }, '#' + id + '');
        id++;
        tt_index++;
        if(tt_index===4){
          tt_index=0
        }
      }, 8000)
    }
    // 遊戲本體--// 主要時間函數
    Game.prototype.startGameMain = function () {
      var _this = this;
      var mainTimer = setInterval(function () {
        // 判斷按鈕控制
        if (_this.touch) {
          $('.game__btn img').attr('src', 'img/btn2.png');
          box.position.y -= _this.boxv;
          _this.boxv += 0.6;
        }
        if (!_this.touch) {
          $('.game__btn img').attr('src', 'img/btn1.png');
          box.position.y += _this.boxv;
          _this.boxv += 0.6;
        }
        if (_this.isFalse == true) {
          clearInterval(mainTimer);
        }
        if (_this.gameTime < 0) {
          clearInterval(mainTimer);
        }
        box.update();
      }, 30);
    }
    // 遊戲本體--// 遊戲失敗
    Game.prototype.gameLose = function () {
      this.blockv = 0;
      this.boxv = 0;
      this.isFalse = true;
      $("#boxman_value").attr("src","img/boxman4.png")
      console.log('lose');
      TweenMax.pauseAll();
      $('.game__btn').css('pointer-events', 'none');
      TweenMax.to(".game__boxman", 0.5, { y: '-=80px', x: '-=10px', rotation: -40, ease: Power1.easeOut, delay: 0.2, });
      TweenMax.to(".game__boxman", 0.6, { y: '+=800px', ease: Power1.easeIn, delay: 0.7, onComplete: gameLosePop })

      if(score5<=100){
        setTimeout(function(){ 
          $('#game-final-1').css('display', 'block');
          $('.final-q').text(game5_topic-1)
          $('.final-s').text(score5)
        }, 3000);
      }

      if(score5>100&&score5<=200){
        setTimeout(function(){ 
          $('#game-final-2').css('display', 'block');
          $('.final-q').text(game5_topic-1)
          $('.final-s').text(score5)
        }, 3000);
      }

      if(score5>200){
        setTimeout(function(){ 
          $('#game-final-3').css('display', 'block');
          $('.final-q').text(game5_topic-1)
          $('.final-s').text(score5)
        }, 3000);
      }

    }
    // 遊戲本體--// 遊戲成功
    Game.prototype.gameSuccess = function () {
      this.blockv = 0;
      this.boxv = 0;
      console.log('success');
      TweenMax.pauseAll();
      $('.block').remove();
      $('.game__btn').css('pointer-events', 'none');
      TweenMax.to(".game__boxman", 3, { y: '+=40', ease: Elastic.easeOut.config(1, 0.3), delay: 1 });
      TweenMax.to(".game__boxman", 0.5, { x: 800, ease: Power1.easeIn, delay: 2.5, onComplete: gameLosePop });
    }
    function gameWinPop() {
      var r = R(0, 2);
      $('.pop__top > img').attr('src', 'img/pop_top.png');
      $('.pop__top--text').html(popObj[r].text);
      $('.pop__link').attr('href', popObj[r].link)
      $('.pop').removeClass('hide');
    }
    function gameLosePop() {
      $('#game5').css('display', 'none');
      $('header').css('display', 'none');
      if(score5<=100){
        setTimeout(function(){ 
          $('#game-final-1').css('display', 'block');
          $('.final-q').text(game5_topic-1)
          $('.final-s').text(score5)
        }, 3000);
      }

      if(score5>100&&score5<=200){
        setTimeout(function(){ 
          $('#game-final-2').css('display', 'block');
          $('.final-q').text(game5_topic-1)
          $('.final-s').text(score5)
        }, 3000);
      }

      if(score5>200){
        setTimeout(function(){ 
          $('#game-final-3').css('display', 'block');
          $('.final-q').text(game5_topic-1)
          $('.final-s').text(score5)
        }, 3000);
      }
      setTimeout(function(){ 
        var highestIntervalId = setInterval(";");
        for (var i = 0 ; i < highestIntervalId ; i++) {
            clearInterval(i); 
        }
      }, 10000);
    }

    $('#finalModal').on('click', function () {
      save_a()
      // save_b()
    })

    $('#game5_hp_btn').on('click', function () {
      logFile.push(game5_time + "秒-------------->補血+30按鈕(m)\n")
      logFileSimple.push("m")
      if(game5_bonus>0){
        game5_bonus -= 1;
        $('#game5_bonus_count').text(game5_bonus);
        life += 30
        if(life>=100){
          life = 100
        }
        $('#barr').attr('aria-valuenow', life).css('width', life + '%');
        $('#hppp').html(life)
      }
      checkBonus()
    })

    $('#game5_time_btn').on('click', function () {
      logFile.push(game5_time + "秒-------------->時間+30秒按鈕(t)\n")
      logFileSimple.push("t")
      if(game5_bonus>0){
        game5_bonus -= 1;
        $('#game5_bonus_count').text(game5_bonus);
        game.gameTime += 30;
        $('.game__time').text(game.gameTime);
      }
      checkBonus()
    })

    function checkBonus(){
      if(game5_bonus<=0){
        game5_bonus = 0
        $('#game5_bonus_count').text(game5_bonus);
        $('#game5_hp_btn').attr('disabled', true);
        $('#game5_time_btn').attr('disabled', true);
      }
    }
    
    $('.btn__reload').on('click', function () {
      location.reload();
    })
    var game = new Game();
    $('#hppp').html(life)
    

    function R(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    $('.history-btn').on('click', function () {

    })
    

  }

};
//Todo
//燈箱 start
//燈箱 success random(1,3)

