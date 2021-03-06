$(document).ready(function(){
	var pages = {
		'macbook' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div><h1>Coming Soon!</h1></div></div>',
		'phone' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div><h1>Coming Soon!</h1></div></div>',
		'headphones' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div id="music-player"><iframe scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/55408751&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div></div>',
		'coffee' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div id="coffee-text-body"><pre>private class JavaJoke extends CSPun {\n&nbsp;public static final String UNNECCESSARILY_VERBOSE_VARIABLE_DECLARATION_THAT_MAKES_ME_LOOK_LIKE_IM_YELLING = "sup";\n\n&nbsp;public static void main(String[] args){\n&nbsp;&nbsp;try {\n&nbsp;&nbsp;&nbsp;System.out.println("Insert Java joke here: ");\n&nbsp;&nbsp;&nbsp;Scanner inputScanner = new Scanner(System.in);\n\n&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;String joke = inputScanner.nextLine();\n&nbsp;&nbsp;&nbsp;System.out.println("haha");\n\n&nbsp;&nbsp;} catch (JokeNotFunnyException e) {\n&nbsp;&nbsp;&nbsp;System.err.println("...*facepalm* get out of here Kevin: " + e.dontGetMessage());\n&nbsp;&nbsp;}\n&nbsp;}\n}</pre></div></div>',
		'photo' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div><h1>Coming Soon!</h1></div></div>',
		'notebook' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div><h1>Coming Soon!</h1></div></div>'
	}
	$('#notebook-page').click(function(e){
		e.preventDefault();
		$('body').append(pages['notebook']);
	});

	$('#macbook-page').click(function(e){
		e.preventDefault();
		$.ajax({
			url : '/macbook.html',
			cache: false,
			success : function(html){
				$('body').append(html);
			},
			error : function(error){
				$('body').append('<div id="layover" class="main-content"><h1>Oops! Looks like something went wrong -- please try again!</h1><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div></div>');
			}
		});
	})

	$('#headphones').click(function(e){
		e.preventDefault();
		$.ajax({
			url : '/headphones.html',
			cache: false,
			success : function(html){
				$('body').append(html);
			},
			error : function(error){
				$('body').append('<div id="layover" class="main-content"><h1>Oops! Looks like something went wrong -- please try again!</h1><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div></div>');
			}
		});
		//$('body').append(pages['headphones']);
	})

	$('#phone').click(function(e){
		e.preventDefault();
		$.ajax({
			url : '/phone.html',
			cache : false,
			success : function(html){
				$('body').append(html);
			},
			error : function(error){
				$('body').append('<div id="layover" class="main-content"><h1>Oops! Looks like something went wrong -- please try again!</h1><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div></div>');
			}
		})
	})

	$('#coffee').click(function(e){
		e.preventDefault();
		$('body').append(pages['coffee']);
	})

	$('#photo').click(function(e){
		e.preventDefault();
		$('body').append(pages['photo']);
	});

	$('#exit-button').click(function(e){
		e.preventDefault();
		$('#layover').remove();
	})
});

function contact(e){
	e.preventDefault();
	$.ajax({
			url : '/phone.html',
			cache : false,
			success : function(html){
				$('#layover').remove();
				$('body').append(html);
			},
			error : function(error){
				$('#layover').remove();
				$('body').append('<div id="layover" class="main-content"><h1>Oops! Looks like something went wrong -- please try again!</h1><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div></div>');
			}
		})
}
