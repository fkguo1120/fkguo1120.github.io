
var testArray = [
	{
		id:1,
		question: 'When John was an elementary student, John did not like Mary because she always had diverse colors in her hair.',
		img: 'images/01.jpg',
		answers: [
			{
				id: 'A',
				answer:"In consequence, John was Mary’s good friend in the elementary school.",
				isright: false
			},
			{
				id: 'B',
				answer:'In consequence, John did not lend Mary money needed for her to buy food.',
				isright: true
			},
			{
				id: 'C',
				answer:'In consequence, John hoped that Mary could help him make colors in his hair.',
				isright: false
			},
			{
				id: 'D',
				answer:'.....',
				isright: false
			}
		],
		wordSupport:'elementary(adj): 初級的',
		support:'who 引導形容詞子句，其先行詞為 I，子句的動詞應依先行詞變化，所以用 am',
		translateSupport:'John還是小學生時，John不喜歡Mary，因為她的頭髮總是有三個顏色。'
	},
	{
		id:2,
		question: 'Mary has not eaten any food for two days but she is very pleased and extremely happy to take part in extracurricular activities.',
		img: 'images/02.jpg',
		answers: [
			{
				id: 'A',
				answer:'This is because Mary worries about the fact that food is too expensive.',
				isright: false
			},
			{
				id: 'B',
				answer:'This is because extracurricular activities can be replaced with food.',
				isright: false
			},
			{
				id: 'C',
				answer:'This is because Mary really enjoys the time spent in the extracurricular activities in which she participates.',
				isright: true
			},
			{
				id: 'D',
				answer:'.....',
				isright: false
			}
		],
		wordSupport:'extremely(adv): 非常地',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'Mary已經兩天沒吃任何食物，但她非常高興和樂意參加課外活動'
	},
	{
		id:3,
		question: 'It took a lot of time for Mary to take part in extracurricular activities so she could not devote herself to doing great works for her PhD study.',
		img: 'images/03.jpg',
		answers: [
			{
				id: 'A',
				answer:'Hence, Mary cannot complete her PhD study as soon as possible.',
				isright: true
			},
			{
				id: 'B',
				answer:'Hence, Mary is not interested in her extracurricular activities.',
				isright: false
			},
			{
				id: 'C',
				answer:'Hence, Mary is motivated to complete her PhD study.',
				isright: false
			},
			{
				id: 'D',
				answer:'.....',
				isright: false
			}
		],
		wordSupport:'devote(v): 奉獻',
		support:'who 引導形容詞子句，其先行詞為 I，子句的動詞應依先行詞變化，所以用 am',
		translateSupport:'Mary花了很多時間參加課外活動，所以他不能全心投入到他的博士研究中。'
	},
	{
		id:4,
		question: 'Mary’s parents are very unsatisfied with her performance and decide to stop financial support for her completely.',
		img: 'images/04.jpg',
		answers: [
			{
				id: 'A',
				answer:'This is due to the fact that Mary’s parents become poor so they do not have money.',
				isright: false
			},
			{
				id: 'B',
				answer:'This is due to the fact that her father and mother want to change her wrong attitudes toward her PhD.',
				isright: true
			},
			{
				id: 'C',
				answer:'This is due to the fact that Mary’s parents do not care about her financial support at all.',
				isright: false
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'unsatisfied(adj): 不滿意的',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'Mary的父母對他的表現非常不滿意並決定完全停止對她的經濟支持。'
	},
	{
		id:5,
		question: 'Mary does not study very hard but she can obtain high scores from all tests that she has taken; therefore, all students do not want to make friends with her.',
		img: 'images/05.jpg',
		answers: [
			{
				id: 'A',
				answer:'This is owing to the fact that the tests are too simple to all students.',
				isright: false
			},
			{
				id: 'B',
				answer:'This is owing to the fact that making friends is not essential to Mary.',
				isright: false
			},
			{
				id: 'C',
				answer:'This is owing to the fact that all students are very jealous of her intelligence.',
				isright: true
			},
			{
				id: 'D',
				answer:'.....',
				isright: false
			}
		],
		wordSupport:'therefore(adv): 因此',
		support:'who 引導形容詞子句，其先行詞為 I，子句的動詞應依先行詞變化，所以用 am',
		translateSupport:'Mary不是很努力學習，但她可以從所參加的考試中獲得最高分。因此，所有學生都不想要和他做朋友。'
	},
	{
		id:6,
		question: 'Mary is not lonely at all due to the fact that she enjoys reading, which has been her favorite hobby for ten years.',
		img: 'images/06.jpg',
		answers: [
			{
				id: 'A',
				answer:'In other words, Mary used to have a book or magazine with her.',
				isright: false
			},
			{
				id: 'B',
				answer:'In other words, Mary is used to having a book or magazine with her.',
				isright: true
			},
			{
				id: 'C',
				answer:'In other words, Mary get used to having a book or magazine with her.',
				isright: false
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'lonely(adj): 孤單的',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'Mary並不寂寞，因為她喜歡讀書，這是他十年來最喜歡的愛好。'
	},
	{
		id:7,
		question: 'In addition to reading, Mary’s hobbies include attending the church and playing a variety of digital games with her cousins.',
		img: 'images/07.jpg',
		answers: [
			{
				id: 'A',
				answer:'That is to say, Mary has several hobbies, such as reading and digital games.',
				isright: true
			},
			{
				id: 'B',
				answer:'That is to say, Mary has several hobbies, apart from attending the church.',
				isright: false
			},
			{
				id: 'C',
				answer:'That is to say, Mary has several hobbies, except playing digital games.',
				isright: false
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'hobbies(n): 興趣',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'除了閱讀，Mary的嗜好包括參加教堂和與堂兄弟一起玩各種數位遊戲。'
	},
	{
		id:8,
		question: 'Digital games make Mary happier and help her not only have creative imagination but also develop critical thinking.',
		img: 'images/08.jpg',
		answers: [
			{
				id: 'A',
				answer:'As a result, digital games are useful vehicles to develop critical thinking only.',
				isright: false
			},
			{
				id: 'B',
				answer:'As a results, Mary can get multiple benefits from digital games.',
				isright: true
			},
			{
				id: 'C',
				answer:'As a results, digital games are useful to neither creative imagination nor critical thinking.',
				isright: false
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'creative(adj): 有創造力的',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'數位遊戲讓Mary更開心且幫助他不只有創造性的想像力而且還能培養批判性的思維。'
	},
	{
		id:8,
		question: 'Digital games make Mary happier and help her not only have creative imagination but also develop critical thinking.',
		img: 'images/08.jpg',
		answers: [
			{
				id: 'A',
				answer:'As a result, digital games are useful vehicles to develop critical thinking only.',
				isright: false
			},
			{
				id: 'B',
				answer:'As a results, Mary can get multiple benefits from digital games.',
				isright: true
			},
			{
				id: 'C',
				answer:'As a results, digital games are useful to neither creative imagination nor critical thinking.',
				isright: false
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'creative(adj): 有創造力的',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'數位遊戲讓Mary更開心且幫助他不只有創造性的想像力而且還能培養批判性的思維。'
	},
	{
		id:9,
		question: 'Mary used her credit card to purchase a lot of clothes that she did not need after successfully passing the examination.',
		img: 'images/09.jpg',
		answers: [
			{
				id: 'A',
				answer:'Thereafter, Mary needed to wash some clothes in the near future.',
				isright: false
			},
			{
				id: 'B',
				answer:'Thereafter, Mary did not have enough money to pay the credit card bill at all.',
				isright: true
			},
			{
				id: 'C',
				answer:'Thereafter, Mary might fail the examination in the near future.',
				isright: false
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'credit card(n): 信用卡',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'在Mary成功通過考試後，用信用卡買很多她不需要的衣服。'
	},
	{
		id:10,
		question: 'Mary did a stupid thing because she sold her clothes in low prices that did not cover original costs.',
		img: 'images/10.jpg',
		answers: [
			{
				id: 'A',
				answer:'In the end, she could exhaust her financial resources.',
				isright: true
			},
			{
				id: 'B',
				answer:'In the end, her clothes were ragged and unwashed.',
				isright: false
			},
			{
				id: 'C',
				answer:'In the end, her clothes were too expensive to be sold out.',
				isright: false
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'original(adj): 原始的',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'Mary做了一件蠢事，因為她以低於成本的價格賣出她的衣服。'
	},
	{
		id:11,
		question: 'Mary occasionally goes to watch free movies in theaters while John sometimes plays basketball with his classmates but they never borrow books from a library.',
		img: 'images/11.jpg',
		answers: [
			{
				id: 'A',
				answer:'In other words, watching movies is too expensive to John.',
				isright: false
			},
			{
				id: 'B',
				answer:'In other words, the library is their disfavored place.',
				isright: true
			},
			{
				id: 'C',
				answer:'In other words, Mary does not like her classmates.',
				isright: false
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'occasionally(adv): 偶爾',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'Mary 偶爾會去電影院看免費電影，而John有時會跟他的同學一起打籃球，但他們從沒從圖書館借書。'
	},
	{
		id:12,
		question: 'We cannot overemphasize the fact that the longer you stayed in a hospital, the more the hospital could charge you and your insurance and vice versa.',
		img: 'images/12.jpg',
		answers: [
			{
				id: 'A',
				answer:'Thus, we can ignore how long we stay in a hospital.',
				isright: false
			},
			{
				id: 'B',
				answer:'Thus, it takes a lot of money for us to stay in a hospital for a long period.',
				isright: true
			},
			{
				id: 'C',
				answer:'Thus, your insurance can pay less money if you stay in a hospital for a long period.',
				isright: false
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'charge(n): 費用',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'在怎麼強調醫院住的時間越長，醫院就會向你和你的保險收越多的費用也不為過，反之亦然。'
	},
	{
		id:13,
		question: 'It is universally acknowledged that Mary can achieve her targets because her parents provide a lot of financial support and offer constructive advice.',
		img: 'images/13.jpg',
		answers: [
			{
				id: 'A',
				answer:'Only few people know that Mary has remarkable parents.',
				isright: false
			},
			{
				id: 'B',
				answer:'A few people know that Mary has remarkable parents.',
				isright: false
			},
			{
				id: 'C',
				answer:'A lot of people know that Mary has remarkable parents.',
				isright: true
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'targets(n): 目標',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'眾所皆知，Mary可以實現你的目標，因為她的父母提供大量的經濟支持並提供建設性的建議。'
	},
	{
		id:14,
		question: 'Although I like milk, there is no way of convincing Mary to drink milk so that I make hot chocolate for her breakfast every single day, instead of milk.',
		img: 'images/14.jpg',
		answers: [
			{
				id: 'A',
				answer:'In other words, finding a way to persuade Mary to drink milk is needed.',
				isright: false
			},
			{
				id: 'B',
				answer:'In other words, Mary preferred hot chocolate to milk.',
				isright: true
			},
			{
				id: 'C',
				answer:'In other words, it is an easy task to make Mary drink a lot of milk.',
				isright: false
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'chocolate(n): 巧克力',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'雖然我喜歡牛奶，但是沒有辦法說服Mary喝牛奶，以至於我每天都要為他早餐製作熱巧克力而不是牛奶。'
	},
	{
		id:15,
		question: 'Mary’s success brings home to people the fact that the future of work lies in learning, working, and playing concurrently so we cannot ignore any aspect.',
		img: 'images/15.jpg',
		answers: [
			{
				id: 'A',
				answer:'In other words, the future of work should allow staff to work at home.',
				isright: false
			},
			{
				id: 'B',
				answer:'In other words, home is the best place for learning, working and playing.',
				isright: false
			},
			{
				id: 'C',
				answer:'In other words, learning, working, and playing will take place simultaneously.',
				isright: true
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'concurrently(adv): 同時地',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'Mary的成功讓大家了解：工作的未來在於學習、工作和娛樂兼顧，所以我們不能忽視任何方面。'
	},
	{
		id:15,
		question: 'Mary’s success brings home to people the fact that the future of work lies in learning, working, and playing concurrently so we cannot ignore any aspect.',
		img: 'images/15.jpg',
		answers: [
			{
				id: 'A',
				answer:'In other words, the future of work should allow staff to work at home.',
				isright: false
			},
			{
				id: 'B',
				answer:'In other words, home is the best place for learning, working and playing.',
				isright: false
			},
			{
				id: 'C',
				answer:'In other words, learning, working, and playing will take place simultaneously.',
				isright: true
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'concurrently(adv): 同時地',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'Mary的成功讓大家了解：工作的未來在於學習、工作和娛樂兼顧，所以我們不能忽視任何方面。'
	},
	{
		id:16,
		question: 'It goes without saying that Mary may be the laziest person that John has ever met because she always likes lying in bed and watching television.',
		img: 'images/16.jpg',
		answers: [
			{
				id: 'A',
				answer:'John is not sure whether Mary is lazier than most people.',
				isright: false
			},
			{
				id: 'B',
				answer:'Mary prefers to watching television rather than lying bed.',
				isright: false
			},
			{
				id: 'C',
				answer:'It is needless to say that most people are not as lazy as Mary.',
				isright: true
			},
			{
				id: 'D',
				answer:'....',
				isright: false
			}
		],
		wordSupport:'laziest(adj): 最懶散的',
		support:'satisfying,現在分詞表示主動的意義，通常指某物使某人產生某種感覺。',
		translateSupport:'不言而喻Mary可能是John見過最懶的人，因為她總是喜歡躺在床上看電視。'
	},
]


