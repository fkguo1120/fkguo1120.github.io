$(function(){var tallbox=$('.tallbox');var tallbox2=$('.tallbox2');function showgame(){$('.tallbox .col-4').click(function(){$(this).toggleClass('active')});$('.start1').click(function(){$('.answer1').html('');if($('.tallbox .col-4').eq(0).hasClass("active")&&$('.tallbox .col-4').eq(1).hasClass("active")&&$('.tallbox .col-4').eq(2).hasClass("active")){$('.answer1').append("<h3>John is the tallest among those three boys.</h3>")
$('.answer1').append("<h5>John is taller than Frank.</h5>")
$('.answer1').append("<h5>Frank is taller than Allen.</h5>")
$('.answer1').append("<h5>John is taller than Allen.</h5>")}else if($('.tallbox .col-4').eq(0).hasClass("active")&&$('.tallbox .col-4').eq(1).hasClass("active")){$('.answer1').append("<h3>John is taller than Allen.</h3>")}else if($('.tallbox .col-4').eq(1).hasClass("active")&&$('.tallbox .col-4').eq(2).hasClass("active")){$('.answer1').append("<h3>Frank is taller than Allen.</h3>")}else if($('.tallbox .col-4').eq(0).hasClass("active")&&$('.tallbox .col-4').eq(2).hasClass("active")){$('.answer1').append("<h3>John is taller than Frank.</h3>")}else if($('.tallbox .col-4').eq(0).hasClass("active")||$('.tallbox .col-4').eq(1).hasClass("active")||$('.tallbox .col-4').eq(2).hasClass("active")){$('.answer1').append("<h3>I'm a tall boy!!!</h3>")}else{$('.answer1').append("")}});$('.tallbox2 .col-4').click(function(){$(this).toggleClass('active')});$('.start2').click(function(){$('.answer2').html('');if($('.tallbox2 .col-4').eq(0).hasClass("active")&&$('.tallbox2 .col-4').eq(1).hasClass("active")&&$('.tallbox2 .col-4').eq(2).hasClass("active")){$('.answer2').append("<h3>The cake is the most expensive among those foods.</h3>")
$('.answer2').append("<h5>The cake is more expensive than the bread.</h5>")
$('.answer2').append("<h5>The cake is more expensive than the fruit pie.</h5>")
$('.answer2').append("<h5>The fruit pie is more expensive than the bread.</h5>")}else if($('.tallbox2 .col-4').eq(0).hasClass("active")&&$('.tallbox2 .col-4').eq(1).hasClass("active")){$('.answer2').append("<h3>The cake is more expensive than the bread.</h3>")}else if($('.tallbox2 .col-4').eq(1).hasClass("active")&&$('.tallbox2 .col-4').eq(2).hasClass("active")){$('.answer2').append("<h3>The cake is more expensive than the fruit pie.</h3>")}else if($('.tallbox2 .col-4').eq(0).hasClass("active")&&$('.tallbox2 .col-4').eq(2).hasClass("active")){$('.answer2').append("<h3>The fruit pie is more expensive than the bread.</h3>")}else if($('.tallbox2 .col-4').eq(0).hasClass("active")||$('.tallbox2 .col-4').eq(1).hasClass("active")||$('.tallbox2 .col-4').eq(2).hasClass("active")){$('.answer2').append("<h3>It's a expensive food!!!</h3>")}else{$('.answer2').append("")}})}
showgame()})