const initialState = {
  isFetching: false
};

/**
 * Actions
 */
export const FETCH_ASISTENCIA_BEGIN = 'FETCH_ASISTENCIA_BEGIN';
export const FETCH_ASISTENCIA_SUCCESS = 'FETCH_ASISTENCIA_SUCCESS';
export const FETCH_ASISTENCIA_FAILURE = 'FETCH_ASISTENCIA_FAILURE';
export const FETCH_ASISTENCIA_ADD = 'FETCH_ASISTENCIA_ADD';

export const fetchAsistenciaBegin = () => ({
  type: FETCH_ASISTENCIA_BEGIN
});

export const fetchAsistenciaSuccess = response => ({
  type: FETCH_ASISTENCIA_SUCCESS,
  payload: { response }
});
export const fetchAsistenciaAddSuccess = response => ({
  type: FETCH_ASISTENCIA_ADD,
  payload: { response }
});

export const fetchAsistenciaFailure = error => ({
  type: FETCH_ASISTENCIA_FAILURE,
  payload: { error }
});

/**
 * Reducers
 */
export default (state = initialState, action) => {
  if (action.type === FETCH_ASISTENCIA_ADD) {
    console.log('a punto de agregar', action.payload);
    return {
      ...state,
      isFetching: true
    };
  }
  return state;
};

/**
 * Requests
 */
export function fetchAsistencia() {
  return dispatch => {
    dispatch(fetchAsistenciaBegin());
    return fetch('http://localhost:3000/asistencia')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchAsistenciaSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchAsistenciaFailure(error)));
  };
}
export function fetchAddAsistencia(data) {
  return dispatch => {
    dispatch(fetchAsistenciaBegin());
    return fetch('http://localhost:3000/asistencia', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchAsistenciaSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchAsistenciaFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
