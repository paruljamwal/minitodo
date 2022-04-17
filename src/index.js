import "./index.css";

import poster from "./poster.jpg"

const add = document.querySelector("#notesbtn");

add.addEventListener('click', () => {
  
    addnewnote()
})

// const randColor = () =>  {
//     return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
// }




const addnewnote = (text = "") => {
    const body = document.querySelector('body');
    body.src=poster;
    const root = document.querySelector('#root');
    const note = document.createElement('div');
    note.classList.add("note");
    const data = `
    <div class="operation">
        <button id="delete"><i class="fa-solid fa-trash-can"></i>Delete</button>
    </div>
    <div class="main"></div>
<textarea name="" id="textbox" cols="30" rows="10"></textarea>

    `;

    note.insertAdjacentHTML("afterbegin", data)

    //get reference

    const drop = note.querySelector("#delete");
    const main = note.querySelector("#main");
    const textarea = note.querySelector("#textarea");


    //drop

    drop.addEventListener('click', () => {
        note.remove();
    })


    root.append(note)


}