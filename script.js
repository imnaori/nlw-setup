const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já incluso");
    return;
  }

  alert("Adicionado com sucesso ✅");

  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {
  run: ["01-21", "01-20", "01-19", "01-18", "01-17", "01-16", "01-15"]
};

nlwSetup.setData(data);
nlwSetup.load();
