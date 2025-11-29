const paginas = [
  { nombre: "🌐 Todas", archivo: "todas.html" },
  { nombre: "🌎 América", archivo: "america.html" },
  { nombre: "🌍 Europa", archivo: "europa.html" },
  { nombre: "🌏 Asia", archivo: "asia.html" },
  { nombre: "🌍 África", archivo: "africa.html" },
  { nombre: "🌊 Oceanía", archivo: "oceania.html" }
];

// Crea el navbar completo usando manipulación del DOM
function crearNavbar(paginaActual) {
  const nav = document.createElement("nav");
  nav.className = "navbar navbar-expand-lg navbar-dark bg-primary";
  
  const container = document.createElement("div");
  container.className = "container-fluid";
  
  const brand = document.createElement("a");
  brand.className = "navbar-brand";
  brand.href = "index.html";
  brand.innerHTML = "💱 Conversor";
  
  const menuColapsable = document.createElement("div");
  menuColapsable.className = "collapse navbar-collapse";
  
  const ul = document.createElement("ul");
  ul.className = "navbar-nav me-auto mb-2 mb-lg-0";
  
  // Crea cada item del menú dinámicamente
  paginas.forEach(pagina => {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    
    const a = document.createElement("a");
    a.classList.add("nav-link");
    a.href = pagina.archivo;
    a.innerHTML = pagina.nombre;
    
    // Marca como activo el link de la página actual
    if (pagina.archivo === paginaActual) {
      a.classList.add("active");
    }
    
    li.append(a);
    ul.append(li);
  });
  
  menuColapsable.append(ul);
  container.append(brand);
  container.append(menuColapsable);
  nav.append(container);
  document.body.prepend(nav); // Inserta el navbar al inicio del body
}

// Crea el formulario completo del conversor
function crearFormularioConversor(titulo, continente) {
  const container = document.createElement("div");
  container.className = "container mt-5 text-center";
  container.dataset.continente = continente; // Almacena el continente en atributo data
  
  const h3 = document.createElement("h3");
  h3.innerHTML = titulo;
  container.append(h3);
  
  const card = document.createElement("div");
  card.className = "card shadow p-4";
  
  const row = document.createElement("div");
  row.className = "row g-3 mb-3";
  
  const col1 = crearCampoFormulario("base", "De:", "select");
  const col2 = crearCampoFormulario("destino", "A:", "select");
  const col3 = crearCampoFormulario("cantidad", "Cantidad:", "input", "number");
  
  row.append(col1, col2, col3);
  
  const btn = document.createElement("button");
  btn.id = "convertir";
  btn.classList.add("btn", "btn-primary", "w-100");
  btn.innerHTML = "Convertir";
  
  const resultado = document.createElement("h4");
  resultado.id = "resultado";
  resultado.className = "mt-4";
  
  card.append(row, btn, resultado);
  container.append(card);
  document.body.append(container);
  
  // Busca elementos dentro del card y agrega estilos
  const cardContainer = container.querySelector('.card');
  const todosLosInputs = cardContainer.querySelectorAll('input, select');
  todosLosInputs.forEach(input => {
    input.style.transition = "all 0.3s ease";
  });
}

// Función auxiliar para crear campos del formulario (label + input/select)
function crearCampoFormulario(id, texto, tipo, tipoInput = null) {
  const col = document.createElement("div");
  col.className = "col-md-4";
  
  const label = document.createElement("label");
  label.className = "form-label";
  label.setAttribute("for", id);
  label.innerHTML = texto;
  
  let campo;
  if (tipo === "select") {
    campo = document.createElement("select");
    campo.id = id;
    campo.className = "form-select";
  } else {
    campo = document.createElement("input");
    campo.id = id;
    campo.type = tipoInput || "text";
    campo.className = "form-control";
    if (tipoInput === "number") {
      campo.value = "1";
      campo.setAttribute("min", "0");
    }
  }
  
  col.append(label, campo);
  
  // Busca el label dentro de la columna y modifica su estilo
  const labelDentro = col.querySelector('label');
  if (labelDentro) {
    labelDentro.style.fontWeight = "500";
  }
  
  return col;
}

// Crea el contenido de la página principal (index)
function crearPaginaPrincipal() {
  const container = document.createElement("div");
  container.className = "container text-center mt-5";
  
  const h2 = document.createElement("h2");
  h2.innerHTML = "💱 Conversor de Monedas por Continente";
  
  const p = document.createElement("p");
  p.innerHTML = "Elegí un continente en el menú para comenzar.";
  
  container.append(h2, p);
  document.body.append(container);
  
  // Busca el párrafo dentro del container y modifica su estilo
  const parrafo = container.querySelector('p');
  if (parrafo) {
    parrafo.style.fontSize = "1.1rem";
    parrafo.style.color = "#6c757d";
  }
}

// Función principal que inicializa toda la página
function inicializarPagina(tipo, continente, titulo, archivoActual) {
  crearNavbar(archivoActual);
  
  if (tipo === "conversor") {
    crearFormularioConversor(titulo, continente);
  } else if (tipo === "principal") {
    crearPaginaPrincipal();
  }
}
