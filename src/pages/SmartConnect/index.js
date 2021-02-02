import React from 'react';
import fetchJSON from 'fetch-jsonp';
import fetch from 'isomorphic-fetch';
// import PropTypes from 'prop-types';

const SmartConnect = () => {
  const [method, setMethod] = React.useState('get');
  const [url, setUrl] = React.useState('http://localhost:40104');
  const [body, setBody] = React.useState('{"method": "getNamePrinter", "version": "1.0"}');
  const [data, setData] = React.useState('');

  const GET = () => {
    return new Promise((resolve, reject) => {
      fetchJSON(`${url}?json=${window.btoa(body)}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const POST = () => {
    return new Promise((resolve, reject) => {
      fetch(url, { method: 'POST', body })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleSubmit = async () => {
    try {
      let res = {};
      if (method === 'get') {
        res = await GET();
      } else {
        res = await POST();
      }
      setData(JSON.stringify(res));
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <div className="wrap-smart-connect container">
      <h1>Smart Connect</h1>
      <div className="header">
        <input
          type="text"
          value={url}
          onChange={(e) => {
            return setUrl(e.target.value);
          }}
        />
        <select
          value={method}
          onChange={(e) => {
            return setMethod(e.target.value);
          }}
        >
          <option value="get">GET</option>
          <option value="post">POST</option>
        </select>
      </div>
      <div className="wrap-body">
        <textarea
          rows="10"
          value={body}
          onChange={(e) => {
            return setBody(e.target.value);
          }}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <pre>{data}</pre>
    </div>
  );
};

export default SmartConnect;
