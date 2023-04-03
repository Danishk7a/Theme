

document.getElementById('btn').addEventListener("click", getdata);


function getdata(){

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://swapi.dev/api/people/1/");

xhr.onload = () =>{

    if(xhr.status === 200){

        const data = JSON.parse(xhr.responseText);
        
        document.getElementById('box').innerHTML = data.name + "<br>" + data.gender + data.height + "<br>" + data.mass;

    }
} 




xhr.send();

}