const monedas = {
  america: ["USD","ARS","BRL","MXN","CLP"],
  europa: ["EUR","GBP","CHF"],
  asia: ["JPY","CNY","INR"],
  africa: ["ZAR","EGP","MAD"],
  oceania: ["AUD","NZD","FJD"],
  todas: ["USD","ARS","BRL","MXN","CLP","EUR","GBP","CHF","JPY","CNY","INR","ZAR","EGP","MAD","AUD","NZD","FJD"]
};

const banderas = {
  USD:"us", ARS:"ar", BRL:"br", MXN:"mx", CLP:"cl",
  EUR:"eu", GBP:"gb", CHF:"ch",
  JPY:"jp", CNY:"cn", INR:"in",
  ZAR:"za", EGP:"eg", MAD:"ma",
  AUD:"au", NZD:"nz", FJD:"fj"
};

function iniciarConversor(cont) {
  setTimeout(() => {
    const base = document.getElementById("base");
    const destino = document.getElementById("destino");
    const resultado = document.getElementById("resultado");
    const btn = document.getElementById("convertir");

    // Cargar opciones
    monedas[cont].forEach(m => {
      base.append(new Option(m, m));
      destino.append(new Option(m, m));
    });

    // Mostrar bandera al lado del select
    const mostrarBandera = s => {
      const f = banderas[s.value];
      s.style.background = `url(https://flagcdn.com/24x18/${f}.png) no-repeat 8px center`;
      s.style.paddingLeft = "35px";
    };

    base.onchange = () => mostrarBandera(base);
    destino.onchange = () => mostrarBandera(destino);
    mostrarBandera(base);
    mostrarBandera(destino);

    // Botón de conversión
    btn.onclick = async () => {
      try {
        const cant = document.getElementById("cantidad").value;
        const res = await fetch(`https://open.er-api.com/v6/latest/${base.value}`);
        const data = await res.json();
        const tasa = data.rates[destino.value];
        resultado.textContent = `${cant} ${base.value} = ${(cant * tasa).toFixed(2)} ${destino.value}`;
      } catch {
        resultado.textContent = "❌ Error al obtener datos.";
      }
    };
  }, 50);
}
