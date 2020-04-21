export const INITIALIZE_AUTH = 'INITIALIZE_AUTH';

export const initializeAuth = (code) => ({
  type: INITIALIZE_AUTH,
  payload: { code },
});
