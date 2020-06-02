import get from 'lodash/get';
import fetch from 'isomorphic-fetch';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'x-access-token': '',
  user: '',
  principal: ''
};

const fetchWithResponse = (url, options, delay = 0) => {
  const delayStart = Date.now();
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers,
      ...options
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (get(res, 'responseData.token')) {
          headers['x-access-token'] = get(res, 'responseData.token');
          headers.user = get(res, 'responseData.name');
          headers.principal = get(res, 'responseData.principal');
        }
        const time = delay - (Date.now() - delayStart);

        // delay
        setTimeout(
          () => {
            if (res.responseData) {
              resolve(res);
            } else {
              reject(res.errors);
            }
          },
          time > 0 ? time : 0
        );
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const GET = (url, delay = 0) => {
  return fetchWithResponse(url, {}, delay);
};

const POST = (url, body, delay = 0) => {
  return fetchWithResponse(
    url,
    { method: 'POST', body: JSON.stringify(body) },
    delay
  );
};

const PUT = (url, body, delay = 0) => {
  return fetchWithResponse(
    url,
    { method: 'PUT', body: JSON.stringify(body) },
    delay
  );
};

const DELETE = (url) => {
  return fetchWithResponse(url, { method: 'DELETE' });
};

export { fetchWithResponse, GET, POST, PUT, DELETE };
