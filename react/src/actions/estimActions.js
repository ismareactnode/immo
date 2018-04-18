export const EDIT_ESTIM = 'EDIT_ESTIM';
export const editEstim = (id, updates) => (
  {
    type: EDIT_ESTIM,
    id,
    updates,
  }
);
