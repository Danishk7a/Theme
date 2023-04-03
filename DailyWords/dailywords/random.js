
document.getElementById('btn').addEventListener("click", change);
addEventListener("keydown", e=>{
    console.log(e);
    if(e.keyCode === 32){

        change();
    }


})


// document.getElementById('playsound').addEventListener("click" , audio.play);









function change(){

    let index = Math.floor(Math.random()*178189);
    let num = index;

    const xhr2 = new XMLHttpRequest();

    xhr2.open("GET" , "./all.json");

    xhr2.onload = () => {

        if(xhr2.status === 200){

            const myword = JSON.parse(xhr2.responseText);
            
            document.getElementById('word').innerHTML = myword[index];
       
       
       
       
             //  second request



             const xhr3 = new XMLHttpRequest();


             // let myword  =["bomb", "famous" , "occupied" , "dry" , "handsome" , "sexy"] ;
             // let index = 3;
             
             
             xhr3.open("GET" ,`https://api.dictionaryapi.dev/api/v2/entries/en/${myword[index]}`);
             
             xhr3.onload = () =>{
             
                 if(xhr3.status === 200){
             
                     
                     const mydesc = JSON.parse(xhr3.responseText);
             
                             
                     document.getElementById('word').innerHTML = mydesc[0].word;
                     
                     
                     console.log(mydesc[0].meanings[0].definitions[0].definition);
                    console.log(mydesc[0].meanings[0].definitions[0].example);
                    console.log(mydesc[0].phonetics[0].audio)


                    let soundaddr = mydesc[0].phonetics[0].audio;
                    

                    document.getElementById("playsound").addEventListener('click', ()=>{

                        let audio  = new Audio();
                        audio.src = soundaddr;
                        audio.play();

                    })

                        
                    
                   
                    
                    




    
                          
                        
    
        


                         let defination = mydesc[0].meanings[0].definitions[0].definition;
                         let example = mydesc[0].meanings[0].definitions[0].example;

                         
             
                     document.getElementById('defination').innerHTML = defination;
                     document.getElementById('example').innerHTML = example;

                     
              
             
             
                 }
             }



                   
             
             
             xhr3.send();
       
       
           
       
 
       
       
        }





               














        }

        

    
    
    xhr2.send();

   
    



}




