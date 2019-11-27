const initialState = {
  isFetching: false,
  list: []
};

/**
 * Actions
 */
export const FETCH_ASISTENCIA_BEGIN = 'FETCH_ASISTENCIA_BEGIN';
export const FETCH_ASISTENCIA_SUCCESS = 'FETCH_ASISTENCIA_SUCCESS';
export const FETCH_ASISTENCIA_FAILURE = 'FETCH_ASISTENCIA_FAILURE';
export const FETCH_ASISTENCIA_ADD = 'FETCH_ASISTENCIA_ADD';
export const FETCH_ASISTENCIA_LIST = 'FETCH_ASISTENCIA_LIST';

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
export const fetchListAssistanceSuccess = response => ({
  type: FETCH_ASISTENCIA_LIST,
  payload: {
    list: response
  }
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
  } else if (action.type === FETCH_ASISTENCIA_LIST) {
    console.log('agregando listado', action.payload);
    return {
      ...state,
      ...action.payload
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
    return fetch('http://localhost:3000/assistance')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchListAssistanceSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchAsistenciaFailure(error)));
  };
}
export function fetchAddAsistencia(data) {
  return dispatch => {
    dispatch(fetchAsistenciaBegin());
    data = {
      ...data,
      startTime: 120120121,
      endTime: 1304004343,
      status: 'activo',
      idAssistance: 123,
      fullName: 'Brayan Laureano'
    };
    return fetch('http://localhost:3000/assistance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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
