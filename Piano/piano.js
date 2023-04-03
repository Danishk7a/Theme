
// Keyboard events

addEventListener('keypress', (e)=>{
console.log(e);

if(e.keyCode === 122){
        
c.click();


    }
   
    
    if(e.keyCode === 115){


        csharp.click();
    }
    if(e.keyCode === 120){


        d.click();
    }
    
     if(e.keyCode === 100){


        dsharp.click();
    }

    if(e.keyCode === 99){


        en.click();
    }

    if(e.keyCode === 118){


        f.click();
    }
    if(e.keyCode === 103){


        fsharp.click();
    }

    if(e.keyCode === 98){


        g.click();
    }

    if(e.keyCode === 104){


        gsharp.click();
    }

    if(e.keyCode === 110){


        a.click();
    }

    if(e.keyCode === 106){


        asharp.click();
    }

    if(e.keyCode === 109){


        b.click();
    }
















})


// Play Audio Octave one

const c=document.getElementById('C');

c.addEventListener('click',()=>{


        let audio = new Audio();
        audio.src = "./piano-mp3/C4.mp3";
        audio.play();
        c.style.backgroundColor = "#00A5E0";
        c.style.height = "318px";

        

});


const csharp = document.getElementById('C#');
csharp.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/Db4.mp3";
    audio.play();
    csharp.style.backgroundColor = "#00A5E0";
  

});





const d= document.getElementById('D');
d.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/D4.mp3";
    audio.play();
    d.style.backgroundColor = "#00A5E0";
    d.style.height = "318px";
  

});


const dsharp = document.getElementById('D#'); 
dsharp.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/Eb4.mp3";
    audio.play();
    dsharp.style.backgroundColor = "#00A5E0";

});


const en = document.getElementById('E');

en.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/E4.mp3";
    audio.play();
    en.style.backgroundColor = "#00A5E0";
    en.style.height = "318px";

  

});

const f=document.getElementById('F');
f.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/F4.mp3";
    audio.play();
    f.style.backgroundColor = "#00A5E0";
    f.style.height = "318px";
  

});


const fsharp = document.getElementById('F#');
fsharp.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/Gb4.mp3";
    audio.play();
    fsharp.style.backgroundColor = "#00A5E0";
  

});


const g = document.getElementById('G');
g.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/G4.mp3";
    audio.play();
    g.style.backgroundColor = "#00A5E0";
    g.style.height = "318px";
  

});

const gsharp = document.getElementById('G#');
gsharp.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/Ab4.mp3";
    audio.play();
    gsharp.style.backgroundColor = "#00A5E0";

  

});



const a = document.getElementById('A');
a.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/A4.mp3";
    audio.play();
    a.style.backgroundColor = "#00A5E0";
    a.style.height = "318px";
  

});


const asharp = document.getElementById('A#');
asharp.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/Bb4.mp3";
    audio.play();
    asharp.style.backgroundColor = "#00A5E0";
  

});



const b = document.getElementById('B');

b.addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/B4.mp3";
    audio.play();
    b.style.backgroundColor = "#00A5E0";
    b.style.height = "318px";
  

});




addEventListener('keyup', (e)=>{


    a.style.backgroundColor = "white";
    a.style.height = "320px";
    b.style.backgroundColor = "white";
    b.style.height = "320px";
    c.style.backgroundColor = "white";
    c.style.height = "320px";
    d.style.backgroundColor = "white";
    d.style.height = "320px";
    en.style.backgroundColor = "white";
    en.style.height = "320px";
    f.style.backgroundColor = "white";
    f.style.height = "320px";
    g.style.backgroundColor = "white";
    g.style.height = "320px";
    asharp.style.backgroundColor = "#1E1E1E";
    csharp.style.backgroundColor = "#1E1E1E";
    dsharp.style.backgroundColor = "#1E1E1E";
    fsharp.style.backgroundColor = "#1E1E1E";
    gsharp.style.backgroundColor = "#1E1E1E";
   });





   addEventListener('mouseup', (e)=>{


    a.style.backgroundColor = "white";
    a.style.height = "320px";
    b.style.backgroundColor = "white";
    b.style.height = "320px";
    c.style.backgroundColor = "white";
    c.style.height = "320px";
    d.style.backgroundColor = "white";
    d.style.height = "320px";
    en.style.backgroundColor = "white";
    en.style.height = "320px";
    f.style.backgroundColor = "white";
    f.style.height = "320px";
    g.style.backgroundColor = "white";
    g.style.height = "320px";
    asharp.style.backgroundColor = "#1E1E1E";
    csharp.style.backgroundColor = "#1E1E1E";
    dsharp.style.backgroundColor = "#1E1E1E";
    fsharp.style.backgroundColor = "#1E1E1E";
    gsharp.style.backgroundColor = "#1E1E1E";
   })







// Octave second


document.getElementById('C2').addEventListener('click',()=>{


    let audio = new Audio();
    audio.src = "./piano-mp3/C5.mp3";
    audio.play();

});


document.getElementById('C#2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/Db5.mp3";
audio.play();


});





document.getElementById('D2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/D5.mp3";
audio.play();


});


document.getElementById('D#2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/Eb5.mp3";
audio.play();


});


document.getElementById('E2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/E5.mp3";
audio.play();


});

document.getElementById('F2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/F5.mp3";
audio.play();


});


document.getElementById('F#2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/Gb5.mp3";
audio.play();


});


document.getElementById('G2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/G5.mp3";
audio.play();


});

document.getElementById('G#2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/Ab5.mp3";
audio.play();


});



document.getElementById('A2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/A5.mp3";
audio.play();


});


document.getElementById('A#2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/Bb5.mp3";
audio.play();


});



document.getElementById('B2').addEventListener('click',()=>{


let audio = new Audio();
audio.src = "./piano-mp3/B5.mp3";
audio.play();


});


// let whiteKeys = document.querySelectorAll(".white-keys");
// let blackKeys = document.querySelectorAll(".black-keys"); 

