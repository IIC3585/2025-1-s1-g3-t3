const EXCEPTIONS = {
    EUR: 'EU',
    XAU: 'XAU', // no tiene país, podrías usar "💰" u otro icono
    XAG: 'XAG',
    XPT: 'XPT',
    XPD: 'XPD',
    BTC: 'BT',
    ETH: 'ET',
    ANG: 'CW', // Netherlands Antilles Guilder, se usa en Curazao y Sint Maarten
}
  
export function getCountryCode(currency) {
    if (typeof currency !== 'string') return '';
    if (EXCEPTIONS[currency]) return EXCEPTIONS[currency];
    return currency.slice(0,2);
}
  