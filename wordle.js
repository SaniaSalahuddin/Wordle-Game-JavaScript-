var gameOver=false;
var row=0;
var column=0;
var width=5;
var height=6;
var word="SQUID";
window.onload=function(){
    startGame();
}
function startGame(){
    //setting up the board
    for(let r=0;r<height;r++){
        for(let c=0; c<width;c++){
            let tile=document.createElement('div');
            tile.id=r.toString()+"-"+c.toString();
            tile.innerText="";
            tile.classList.add('tile');
            document.getElementById('board').append(tile);

        }

    }
    //add event listener
    document.addEventListener('keyup',(e)=>{
        if(gameOver){
            return;
        }
   console.log(e.code, e.key, typeof(e.key));
    if(e.key === "Backspace")
    {
       
        if( column>0 && column<=width){
           column-=1; 
        }
        let currTile=document.getElementById(row.toString()+"-"+column.toString());
        currTile.innerText='';
    }
    else if(e.code ==="Enter"){
      
     update();
    
     column=0;
      row+=1;
    }    
   else if((e.key>='A' && e.key <='Z' )|| (e.key >='a' && e.key<='z')){
        if(column<width){
            let currTile=document.getElementById(row.toString()+"-"+column.toString());
            currTile.innerText=e.key;
            column+=1;
        }

    }
    
   
    if( row==height){
        gameOver=true;
        document.getElementById('word').innerText=`Word is ${word}`;
    }

    })
}
function update(){
    let correct=0;
    for(let c=0;c<width;c++){
        let currTile=document.getElementById(row.toString()+"-"+c.toString());
        let letter=currTile.innerText.toUpperCase();
        if(word[c]==letter){
            currTile.classList.add('correct')
            correct+=1;
        }
        else if(word.includes(letter)){
            currTile.classList.add('present');
        }
        else{
            currTile.classList.add('absent');
        }
      
    }
      if(correct==width){
            gameOver=true;
             alert("You guessed it! 🎉");
        }
}
