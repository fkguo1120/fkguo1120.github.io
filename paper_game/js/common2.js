$(function () {
	
	// function countDown() {	
	// 	timeCount.text(time);
	// 	time--
	// }

	var time = 30; //倒數計時
	var timeCount = $('.second_top-time span'); //倒數計時dom
	var question = $('.question h3'); 
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
	var score = 1000 //起始得分
	var topic = 1 //題目數
	var lightCount = 0 //燈數
	var wrongSupport = 0

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
	});

	//初始化遊戲
	function showgame() {
		// iii = getRandom(0 , qatatle);
		question.text(testArray[qaStart].question);
		btn1.text("A. "+ testArray[qaStart].answers[0].answer);
		btn2.text("B. "+ testArray[qaStart].answers[1].answer);
		btn3.text("C. "+ testArray[qaStart].answers[2].answer);
		btn4.text("D. "+ testArray[qaStart].answers[3].answer);
		imgSupport.attr('src',testArray[qaStart].img);
		clauseSupport.text(testArray[qaStart].support);
		wordSupport.text(testArray[qaStart].wordSupport);
		$('.wrong_support').html("<h5>文章翻譯:</h5>"+testArray[qaStart].translateSupport+"</br></br>"+"<h5>文法提示:</h5>"+testArray[qaStart].support+"</br></br>"+"<h5>單字提示:</h5>"+testArray[qaStart].wordSupport);
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
			score+=100
			imgSupport.hide();
			clauseSupport.hide();
			wrongSupport=0;
			$('#score').text(score)
			lightCount+=1
			if(lightCount===1){
				$('.light-1').removeClass("btn-outline-success").addClass("btn-success")
			}else if(lightCount===2){
				$('.light-2').removeClass("btn-outline-success").addClass("btn-success")
			}else if(lightCount===3){
				$('.light-3').removeClass("btn-outline-success").addClass("btn-success")
			}
			alert("答對了")
			showgame2(qaStart)
		}else{
			score-=50			
			lightCount=0
			$('.light-1').removeClass("btn-success").addClass("btn-outline-success")
			$('.light-2').removeClass("btn-success").addClass("btn-outline-success")
			$('.light-3').removeClass("btn-success").addClass("btn-outline-success")
			$('#score').text(score)
			wrongSupport++
			//答錯兩次時
			if(wrongSupport===2){
				$('#exampleModalCenter').modal('show')
			}
			alert("答錯了")
			return false
		}
	}	
	//初始下一個題目
	function showgame2(qaStart) {
		topic+= 1
		$('#topic').html(topic)
		if(topic===7){
			clearInterval(interval)
			alert("遊戲結束。")
			return
		}
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
		$('.wrong_support').html("<h5>文章翻譯:</h5>"+testArray[qaStart].translateSupport+"</br></br>"+"<h5>文法提示:</h5>"+testArray[qaStart].support+"</br></br>"+"<h5>單字提示:</h5>"+testArray[qaStart].wordSupport);

	}

	//錯誤兩次出現的popup 下一題按鈕
	$('.next_q').on("click",function() {
		next_q();
	})

	function next_q() {
		qaStart++
		time = 30
		clauseSupport.hide();
		imgSupport.hide();
		wordSupport.hide();
		wrongSupport=0
		$('#score').text(score)
		lightCount=0
		if(lightCount===1){
			$('.light-1').removeClass("btn-outline-success").addClass("btn-success")
		}else if(lightCount===2){
			$('.light-2').removeClass("btn-outline-success").addClass("btn-success")
		}else if(lightCount===3){
			$('.light-3').removeClass("btn-outline-success").addClass("btn-success")
		}
		showgame2(qaStart)
	}

	var interval = setInterval(function() {
		if (time >= 0) { 
			timeCount.text(time);
			time--
		}else{
			time = 30
			qaStart++
			showgame2(qaStart)
		}

		// } else { 
			// setInterval(interval);
		// } 
		
	}, 1000);
	
		

	// function nextqa() {
	// 	imgSupport.attr('src',testArray[0].img);
	// 	question.text(testArray[0].question);
	// 	btn1.text(testArray[0].answers[0].answer);
	// 	btn2.text(testArray[0].answers[1].answer);
	// 	btn3.text(testArray[0].answers[2].answer);
	// 	btn4.text(testArray[0].answers[3].answer);
	// 	clauseSupport.text(testArray[0].support);
	// };

	// function nextqa2() {
	// 	var iii = getRandom(0 , qatatle);
	// 	console.log(qatatle);
	// 	imgSupport.attr('src',testArray[iii].img);
	// 	question.text(testArray[iii].question);
	// 	btn1.text(testArray[iii].answers[0].answer);
	// 	btn2.text(testArray[iii].answers[1].answer);
	// 	btn3.text(testArray[iii].answers[2].answer);
	// 	btn4.text(testArray[iii].answers[3].answer);
	// 	clauseSupport.text(testArray[iii].support);	
	// };

	// $('.btngo').click(function() {
	// 	var select = $(this).index();
	// 	if(testArray[iii].answers[select].isright==true){
	// 		testArray.splice(iii, 1);
	// 		qatatle--
	// 		time = 10
	// 		imageSupport.hide();
	// 		clauseSupport.hide();
	// 		nextqa2()
	// 	}else if(testArray[iii].answers[select].isright!==true){
	// 		return
	// 	}
	// });

	showgame()
	// interval()

});
