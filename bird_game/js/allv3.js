function game4(game_score) {
  clearInterval(interval);
  
  var score4 = game_score
  $('#game_score').text(score4)

  var game4_time = 300;
  var timeCount = $('.second_top-time span'); //倒數計時dom
  timeCount.text(game4_time);
  //第三關遊戲循環倒數
  var interval;
  var intervalCall = function() {
    if (game4_time >= 0) { 
      timeCount.text(game4_time);
      game4_time--
      clearInterval(interval);
      interval = setInterval(intervalCall, 1000);
    }else{
      clearInterval(interval);
      alert("第三關遊戲結束");
      $('#game4').css('display', 'none');
    }
  };
  interval = setInterval(intervalCall, 1000); 

		var origBoard;
		var score = 0
		var targetId = "";
		var game4_answer_voice = "";
		var bingo_line = 0
		const huPlayer = 'O';
		const aiPlayer = 'X';
		const winCombos = [
			[0, 1, 2, 3, 4],
			[5, 6, 7, 8, 9],
			[10, 11, 12, 13, 14],
			[15, 16, 17, 18, 19],
			[20, 21, 22, 23, 24],
			[0, 5, 10, 15, 20],
			[1, 6, 11, 16, 21],
			[2, 7, 12, 17, 22],
			[3, 8, 13, 18, 23],
			[4, 9, 14, 19, 24],
			[0, 6, 12, 18, 24],
			[4, 8, 12, 16, 20]
		];


		var game4Array = [
			{
				img: '01.jpg',
				title: '',
				answer: 'banana',
				voice: 'banana'
			},
			{
				img: '02.jpg',
				title: '',
				answer: 'kiwi',
				voice: 'kiwi'
			},
			{
				img: '03.jpg',
				title: '',
				answer: 'orange',
				voice: 'orange'
			},
			{
				img: '04.jpg',
				title: '',
				answer: 'papaya',
				voice: 'papaya'
			},
			{
				img: '05.jpg',
				title: '',
				answer: 'pineapple',
				voice: 'pineapple'
			},
			{
				img: '06.jpg',
				title: '',
				answer: 'watermelon',
				voice: 'watermelon'
			},
			{
				img: '07.jpg',
				title: '',
				answer: 'tomato',
				voice: 'tomato'
			},
			{
				img: '08.jpg',
				title: '',
				answer: 'strawberry',
				voice: 'strawberry'
			},
			{
				img: '09.jpg',
				title: '',
				answer: 'grapes',
				voice: 'grapes'
			},
			{
				img: '10.jpg',
				title: '',
				answer: 'pear',
				voice: 'pear'
			},
			{
				img: '11.jpg',
				title: '',
				answer: 'passion fruit',
				voice: 'passion fruit'
			},
			{
				img: '12.jpg',
				title: '',
				answer: 'rambutan',
				voice: 'rambutan'
			},
			{
				img: '13.jpg',
				title: '',
				answer: 'grapefruit',
				voice: 'grapefruit'
			},
			{
				img: '14.jpg',
				title: '',
				answer: 'cantaloupe',
				voice: 'cantaloupe'
			},
			{
				img: '15.jpg',
				title: '',
				answer: 'coconut',
				voice: 'coconut'
			},
			{
				img: '16.jpg',
				title: '',
				answer: 'passion fruit',
				voice: 'passion fruit'
			},
			{
				img: '01.jpg',
				title: '',
				answer: 'grapes',
				voice: 'grapes'
			},
			{
				img: '02.jpg',
				title: '',
				answer: 'tomato',
				voice: 'tomato'
			},
			{
				img: '03.jpg',
				title: '',
				answer: 'watermelon',
				voice: 'watermelon'
			},
			{
				img: '04.jpg',
				title: '',
				answer: 'papaya',
				voice: 'papaya'
			},
			{
				img: '05.jpg',
				title: '',
				answer: 'coconut',
				voice: 'coconut'
			},
			{
				img: '06.jpg',
				title: '',
				answer: 'cantaloupe',
				voice: 'cantaloupe'
			},
			{
				img: '07.jpg',
				title: '',
				answer: 'grapefruit',
				voice: 'grapefruit'
			},
			{
				img: '08.jpg',
				title: 'When John was an __________ ______, he did not like Mary',
				answer: 'elementary student',
				voice: 'When John was an elementary student, he did not like Mary'
			},
			{
				img: '09.jpg',
				title: 'Mary does not study very hard but she can ______ high scores from all tests',
				answer: 'obtain',
				voice: 'Mary does not study very hard but she can obtain high scores from all tests'
			},
		]

    const cells = document.querySelectorAll('.cell');
    console.log("cellscells",cells)
    
		function startGame() {
			document.querySelector(".endgame").style.display = "none"
			origBoard = Array.from(Array(25).keys()); //create array 0:0, 1:1, 2:2 ...
			console.log(origBoard)
			for (var i = 0; i < cells.length; i++) {
				// cells[i].innerText = "apple";
				cells[i].innerHTML='<img class="cell_img" id="'+ i + '" src="images/' + game4Array[i].img + '"/>';
				cells[i].style.removeProperty('background-color');
				// cells[i].addEventListener('click', turnClick, false);
			}
			const cells_img = document.querySelectorAll('.cell_img');
			for (var i = 0; i < cells_img.length; i++) {
				cells_img[i].addEventListener('click', turnClick, false);
			}
			$('#bingo_line').html(bingo_line);

		}

		function turnClick(square) {
			targetId = square.target.id
			console.log("square.target.id",targetId);
			$("#game4_popup").css("display","block");
			$('.game4_title').html('<p>'+ game4Array[targetId].title+'</p>')
			$("#game4_popup_img").html('<img  src="images/' + game4Array[targetId].img + '"/>')
			// if (typeof origBoard[square.target.id] == 'number') {
			// 	turn(square.target.id, huPlayer);
			// 	if (!checkTie()) turn(bestSpot(), aiPlayer); 
			// }
		}

		function submitClick(targetId) {
			$("#game4_popup").css("display","none");
			// console.log($("input[type=text][name=username]").val(''))
			console.log(document.getElementById("username").value)
			if (typeof origBoard[targetId] == 'number') {
				turn(targetId, huPlayer);
				if (!checkTie()) turn(bestSpot(), aiPlayer); 
			}
			alert("答題正確")
		}

		function turn(squareId, player) {
			origBoard[squareId] = player;
			document.getElementById(squareId).innerText = player;
			let gameWon = checkWin(origBoard, player);
			// if (gameWon) gameOver(gameWon);
		}

		function checkWin(board, player) {
			console.log(board)
			let plays = board.reduce((a, e, i) =>(e === huPlayer) ? a.concat(i) : a, []); //e:element []:축적할 배열
			console.log("plays",plays)

			
			// let gameWon = null;
			let gameWon = [];
			console.log("winCombos.entries()", winCombos.entries())
			for (let [index, win] of winCombos.entries()) {
				// if (win.every(elem => plays.indexOf(elem) > -1)) {
				// 	gameWon = {index: index, player: player};
				// 	console.log("www",winCombos)
				// 	console.log("gameWon",gameWon)
				// 	break;
				// }

				if (win.every(elem => plays.indexOf(elem) > -1)) {
					var aaa = {
						index: index, player: huPlayer
					}
					gameWon.push(aaa)
					console.log("gameWongameWongameWon",gameWon)
					for (var i = 0; i < winCombos[index].length; i++) {
						var bbb = winCombos[index][i]
						document.getElementById(bbb).style.backgroundColor = "blue"
					}

					// gameWon = {index: index, player: huPlayer};
					score += 50
					bingo_line ++
					$('#game_score').html(score);
					$('#bingo_line').html(bingo_line);
					winCombos.splice(index, 1);
					console.log("www",winCombos);
					console.log("score",score);
					// return gameWon;
				}
			}
			// if(plays.length==8){
			// 	console.log("gameWongameWongameWongameWon",gameWon)
			// 	return gameWon;
			// }
			// console.log("gameWon",gameWon)
			// return gameWon;
			// return 111
		}

		function gameOver(gameWon) {
			console.log("gameWongameWongameWongameWon",gameWon)
			for (let index of winCombos[gameWon.index]) {
				document.getElementById(index).style.backgroundColor = gameWon.player == huPlayer ? "blue" : "red";
			}
			for(var i = 0; i < cells.length; i++) {
				cells[i].removeEventListener('click', turnClick, false);
			}
			declareWinner(gameWon.player == huPlayer ? "闖關成功!" : "闖關失敗!");
		}

		function declareWinner(who) {
			document.querySelector(".endgame").style.display = "block";
			document.querySelector(".endgame .text").innerText = who;
		}

		function emptySquares() {
			return origBoard.filter(s => typeof s == 'number');
		}

		function bestSpot() {
			return emptySquares()[0];
		}

		function checkTie() {
		// if (emptySquares().length == 0) {
		// 	for (var i = 0; i < cells.length; i++) {
		// 		cells[i].style.backgroundColor = "green";
		// 		cells[i].removeEventListener('click', turnClick, false);
		// 	}
		// 	declareWinner("Tie Game!");
		// 	return true;
		// }
		return false;
		}


		$('#game4_cancel').on( "click", function() {
			$("#game4_popup").css("display","none");
		});

		$('#game4_submit').on( "click", function() {
			if($("input[type=text][name=username]").val()===game4Array[targetId].answer){
				$("input[type=text][name=username]").val('')
				submitClick(targetId)
				$("#game4_popup").css("display","none");
			}else{
				$("input[type=text][name=username]").val('')
				alert("答題錯誤")
			}
		});

		var synth = window.speechSynthesis;

		var inputForm = document.querySelector('form');
		var inputTxt = document.getElementById("answer");

		var voices = [];
		function populateVoiceList() {
			voices = synth.getVoices().sort(function (a, b) {
				const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
				if ( aname < bname ) return -1;
				else if ( aname == bname ) return 0;
				else return +1;
			});
		}

		populateVoiceList();
		if (speechSynthesis.onvoiceschanged !== undefined) {
			speechSynthesis.onvoiceschanged = populateVoiceList;
		}
		function speak(){
			if (synth.speaking) {
				console.error('speechSynthesis.speaking');
				return;
			}
			if (inputTxt.value !== '') {
				var utterThis = new SpeechSynthesisUtterance(game4_answer_voice);
				utterThis.onend = function (event) {
					console.log('SpeechSynthesisUtterance.onend');
				}
				utterThis.onerror = function (event) {
					console.error('SpeechSynthesisUtterance.onerror');
				}

				utterThis.voice = voices[20];
				utterThis.pitch = 1;
				utterThis.rate = 0.7;
				synth.speak(utterThis);
			}
		}		

		$('#play').on( "click", function(e) {
			game4_answer_voice = game4Array[targetId].voice
			e.preventDefault();

			speak();

			$("input[type=text][name=username]").blur();
    });
    
    startGame();

};