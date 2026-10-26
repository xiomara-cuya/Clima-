function renderizarClima(data, nombreCiudad) {

  // Extraemos los campos del JSON
  const temperatura = data.current.temperature_2m;           // temperatura en °C
  const humedad     = data.current.relative_humidity_2m;           // humedad en %
  const viento      = data.current.wind_speed_10m;           // velocidad del viento
  const altitud     = data.elevation;                   // elevación en metros
  const hora        = data.current.time.slice(11, 16); // solo HH:MM

  // Template literal: construimos el HTML completo de la tarjeta
  const html = `
    <article class="tarjeta-clima">
      <h2>${nombreCiudad}</h2>
      <p class="altitud">📍 ${altitud} m.s.n.m.</p>

      <p class="temperatura">${temperatura}°C</p>

      <div class="detalles">
        <div class="detalle-item">
          <span class="etiqueta">Humedad</span>
          <span class="valor">${humedad}%</span>
        </div>
        <div class="detalle-item">
          <span class="etiqueta">Viento</span>
          <span class="valor">${viento} km/h</span>
        </div>
        <div class="detalle-item">
          <span class="etiqueta">Actualizado</span>
          <span class="valor">${hora}</span>
        </div>
      </div>
    </article>
  `;

  // Inyectamos el HTML en el DOM
  resultado.innerHTML = html;
}
