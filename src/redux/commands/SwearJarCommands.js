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

export function loginUser(payload) {
  console.log('foo')
  return {
    type: 'FOO',
    payload
  }
}

export function requestLogin(username, password) {
  fetch('http://localhost:5000/user/login', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  }).then(function(response) {
    return response.json()
  }).then(function(json) {
    loginUser(json)
  }).catch(err => {
    console.log('oh no :(')
    console.log(err)
  })
}
