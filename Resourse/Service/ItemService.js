import Config from '../Helper/Config';

export const ItemService = {
  ItemServices,
};

async function ItemServices(postData, token) {
  var URL = Config.API_URL + 'items';
  const requestOption = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: postData,
  };
  console.log(postData, '\\\\\\\\\\');
  return fetch(URL, requestOption)
    .then(handleResponse)
    .then(response => {
      console.log(response, '???????????????');
      return response;
    })
    .catch(err => {});
}

function handleResponse(response) {
  return response.text().then(text => {
    console.log(response);
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;

      return Promise.reject(error);
    }
    return data;
  });
}
