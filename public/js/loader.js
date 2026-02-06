async function loadComponent(path) {
  const res = await fetch(path);
  return res.text();
}

const app = document.getElementById('app');

app.innerHTML += await loadComponent('../views/components/imc.html');
app.innerHTML += await loadComponent('../views/components/gordura.html');
app.innerHTML += await loadComponent('../views/components/gasto-calorico.html');
app.innerHTML += await loadComponent('../views/components/medidas.html');

document.dispatchEvent(new Event('components:loaded'));
