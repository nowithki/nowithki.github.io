window.onload = () =>{
    //mendefinisikan ctx
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')

    //mendefinisikan arena
    const arena = 500

    //mendefinisikan score
    let score = 0
    let dscore = document.getElementsByClassName('score')

    //mendefinisikan lebar animasi
    let box = 20

    //membuat snake
    let snake = []
    snake[0] = {
        x: 240,
        y: 240
    }

    //food
    let food = {
        x: Math.floor(Math.random()*(arena/box))*box,
        y: Math.floor(Math.random()*(arena/box))*box
    }

    const checkFood = (i) =>{
        if(food.x === snake[i].x && food.y == snake[i].y){
            food = {
                x: Math.floor(Math.random()*(arena/box))*box,
                y: Math.floor(Math.random()*(arena/box))*box
            }    
            checkFood(i)
        }
    }

    //collision
    const collision = (head, array) => {
        for(let i=0; i<array.length; i++){
            if(head.x === array[i].x && head.y === array[i].y){
                return true
            }
        }
        return false
    }
    
    //mendefinisikan direction
    let d
    const direction = (e) =>{
        if(e.keyCode === 37 && d !== "RIGHT"){
            d="LEFT"
        }else if(e.keyCode === 38 && d !== "DOWN"){
            d="UP"
        }else if(e.keyCode === 39 && d !== "LEFT"){
            d="RIGHT"
        }else if(e.keyCode === 40 && d !== "UP"){
            d="DOWN"
        }
    }
    document.addEventListener("keydown", direction)

    const draw = () =>{

        ctx.clearRect(0, 0, arena, arena)

        for(let i=0; i<snake.length; i++){
            ctx.fillStyle= "white"
            ctx.fillRect(snake[i].x, snake[i].y, box, box)

            ctx.strokeStyle= "black"
            ctx.strokeRect(snake[i].x, snake[i].y, box, box)
        }

        ctx.fillStyle="yellow"
        ctx.fillRect(food.x, food.y, box, box)

        let snakeX = snake[0].x
        let snakeY = snake[0].y
        if(d === "LEFT") snakeX -= box
        if(d === "UP") snakeY -= box
        if(d === "RIGHT") snakeX += box
        if(d === "DOWN") snakeY += box

        if(snakeX === food.x && snakeY === food.y){
            score++
            document.getElementsByClassName('score')[0].innerHTML = score
            food = {
                x: Math.floor(Math.random()*(arena/box))*box,
                y: Math.floor(Math.random()*(arena/box))*box
            }
        }else{
            snake.pop()
        }

        let newHead = {
            x: snakeX,
            y: snakeY
        }

        //game over
        if(snakeX<0 || snakeX>=arena || snakeY<0 || snakeY>=arena || collision(newHead, snake)){
            clearInterval(game)
            document.getElementById('game-over').style='display: block'
            if(localStorage.getItem("score")===null){
                localStorage.setItem("score", score)
            }else{
                if(localStorage.getItem("score") < score)
                localStorage.setItem("score", score)
            }
        }

        snake.unshift(newHead)

        for(let i=0; i<snake.length; i++){
            checkFood(i)
        }
        
    }

    document.getElementsByClassName('bestSc')[0].innerHTML = localStorage.getItem('score') === null ? 0 : localStorage.getItem('score')

    let game = setInterval(draw, 100)

    let play_again_btn = document.getElementById('btn-playagain');
    play_again_btn.onclick = () => {
        document.location.reload(true)

    }
}