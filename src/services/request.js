const request = (path, method, body) => {
  // eslint-disable-next-line no-undef
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null  
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch.';
      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const patch = (path, body) => request(path, 'PATCH', body);
export const del = path => request(path, 'DELETE');

const requestWithAuth = (url, method, auth, body) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth,
    },
    body: body ? JSON.stringify(body) : null  
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch.';
      return json;
    });
};

export const postWithAuth = (url, body, auth) => 
  requestWithAuth(url, 'POST', auth, body);
export const getWithAuth = (url, auth) => 
  requestWithAuth(url, 'GET', auth);
export const patchWithAuth = (url, body, auth) => 
  requestWithAuth(url, 'PATCH', auth, body);
export const delWithAuth = (url, auth) => 
  requestWithAuth(url, 'DELETE', auth);
