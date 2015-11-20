//temp fn
var tile = function(row, column, value) {
    this.row = row;
    this.column = column;
    this.value = value;
};

console.log("tilepart??");
var board = function() 
{
    this.tiles = [];


    this.init = function() 
    {


        for (i = 0; i < 7; i++) {
            for (j = 0; j < 7; j++) {

                var tileObject = new tile(i, j, '');
                this.tiles.push(tileObject);
                console.log("tilepart??");
            }
        }

    };
    //draw tiles
    this.drawBoard = function() 
    {

        var boardDiv = document.createElement('div');
        boardDiv.className = 'board';
        boardDiv.setAttribute('id', 'board');

        // creating seperate row 7*7
        var row = 0;
        var rowDiv = [];
        for (var i = 0; i < 7; i++) {
            rowDiv[i] = document.createElement('div');
            rowDiv[i].className = 'row';
        }

        //for all 49 tiles
        for (var i = 0; i < this.tiles.length; i++) {
            tileDiv = document.createElement('span');
            tileDiv.className = 'tile';
            tileDiv.setAttribute('id', 'tile[' + i + ']');
            tileDiv.setAttribute('data-row', this.tiles[i].row);
            tileDiv.setAttribute('data-col', this.tiles[i].col);

           
           // tileDiv.innerHTML = 'B';
            rowDiv[row].appendChild(tileDiv);
            if (i == 6 || i == 13 || i == 20 || i == 27 || i == 34 || i == 41 || i == 49)
                row++;


             // creating array for nearby tiles
            this.near = [];
            function nearValues()
            {
            	var mineCount = 0;
            
	           
	            if(this.tiles[i+7].value == 'B' && this.tiles[i+1].value == 'B' && this.tiles[i-1].value == 'B' && this.tiles[i-7].value == 'B')
	            {
	          		//this.tiles[i].value = '4';
	          		

	            }
	             /*
	            if(this.tiles[i+7].value == 'B' && this.tiles[i+1].value == 'B' && this.tiles[i-1].value == 'B' && this.tiles[i-7].value == 'B')
	            {
	            this.tiles[i].value = '3';
	            }
	            if(this.tiles[i+7].value == 'B' && this.tiles[i+1].value == 'B' && this.tiles[i-1].value == 'B' && this.tiles[i-7].value == 'B')
	            {
	            this.tiles[i].value = '2';
	            }
	            if(this.tiles[i+7].value == 'B' && this.tiles[i+1].value == 'B' && this.tiles[i-1].value == 'B' && this.tiles[i-7].value == 'B')
	            {
	            this.tiles[i].value = '1';
	            }
	            */

      		}
            //onclick event
            tileDiv.addEventListener('click', function(event) {
            	var showTiles = document.getElementsByClassName("show");

            	if(this.tiles[i].value == 'B')
            	{
            		alert("Game Over");
            		//show all
            	}
				this.querySelector(".number").classList.add("show");
				this.querySelector(".suit").classList.add("show");

            });

            console.log("drawpart");
        }


        for (i = 0; i < 7; i++) {
            //do
            document.body.appendChild(rowDiv[i]);
            boardDiv.appendChild(rowDiv[i]);
        }
        //do
        document.body.appendChild(boardDiv);

    };//end drawBoard

    //creating random bombs
    this.bombs = function() 
    {
    	
    	bombDiv = document.createElement('div');
        bombDiv.className = 'card';
        
        for (var k = 0; k < 10; k++) 
        {
            var rand = function(max) 
            {
              return (Math.floor(Math.random() * max) + 1);
            };
            tileDiv.innerHTML = 'B';
	        this.tiles[rand(49)].value = tileDiv;
            console.log(this.tiles[rand(49)].value);
            console.log(rand(49));
         
            document.body.appendChild(tileDiv);
        }
			
        /* avoiding duplicates bomb position
			this.bombs = [[]];
			while (this.bombs.length < 7)
			{
				var r = Math.floor(Math.random() * 7) + 1;
				var c = Math.floor(Math.random() * 7) + 1;
				for(i = 0; i <this.bombs.length; i++)
				{
				
				}
			}

        */

    };//end bombs
     	

};//end board




var myBoard = new board();
myBoard.init();
myBoard.drawBoard();
myBoard.bombs();