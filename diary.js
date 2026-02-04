const dateInput = document.getElementById("date");
const titleInput = document.getElementById("title");
const textInput = document.getElementById("input");
const saveBtn = document.getElementById("button");

//Load entry when data changes

dateInput.addEventListener("change", () => {
    const selectedDate = dateInput.value;
    if(!selectedDate) return;

    const savedEntry = localStorage.getItem(selectedDate);

    if(savedEntry){
        const entryData = JSON.parse(savedEntry);
        titleInput.value = entryData.title;
        textInput.value = entryData.text;
    }
    else {
        titleInput.value = "" ;
        textInput.value = "";
    }


}
);


//save entry

saveBtn.addEventListener("click",() =>{
    const selectedDate = dateInput.value;

    if(!selectedDate){
        alert("Please select a date first")
        return;
    }

    const entryData = {
        title:titleInput.value,
        text:textInput.value
    };
    localStorage.setItem(selectedDate, JSON.stringify(entryData));
    alert("Diary entry saved!")

});


