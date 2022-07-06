const baseURL = ''
function convertToJson(res) {
    const info = await res.json();
    if (res.ok) {
      return info;
    } else {
      throw { name: 'servicesError', message: info };
    }
  }

  export default class userData {
    constructor(){

    }

    getData(category) {
        return fetch(baseURL + '')
          .then(convertToJson).then((data) => data.Result);
    }

    async findUserById(id) {
        return await fetch(baseURL + ``).then(convertToJson)
          .then((data) => data.Result);
    }

  }