export function flagEmoji(countryCode) {
    return countryCode
      .toUpperCase()
      .split('')
      .map(c => String.fromCodePoint(c.charCodeAt(0) + 127397))
      .join('');
  }
  