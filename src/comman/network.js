
var baseurl = 'http://127.0.0.1:3000';
var token = '';
module.exports = {
    get: (url) => {
        token = localStorage.getItem('token');
        return fetch(baseurl + url, {
            method: 'GET',
            headers: {
              token:token
            },
          }).then(resonse => resonse.json())
    },
    post: (url, data) => {
        token = localStorage.getItem('token');
        return fetch(baseurl + url, {
            method: 'POST',
            headers: {
                token:token,
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin":"*"
            },
            body: JSON.stringify(data),
        }).then(resonse => resonse.json())
    }
}