
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let name1 = 'fk',income = 5000;
 


//timer
btn1.addEventListener('click',()=>{
    function run(name,income){
        console.log('mara name '+name+' hai meri income '+income+'$ hai .');
    }

    let start = setInterval(run,200,name1,income)
    

    btn2.addEventListener('click',()=>{
        clearInterval(start)
    
    })
    
})
//bulb
btn3.addEventListener('click',()=>{
    function run(){
        document.body.classList.toggle('bulb')
    }

    let start = setInterval(run,200)
    

    btn4.addEventListener('click',()=>{
        clearInterval(start)
    
    })
    
})

//light
btn5.addEventListener('click',()=>{
    function run(){
document.body.classList.add('red')
}
let start = setTimeout(run,200)
btn6.addEventListener('click',()=>{
    document.body.classList.remove('red')
// clearTimeout(start)
})
})