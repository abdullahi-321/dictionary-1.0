let items = [];
const input = document.querySelector("#input");
const btn = document.querySelector("#button");
const section = document.querySelector("section");
 const form = document.querySelector("form") 


btn.addEventListener("click", () => {
    if(!checkOnlySpace(input.value)) {
        func()
    }
})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!checkOnlySpace(input.value)) {
        func()
    }
})

function func() {
        section.innerHTML = ``;
        items = [];
        let searchedWord = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
    
        searchedWord.then(blob => blob.json())
            .then(data => data.forEach(item => {
                let temporaryStorage1 = item.meanings;
                let temporaryStorage2;
                let temporaryStorage3;
                let temporaryStorage4 = [];
    
                temporaryStorage2 = temporaryStorage1[0]
                temporaryStorage3 = temporaryStorage2.definitions;
                temporaryStorage3.forEach(item => {
                    temporaryStorage4.push(item.definition)
                })
                console.log(temporaryStorage3);
                let text = document.createElement("div");
                text.innerHTML = `
                    <h2>${item.word}</h2>
                `;
                temporaryStorage4.forEach(item => {
                    let text2 = document.createElement("li");
                    text2.innerHTML = `${item}`
                    text.appendChild(text2)
                })
    
                section.appendChild(text)
                input.value = "";
            }))
    
}

function checkOnlySpace(str) {
    return /^s*$/.test(str);
  }