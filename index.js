


    document.addEventListener('DOMContentLoaded',function(){

        let dice1 = '';
        let dice2 = '';
        

        let random1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1 ;
        let random2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1 ;

        for (let i = 1; i <= random1; i++) {
            dice1 += `<span style=" color:black ;"><i class="bi bi-circle-fill"></i></span>`;
        }
        for (let i = 1; i <= random2; i++) {
            dice2 += `<span style=" color:black ;"><i class="bi bi-circle-fill"></i></span>`;
        }
        document.querySelector('#div-1').innerHTML = dice1;
        document.querySelector('#div-2').innerHTML = dice2;
        
        let winner = '' ;
        random1>random2 ? winner="player one wins" : winner="player two wins" ;
        if(random1==random2) {
            winner = "its a tie" ;
        }
        document.querySelector('.winner').innerHTML = winner ;

        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            location.reload(); 
        })
    });


