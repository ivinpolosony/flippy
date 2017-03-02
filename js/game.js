var c = document.getElementById("gameUI");
var ctx = c.getContext("2d");
var elemLeft = c.offsetLeft,
    elemTop = c.offsetTop;
var elements = [];

	// Green background
	ctx.fillStyle = "#009933";
	ctx.fillRect(0, 0, 500, 500);

	// The middle line
	ctx.moveTo(0, 250);
	ctx.lineTo(500, 250);
	ctx.lineWidth = 3;
	ctx.strokeStyle = "#FFFFFF";
	ctx.stroke();

	// Top CoinTable
	var rectX = 120;
	var rectY = 30;
	var rectWidth = 280;
	var rectHeight = 50;
	var cornerRadius = 10;

	ctx.lineJoin = "round";
	ctx.fillStyle = "#996633";
	ctx.lineWidth = cornerRadius;
	ctx.strokeStyle = "#000000";
	ctx.strokeRect(rectX + (cornerRadius / 2), rectY + (cornerRadius / 2), rectWidth - cornerRadius, rectHeight - cornerRadius);
	ctx.fillRect(rectX + (cornerRadius / 2), rectY + (cornerRadius / 2), rectWidth - cornerRadius, rectHeight - cornerRadius)

	// Bott CoinTable
	var rectX = 120;
	var rectY = 400;
	var rectWidth = 280;
	var rectHeight = 50;
	var cornerRadius = 10;

	ctx.lineJoin = "round";
	ctx.fillStyle = "#996633";
	ctx.lineWidth = cornerRadius;
	ctx.strokeStyle = "#000000";
	ctx.strokeRect(rectX + (cornerRadius / 2), rectY + (cornerRadius / 2), rectWidth - cornerRadius, rectHeight - cornerRadius);
	ctx.fillRect(rectX + (cornerRadius / 2), rectY + (cornerRadius / 2), rectWidth - cornerRadius, rectHeight - cornerRadius)

	class Coin {
	  constructor(ctx, x, y) {
	    this.x = x;
	    this.y = y;
	    this.rad =10;
	    this.ctx = ctx;
	  }
	  draw(n) {
		 for(var i =0;i<n;i++){
	   	  this.ctx.beginPath();
	    	this.ctx.fillStyle = "#ffcc00";
	    	this.ctx.arc((this.x + (4*i*this.rad)), this.y, this.rad, 0, 2 * Math.PI);
	    	this.ctx.closePath();
	    	this.ctx.fill();
	   }
	  }
	}

	var coin = new Coin(ctx, 160,55);
	coin.draw(6);
	coin = new Coin(ctx, 160,425);
	coin.draw(6);

	// Green background
	//ctx.fillStyle = "#000000";
	//ctx.fillRect(410, 400, 50, 50);

	c.addEventListener('click', function(event) {
	 		var x = event.pageX - elemLeft,
	        y = event.pageY - elemTop;
	        elements.forEach(function(element) {
	        if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
	           PlaySound();
	        }
	    });
	});

	// Add element.
	elements.push({
	    cornerRadius: 10,
	    colour: '#000000',
	    width: 70,
	    height: 50,
	    top: 400,
	    left: 410
	});

	elements.forEach(function(element) {
	ctx.lineJoin = "round";
	 ctx.fillStyle = element.colour;
	ctx.lineWidth =  element.cornerRadius;
	ctx.strokeStyle = "#000000";
	ctx.strokeRect(element.left + (cornerRadius / 2),  element.top + (cornerRadius / 2),  element.width - cornerRadius, element.height - cornerRadius);
	ctx.fillRect(element.left  + (cornerRadius / 2),  element.top + (cornerRadius / 2),  element.width - cornerRadius, element.height - cornerRadius);
	 
	    ctx.fillStyle    = 'white';
			ctx.textBaseline = 'top';
			ctx.font         = 'bold 22px sans-serif';
			ctx.fillText('Play', 423, 411);

	});

	function PlaySound() {
          var sound = document.getElementById("audio");
          sound.play()
      }