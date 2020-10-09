const input = document.querySelector("#text_input");
const button = document.querySelector("#reverseButton");
document.getElementById("text_input").focus();

button.addEventListener("click", reverseString);

function reverseString() {
    if(input.value === ""){
        document.querySelector("#info_text").innerText = "Please enter any Text!";
    }
    else {
        let text = "";
        for (var i = input.value.length; i >= 0; i--) {
            text += input.value.charAt(i)
        }
        document.querySelector("#typed_text").innerText =  `Your typed String is: ${input.value}`;
        document.querySelector("#info_text").innerText = "Reversed string is here!";
        document.querySelector("#reversed_text").innerText = text;
        document.getElementById("text_input").value = "";
        document.getElementById("text_input").focus();
    }
    
};