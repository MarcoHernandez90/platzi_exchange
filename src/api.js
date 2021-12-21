const url = "https://api.coincap.io/v2";

// Obtiene una lista de 20 criptomonedas
function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}

// Obtiene las criptomonedas de forma individual de acuerto a su id
function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

// Obtiene un historial de cambios en la criptomoneda en las últimas 24 hrs
function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

// Obtiene opciones de mercado para una criptomoneda
function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
}

// Obtiene el cambio de moneda desde los datos obtenidos con getMarkets
function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
