/***
 * @author Shiming Chen <chen@lemontv.me>
 */

const FETCH_REQUESTED  = 'FETCH_REQUESTED';
const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';

const apiUrl = 'https://randomuser.me/api/';

function handleResponse (response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('fetch resource error', response);
  }
}

export function fetchUserProfile () {
  return (dispatch) => {
    dispatch({
      type: FETCH_REQUESTED
    })

    return fetch(apiUrl).then(handleResponse).then(json => {
      console.log(json)
      dispatch({
        type: FETCH_SUCCESSFUL,
        profile: json.results[0]
      })
    })
  }
}

/*
 * Evalutions init state
 */
const initState = {
  isLoading: true,
  profile: {}
}

export default function reducer (state = initState, action) {
  switch(action.type) {
    case FETCH_REQUESTED:
      return Object.assign({}, state, {
        isLoading: true
      });
    case FETCH_SUCCESSFUL:
      return Object.assign({}, state, {
        isLoading: false,
        profile: action.profile
      });
    default:
      return state
  }
}
