// drawings

  function drawings(current) {
	var imagesNumber = 18;
      
    if (current < 1) {
      current = imagesNumber;
    }
      
    if (current > imagesNumber) {
      current = 1;
    }
      
    document.getElementById("prevnext").innerHTML = '<a class="prev">prev</a> | ' + current + '/' + imagesNumber + ' | <a class="next">next</a>';

	for (i = 1; i <= imagesNumber; i++) {
		if (i == current) {
			document.getElementById("img" + current).style.display = "block";
		} else {
			document.getElementById("img" + i).style.display = "none";
		}
	}
      
    $('a.prev').click(function () {
      drawings(current - 1);
    });
      
    $('a.next').click(function () {
      drawings(current + 1);
    });
      
    function leftArrowPressed() {
      drawings(current - 1);
    }
 
    function rightArrowPressed() {
      drawings(current + 1);
    }
 
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
      }
    };
      
  }


// black eye

  function blackeye(current) {
	var imagesNumber = 17;
      
    if (current < 1) {
      current = imagesNumber;
    }
      
    if (current > imagesNumber) {
      current = 1;
    }
      
    document.getElementById("prevnext").innerHTML = '<a class="prev">prev</a> | ' + current + '/' + imagesNumber + ' | <a class="next">next</a>';

	for (i = 1; i <= imagesNumber; i++) {
		if (i == current) {
			document.getElementById("img" + current).style.display = "block";
		} else {
			document.getElementById("img" + i).style.display = "none";
		}
	}
      
    $('a.prev').click(function () {
      blackeye(current - 1);
    });
      
    $('a.next').click(function () {
      blackeye(current + 1);
    });
      
    function leftArrowPressed() {
      blackeye(current - 1);
    }
 
    function rightArrowPressed() {
      blackeye(current + 1);
    }
 
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
      }
    };
      
  }