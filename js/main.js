//temp fn
var tile = function(row, column, value) {
    this.row = row;
    this.column = column;
    this.value = value;
};

var player = function(name, score)
{
    this.name = name;
    this.score = score;
}

var players= new player(prompt("Enter your name?") , 0);

var board = function() {
    this.tiles = [];

    this.init = function() {
        for (i = 0; i < 7; i++) {
            for (j = 0; j < 7; j++) {

                var tileObject = new tile(i, j, '');
                this.tiles.push(tileObject);
            }
        }
    };
    //draw tiles
    this.drawBoard = function() {

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
//
        //for all 49 tiles
        for (i = 0; i < this.tiles.length; i++) {
            tileDiv = document.createElement('span');
            tileDiv.className = 'tile';
            tileDiv.setAttribute('id', 'tile['+i+']');
            tileDiv.setAttribute('data-row', this.tiles[i].row);
            tileDiv.setAttribute('data-col', this.tiles[i].column);
            tileDiv.setAttribute('data-value', this.tiles[i].value);

            rowDiv[row].appendChild(tileDiv);
            if (i == 6 || i == 13 || i == 20 || i == 27 || i == 34 || i == 41 || i == 49)
                row++;

            player.score = 0;
            //onclick event
            tileDiv.addEventListener('click', function(event) 
            {
                this.style.color = 'black';
                if (this.innerHTML == 'B') 
                {
                    alert("Game Over");

                }
                if (this.innerHTML !== 'B') 
                {
                    
                    players.score += parseInt(10);
                    document.getElementsByClassName('score')[0].innerHTML = players.score;
                }
                if(players.score == 390)
                    alert("You Win!");

            });

        }

        for (i = 0; i < 7; i++) {
            //do
            document.body.appendChild(rowDiv[i]);
            boardDiv.appendChild(rowDiv[i]);
        }
        //do
        document.body.appendChild(boardDiv);

    }; //end drawBoard



    //creating random bombs
    this.randArr = [];

    this.bombsDraw = function() {

        //ADDING 0 EVERYWHERE
        for(var i=0;i<this.tiles.length;i++)
            {
                document.getElementById('tile['+(i)+']').innerHTML = 0;
            }
        //adding bombs
        for (var i = 0; i < 10; i++) {
            var randomNo = rand(48);
            document.getElementById('tile['+(randomNo)+']').innerHTML = 'B';
            this.randArr.push(randomNo);
        }



        for(var i=0;i<49;i++)
        {
            if(document.getElementById('tile['+i+']').innerHTML == 'B')
            {
                 var nearBy = [i+1,i+7,i+6,i+8,i-1,i-7,i-6,i-8];
                 var j = 0;
                 while(j < nearBy.length)
                 {
                    if(nearBy[j] > -1 && nearBy[j] < 49)
                    {
                        var nearByValue = document.getElementById('tile['+(nearBy[j])+']').innerHTML;
                        if(nearByValue !== 'B')
                        {
                            nearByValue = parseInt(nearByValue);
                            nearByValue ++;
                            document.getElementById('tile['+nearBy[j]+']').innerHTML = nearByValue;
                        }
                    }
                    j++;
                 }
            }
        }




      //  console.log(randomNo);
       
    }; //end bombs


}; //end board

  //scores
  scoreDiv = document.createElement('div');
  scoreDiv.className ='scores';
  scoreDiv.innerHTML='<span id="players" class="player"><p> Name:&nbsp&nbsp&nbsp ' + players.name +'<br/><b class="score"><p> Score:&nbsp&nbsp&nbsp</p>'+players.score+'';
  document.body.appendChild(scoreDiv);



function rand(max) {
    return (Math.floor(Math.random() * max) + 1);
}

//calling the main function
var myBoard = new board();
myBoard.init();
myBoard.drawBoard();
myBoard.bombsDraw();




/*

for(i=0;i<this.tiles.length;i++)
            {

                for(j=0;j<10;j++)
                {
                 //   if(this.tiles[i] !== this.randArr[j])
                      
                    if(this.tiles[i] === this.randArr[j])
                    {
                          document.getElementById('tile['+ (i+1) +']').innerHTML += 1;
                    }
                }   

            }


                loop->49;i
{
 
  var ngCell =[i-1,i+1,i+7.....]
  var j =0
  while(j<ngCell.length)
  {
    var ngCellValue = document.getElementById("tile["+ngCell[j]+"]").innerHTML;
    if(!ngCellValue==B)
    {
      ngCellValue = parseInt(ngCellValue);
      if(ngCell>-1)
      {
        ngCellValue++;
        document.getElementById("tile["+ngCell[j]+"]").innerHTML = ngCellValue;      
 
      }
    }
 
    j++
  }
*/