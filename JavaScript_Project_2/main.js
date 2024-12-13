

const BUTTON = document.querySelector("#todobtn");
let input = document.querySelector("#todoinput");  // input'u DOM elemanı olarak tanımlıyoruz

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addFunc();
    }
});

BUTTON.addEventListener("click", addFunc);

function addFunc() {
    const UL = document.querySelector("#todoul");
    let inputValue = input.value;  // input'un değerini her seferinde alıyoruz
    if (inputValue === "") {
        alert("Lütfen giriş kısmını boş bırakmayınız!");
        return;
    }

    const LI = document.createElement("li");
    LI.textContent = inputValue;
    UL.appendChild(LI);

    input.value = "";  // Listeye ekleme sonrasında input alanını temizliyoruz
}
