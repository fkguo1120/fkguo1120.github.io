$(function () {
  // ------------------- 修改區(包含格子數量、轉盤路徑、對應燈箱圖片及連結)
  // ------------------- 輸入格子數量[4,5,6,8]
  var section = 8;
  // ------------------- 轉盤檔名路徑
  var gameImg = 'img/game/0905.png'
  // ------------------- 對應燈箱數量(如上方section = 6,則下方需要6個物件)
  var itemObj = [
    {
      text: '別難過～送你日用品神秘優惠賣場！',
      img: 'img/btn_03.png',
      link: 'https://24h.pchome.com.tw/store/DAAJFX',
    },
    {
      text: '恭喜中獎！全站下單 即享9折優惠',
      img: 'img/btn_01.png',
      link: 'https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f20c9b3a4man2',
    },
    {
      text: '恭喜中獎！購物中心下單 即享79折優惠',
      img: 'img/btn_01.png',
      link: 'https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68dfa8666bcman2',
    },
    {
      text: '恭喜中獎！買3C商品 即享88折優惠',
      img: 'img/btn_01.png',
      link: 'https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f38a783d6man1',
    },
    {
      text: '別灰心～好康報你知 神秘優惠賣場$9起',
      img: 'img/btn_03.png',
      link: 'https://24h.pchome.com.tw/store/DAAJEQ',
    },
    {
      text: '恭喜中獎！全站下單 即享9折優惠',
      img: 'img/btn_01.png',
      link: 'https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f20c9b3a4man2',
    },
    {
      text: '恭喜中獎！購物中心下單 即享79折優惠',
      img: 'img/btn_01.png',
      link: 'https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68dfa8666bcman2',
    },
    {
      text: '恭喜中獎！買3C商品 即享88折優惠',
      img: 'img/btn_01.png',
      link: 'https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f38a783d6man1',
    },
  ]

  // ----------------------  END 修改區
  $('.game__main img').attr('src', gameImg);

  var $gameBtn = $('.game__btn');
  var angle = 360 / section; //每區塊角度
  var originalAngle = 720;   //起始轉動度數
  var addAngle;              //每次隨機增加角度
  var angleCount = 0;        //所有旋轉角度總和
  var angleCountRemainder;   //角度總和/360餘數
  var angleArea;             //落點區域

  $gameBtn.on('click', function (e) {
    e.preventDefault();
    $(this).css('pointer-events', 'none');
    gameStart();
  });

  // ---- 是否整除
  function checkAngleCount() {
    addAngle = Robj(0, 360);
    if ((angleCount + addAngle) % angle == 0) {
      addAngle = Robj(0, 360);
      checkAngleCount();
    }
    else {
      angleCount += addAngle;
    }
  }

  // ----- 遊戲開始
  function gameStart() {
    var $gameMain = $('.game__main');
    checkAngleCount()
    angleCountRemainder = angleCount % 360;
    angleArea = Math.ceil((360 - angleCountRemainder) / angle);
    $('.prize-get').attr('href', itemObj[angleArea - 1].link).find('img').attr('src', itemObj[angleArea - 1].img);
    $('.hand').find('p').html(itemObj[angleArea - 1].text);

    if(angleArea - 1 == 0 || angleArea - 1 == 4){
      $('#gameAgain').show();
    }else{
      $('#gameAgain').hide();
    }
    
    TweenMax.to($gameMain, 4, {
      rotation: originalAngle + addAngle, ease: Power3.easeOut, onComplete: function () {
        // console.log(
        //   `起始角度:${originalAngle}`,
        //   `增加角度:${addAngle}`,
        //   `角度總和%360:${angleCountRemainder}`,
        //   `落點區塊:${angleArea}`
        // );
        originalAngle += (720 + addAngle);
        $gameBtn.css('pointer-events', 'auto');
        $('#game__modal').modal('show');
        $('#gameModal').modal('hide');
      }
    });
  }

  // ---- 隨機整數
  function Robj(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // ------------------ 中獎跳轉 ------------------ //
  $(function () {
    var now = new Date();
    var ms = now.getMonth() + 1;
    var ds = now.getDate();
    var hs = now.getHours();
    if ( ms == 9 && ds == 6 && hs >= 0 && hs < 24)  {
      itemObj[3].text = "恭喜中獎！買美妝時尚商品 即享88折優惠";
      itemObj[3].link = "https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f4c8095adman1";
      itemObj[7].text = "恭喜中獎！買美妝時尚商品 即享88折優惠";
      itemObj[7].link = "https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f4c8095adman1";
    }else if(ms == 9 && ds == 7 && hs >= 0 && hs < 24){
      itemObj[3].text = "恭喜中獎！買家電商品 即享88折優惠";
      itemObj[3].link = "https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f586dfa52man1";
      itemObj[7].text = "恭喜中獎！買家電商品 即享88折優惠";
      itemObj[7].link = "https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f586dfa52man1";
    }else if(ms == 9 && ds == 8 && hs >= 0 && hs < 24){
      itemObj[3].text = "恭喜中獎！買食品日用商品 即享88折優惠";
      itemObj[3].link = "https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f611591d3man1";
      itemObj[7].text = "恭喜中獎！買食品日用商品 即享88折優惠";
      itemObj[7].link = "https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f611591d3man1";
    }else if(ms == 9 && ds == 9 && hs >= 0 && hs < 24){
      itemObj[3].text = "恭喜中獎！買生活戶外運動商品 即享88折優惠";
      itemObj[3].link = "https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f6de1650aman2";
      itemObj[7].text = "恭喜中獎！買生活戶外運動商品 即享88折優惠";
      itemObj[7].link = "https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f6de1650aman2";
    }else if(ms == 9 && ds == 10 && hs >= 0 && hs < 24){
      itemObj[3].text = "恭喜中獎！買生活戶外運動商品 即享88折優惠";
      itemObj[3].link = "https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f6de1650aman2";
      itemObj[7].text = "恭喜中獎！買生活戶外運動商品 即享88折優惠";
      itemObj[7].link = "https://shopping.pchome.com.tw/marketing/coupon/v2/couponsend.htm?id=5d68f6de1650aman2";
    } 
  });	


  // ------------------ GA計算 GA計算 ------------------ //
  // ---- GA開始幾次
  var k = 0;
  $('#gameStart').on('click', function (e) {
    e.preventDefault();
    ++k
    dataLayer.push({
      'event' : 'click-ga',
      'eventCategory': 'Game20190905', 
      'eventAction': 'Start_'+ k,
      'eventLabel': 'na'
    });
    console.log(k);
  });

  // ---- GA放棄誰
  $('#gameClose').on('click', function (e) {
    e.preventDefault();
    dataLayer.push({
      'event' : 'click-ga',
      'eventCategory': 'Game20190905', 
      'eventAction': 'Prize_abandon',
      'eventLabel': itemObj[angleArea - 1].text
    });
    console.log("我放棄了"+ itemObj[angleArea - 1].text);
  });
  
  // ---- GA領取誰
  $('#prizeGet').on('click', function () {
    dataLayer.push({
      'event' : 'click-ga',
      'eventCategory': 'Game20190905', 
      'eventAction': 'Prize_get',
      'eventLabel': itemObj[angleArea - 1].text
    });
    console.log("我領取了"+ itemObj[angleArea - 1].text);
  });

  // ---- GA再玩一次
  $('#gameAgain').on('click', function () {
    dataLayer.push({
      'event' : 'click-ga',
      'eventCategory': 'Game20190905', 
      'eventAction': 'again',
      'eventLabel': 'na'
    });
    console.log("我要再玩一次");
  });


});
