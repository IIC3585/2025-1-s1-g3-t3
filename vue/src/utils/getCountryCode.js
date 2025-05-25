const EXCEPTIONS = {
    EUR: 'EU',
    XAU: 'XAU', // no tiene país, podrías usar "💰" u otro icono
    XAG: 'XAG',
    XPT: 'XPT',
    XPD: 'XPD',
    // BTC/ETH/etc: podrías retornar "💲" o dejar la abreviatura
    BTC: 'BT',
    ETH: 'ET',
    // …añade aquí si quieres más excepciones
}
  
export function getCountryCode(currency) {
    if (EXCEPTIONS[currency]) return EXCEPTIONS[currency];
    return currency.slice(0,2);
}
  