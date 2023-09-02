function get(){
    alert("clicked");
}

function work(){
   alert("working");
}

const dot = document.querySelectorAll('.dot');

// dot.addEventListener('click',()=>{
//     console.log('clicked');
// })

dot.forEach((dot)=>{
    dot.addEventListener('click',()=>{
        console.log('clicked');
    })
});

// dot.forEach((e)=>{
//         e.addEventListener('mouseover',()=>{
//             alert('all set');
//         })
// });


//To get an innerhtml with same name
console.log([...dot].map(e=>e.innerText));