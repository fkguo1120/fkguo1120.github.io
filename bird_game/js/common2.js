// $(function () {
	$('#game2').css('display', 'none');
	$('#game_score_box').css('display', 'none');
	// function countDown() {	
	// 	timeCount.text(time);
	// 	time--
	// }
	var logFile = ["任務測驗開始(D)\n"]
	var logFileSimple = ["D"]
	var time = 30; //倒數計時
	var timeCount = $('.second_top-time span'); //倒數計時dom
	var question = $('.question h5'); 
	var btn = $('.answers button'); //答案按鈕
	var btn1 = $('.answers .btn1'); //答案按鈕1
	var btn2 = $('.answers .btn2'); //答案按鈕2
	var btn3 = $('.answers .btn3'); //答案按鈕3
	var btn4 = $('.answers .btn4'); //答案按鈕4
	var imgSupport = $('.img_support'); //圖片提示圖
	var wordSupport = $('.word_support'); //單字提示文字解釋
	var clauseSupport = $('.clause_support');//子句提示解釋
	var qaStart = 0; //開始題數
	var qatatle = 5; //總題數
	var score = 1000 //任務起始得分
	var game_score = 0 //遊戲起始得分
	var topic = 1 //題目數
	var wrongSupport = 0
	var crossNext = true

    function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	//圖片提示按鈕開啟時
	$('.image_toggle').on("click", function() {
		$(this).attr('disabled', true);
		imgSupport.show();
		$('.text_toggle').attr('disabled', false);
		clauseSupport.hide();
		$('.word_toggle').attr('disabled', false);
		wordSupport.hide();
		score-=50
		$('#score').html(score)
		logFile.push(time + "秒-------------->圖片提示(P)\n")
		logFileSimple.push("P")
	});
	//單字提示按鈕開啟時
	$('.word_toggle').on("click", function() {
		$(this).attr('disabled', true);
		wordSupport.show();
		$('.image_toggle').attr('disabled', false);
		imgSupport.hide();
		$('.text_toggle').attr('disabled', false);
		clauseSupport.hide();
		score-=30
		$('#score').html(score)
		logFile.push(time + "秒-------------->單字提示(V)\n")
		logFileSimple.push("V")
	});
	//子句提示按鈕開啟時
	$('.clause_toggle').on("click", function() {
		$(this).attr('disabled', true);
		clauseSupport.show();
		$('.image_toggle').attr('disabled', false);
		imgSupport.hide();
		$('.word_toggle').attr('disabled', false);
		wordSupport.hide();
		score-=30
		$('#score').html(score)
		logFile.push(time + "秒-------------->主要子句提示(S)\n")
		logFileSimple.push("S")
	});
	//刪去選項按鈕開啟時
	$('.remove_toggle').on("click", function() {
		$(this).attr('disabled', true);
		var i;
		for (i = 0; i < testArray[qaStart].answers.length; i++) {
			if(testArray[qaStart].answers[2].isright===true){
				btn2.attr('disabled', true);
			}else{
				btn3.attr('disabled', true);
			}
		}
		logFile.push(time + "秒-------------->刪去選項(R)\n")
		logFileSimple.push("R")
	});

	//初始化遊戲
	function showgame() {
		// iii = getRandom(0 , qatatle);
		logFile.push("第1題\n")
		question.text(testArray[qaStart].question);
		btn1.text("A. "+ testArray[qaStart].answers[0].answer);
		btn2.text("B. "+ testArray[qaStart].answers[1].answer);
		btn3.text("C. "+ testArray[qaStart].answers[2].answer);
		btn4.text("D. "+ testArray[qaStart].answers[3].answer);
		imgSupport.attr('src',testArray[qaStart].img);
		clauseSupport.text(testArray[qaStart].support);
		wordSupport.text(testArray[qaStart].wordSupport);
		// $('.wrong_support').html("<h5>文章翻譯:</h5>"+testArray[qaStart].translateSupport+"</br></br>"+"<h5>文法提示:</h5>"+testArray[qaStart].support+"</br></br>"+"<h5>單字提示:</h5>"+testArray[qaStart].wordSupport);
	}

	//答案按鈕按下時
	btn.on("click",function() {
		var select = $(this).index();
		check(select) //確認答題是否正確
	});

	//答案按鈕按下時
	function check(select) {
		if(testArray[qaStart].answers[select].isright === true){
			// testArray.splice(qatatle, 1);
			qaStart++
			time = 30
			timeCount.text(time);

			imgSupport.hide();
			clauseSupport.hide();
			wordSupport.hide();
			wrongSupport=0;

			score+=100
			$('#score').text(score)

			alert("答對了")
			logFile.push(time + "秒-------------->答題正確(Y)\n")
			logFileSimple.push("Y")
			showgame2(qaStart)
		}else{
			score-=50		
			$('.light-1').removeClass("btn-success").addClass("btn-outline-success")
			$('.light-2').removeClass("btn-success").addClass("btn-outline-success")
			$('.light-3').removeClass("btn-success").addClass("btn-outline-success")
			$('#score').text(score)
			wrongSupport++
			//答錯兩次時
			if(wrongSupport===2){
				$('#exampleModalCenter').modal({backdrop: 'static', keyboard: false})
				clearInterval(interval)
			}
			alert("答錯了")
			logFile.push(time + "秒-------------->答題錯誤(N)\n")
			logFileSimple.push("N")
			return false
		}
	}	
	//初始下一個題目
	function showgame2(qaStart) {
		topic+= 1
		if(topic>(qatatle+1)){
			$('#score').text(score)
			clearInterval(interval)
			alert("測驗結束。")
			logFile.push("任務得分:" + score + "\n")
			logFile.push("任務測驗結束(E)\n")
			logFile.push("\n")
			logFileSimple.push("E")
			$('#game1').css('display', 'none');
			$('#game2').css('display', 'block');
			$('#mission_score_box').css('display', 'none');
			$('#game_score_box').css('display', 'block');
			game2(game_score)
			$('#game1-content').css("background-image", "url('images/game2_bg.jpg')"); 
			return
		}
		$('#topic').html(topic)

		clauseSupport.hide();
		imgSupport.hide();
		wordSupport.hide();
		btn2.attr('disabled', false);
		btn3.attr('disabled', false);
		$('.image_toggle').attr('disabled', false);
		$('.word_toggle').attr('disabled', false);
		$('.clause_toggle').attr('disabled', false);
		$('.remove_toggle').attr('disabled', false);
		question.text(testArray[qaStart].question);
		btn1.text("A. "+ testArray[qaStart].answers[0].answer);
		btn2.text("B. "+ testArray[qaStart].answers[1].answer);
		btn3.text("C. "+ testArray[qaStart].answers[2].answer);
		btn4.text("D. "+ testArray[qaStart].answers[3].answer);
		clauseSupport.text(testArray[qaStart].support);
		imgSupport.attr('src',testArray[qaStart].img);
		wordSupport.text(testArray[qaStart].wordSupport);
		logFile.push("第" + topic + "題\n")
		// $('.wrong_support').html("<h5>文章翻譯:</h5>"+testArray[qaStart].translateSupport+"</br></br>"+"<h5>文法提示:</h5>"+testArray[qaStart].support+"</br></br>"+"<h5>單字提示:</h5>"+testArray[qaStart].wordSupport);
	}

	//popup文章翻譯開啟時
	$('.wrong_support_translate_toggle').on("click", function() {
		$('.wrong_support_toggle').hide()
		$('.wrong_support').show()
		$('.wrong_support').html("<h5>文章翻譯:</h5>"+testArray[qaStart].translateSupport+"</br>");
		crossNext = false
		logFile.push(time + "秒-------------->答錯2次選擇文章翻譯(T)\n")
		logFileSimple.push("T")
	});
	//popup單字提示開啟時
	$('.wrong_support_word_toggle').on("click", function() {
		$('.wrong_support_toggle').hide()
		$('.wrong_support').show()
		$('.wrong_support').html("<h5>單字提示:</h5>"+testArray[qaStart].wordSupport+"</br>");
		crossNext = false
		logFile.push(time + "秒-------------->答錯2次選擇單字提示(B)\n")
		logFileSimple.push("B")
	});
	//popup文法提示開啟時
	$('.wrong_support_clause_toggle').on("click", function() {
		$('.wrong_support_toggle').hide()
		$('.wrong_support').show()
		$('.wrong_support').html("<h5>文法提示:</h5>"+testArray[qaStart].support+"</br>");
		crossNext = false
		logFile.push(time + "秒-------------->答錯2次選擇文法提示(G)\n")
		logFileSimple.push("G")
	});	

	//錯誤兩次出現的popup 下一題按鈕
	$('.next_q').on("click",function() {
		if(crossNext){
			logFile.push(time + "秒-------------->答錯2次直接選擇下一題(X)\n")
			logFileSimple.push("X")
		}
		next_q();
	})

	function next_q() {
		qaStart++
		time = 30
		timeCount.text(time);
		interval = setInterval(intervalCall, 1000);
		clauseSupport.hide();
		imgSupport.hide();
		wordSupport.hide();
		wrongSupport=0
		crossNext = true
		$('.wrong_support_toggle').show()
		$('.wrong_support').hide()
		$('#score').text(score)
		showgame2(qaStart)
	}

	//循環倒數
	var interval;
	var intervalCall = function() {
		if (time >= 0) { 
			timeCount.text(time);
			time--
		}else{
			if(topic>(qatatle+1)){
				clearInterval(interval);
				return
			}else{
				time = 30
				timeCount.text(time);
				qaStart++
				showgame2(qaStart)
			}
		}
		clearInterval(interval);
		interval = setInterval(intervalCall, 1000);
	};
	interval = setInterval(intervalCall, 1000);

	showgame()
// });
