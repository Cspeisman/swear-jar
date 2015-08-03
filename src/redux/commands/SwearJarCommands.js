export function addSwearWord(swearWord) {
  return {
    type: 'SWEAR_WORD',
    swearWord,
  };
}

export function incrementSwearCount() {
  return {
    type: 'INCREMENT_SWEAR_COUNT',
  };
}
