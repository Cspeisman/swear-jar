export function addSwearWord(swearWord) {
  return {
    type: 'SWEAR_WORD',
    swearWord,
  };
}

function incrementSwearCount() {
  return {
    type: 'INCREMENT_SWEAR_COUNT',
  };
}

export function registerSwear() {
  return dispatch => {
    return fetch('http://localhost:5000/register-swear')
    .then(response => console.log(response));
  }
}

function loginUser(jar) {
  return {
    type: 'FOO',
    jar,
  };
}

export function requestLogin(username, password) {
  return dispatch => {
    return fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }).then(function(response) {
        return response.json();
      }).then(function(json) {
        dispatch(loginUser(json));
      }).catch(err => {
        console.log(err);
      });
  };
}
