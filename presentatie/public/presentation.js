window.onload = function() {
	console.log('starting...');
	
	if ("ontouchstart" in document.documentElement) { 
		// evil piece of HTML code in JS...
        document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
	}
    var slides = document.querySelectorAll(".slide");
    console.log("num of slides: ", slides.length);
    var c = slides.length * 200;
    for (var i = 0; i < slides.length; i++) {
        var slide = slides[i];
        var a = i+1 * (2 * Math.PI) / slides.length;
        var x = Math.sin(a) * c;
        var y = Math.cos(a) * c;
        var z = 1000;

        slide.dataset.x = x;
        slide.dataset.y = y;
        slide.dataset.z = z;

        //slide.dataset.rotateY = i * (360 / slides.length);
        //slide.dataset.rotateX = i * (360 / slides.length / 4);
        var deg = -(a / (Math.PI * 2)) * 360;
        slide.dataset.rotateZ = deg;
        slide.dataset.scale = 1;
        slide.id = "s"+i;
    };
    impress().init();
}

/*
    
    The `impress()` function also gives you access to the API that controls the presentation.
    
    Just store the result of the call:
    
        var api = impress();
    
    and you will get three functions you can call:
    
        `api.init()` - initializes the presentation,
        `api.next()` - moves to next step of the presentation,
        `api.prev()` - moves to previous step of the presentation,
        `api.goto( idx | id | element, [duration] )` - moves the presentation to the step given by its index number
                id or the DOM element; second parameter can be used to define duration of the transition in ms,
                but it's optional - if not provided default transition duration for the presentation will be used.
    
    You can also simply call `impress()` again to get the API, so `impress().next()` is also allowed.
    Don't worry, it wont initialize the presentation again.
    
    For some example uses of this API check the last part of the source of impress.js where the API
    is used in event handlers.
    
*/