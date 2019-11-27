// export const FETCH_ASISTENCIA_BEGIN = 'FETCH_ASISTENCIA_BEGIN';
// export const FETCH_ASISTENCIA_SUCCESS = 'FETCH_ASISTENCIA_SUCCESS';
// export const FETCH_ASISTENCIA_FAILURE = 'FETCH_ASISTENCIA_FAILURE';

// export const fetchAsistenciaBegin = () => ({
//   type: FETCH_ASISTENCIA_BEGIN
// });

// export const fetchAsistenciaSuccess = response => ({
//   type: FETCH_ASISTENCIA_SUCCESS,
//   payload: { response }
// });

// export const fetchAsistenciaFailure = error => ({
//   type: FETCH_ASISTENCIA_FAILURE,
//   payload: { error }
// });

// export function fetchAsistence() {
//   return dispatch => {
//     dispatch(fetchAsistenciaBegin());
//     return fetch('http://localhost:3000/assistance')
//       .then(handleErrors)
//       .then(res => res.json())
//       .then(json => {
//         dispatch(fetchAsistenciaSuccess(json));
//         return json;
//       })
//       .catch(error => dispatch(fetchAsistenciaFailure(error)));
//   };
// }

// // Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }
