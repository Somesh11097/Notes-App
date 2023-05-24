const addTitle = document.getElementById("addTitle");

const addText = document.getElementById("addText");

const addNoteButton = document.getElementById("addNote");


//this id is been used to display the notes in the webpage entered by the user
const notesDiv = document.getElementById("notes");

let notes = [];

function addNotes(){
    // const title = addTitle.value;
    // const note = addText.value;
    if(addText.value === ""){
        alert("Enter a title to start with")
        return;
    }
    // console.log(note);

    const notesObj = {
        title: addTitle.value,
        text: addText.value,
    }
    notes.push(notesObj);
    showNotes();
}

function showNotes(){
    let notesHTML = "";
    for(let i = 0;i<notes.length; i++)
    notesHTML += `
                <div class="note">
                    <button class="deleteNote">Delete</button>
                    <div class="title">${notes[i].title === "" ? "Note" : notes[i].title }</div>
                    <div class="text">${notes[i].text }</div>
                </div>
    
    
    `
    console.log(notes);
    notesDiv.innerHTML = notesHTML;

}

addNoteButton.addEventListener("click", addNotes);