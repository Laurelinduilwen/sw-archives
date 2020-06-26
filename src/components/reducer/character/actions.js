export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';

export function setCurrentCharacter(id) {
  return {
    type: SET_CURRENT_CHARACTER,
    id,
  };
}
