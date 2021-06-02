import axios from "axios";

export function searchPexelImages(searchValue) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.pexels.com/v1/search?query=${searchValue}`, {
        headers: {
          Authorization:
            "563492ad6f917000010000014693fcc8e1ce4d7e99bb3737eeb445e7",
        },
      })
      .then((res) => {
        resolve(res.data.photos);
      })
      .catch((err) => {
        console.log("error while search pexel images.", err);
        reject(err);
      });
  });
}

export function searchPixabayImages(searchValue) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://pixabay.com/api/?key=21899695-ed93b5e2afa077ab8cae18010&q=${searchValue}`
      )
      .then((res) => {
        console.log("pixabay: ", res);
        resolve(res.data.hits);
      })
      .catch((err) => {
        console.log("error while search pixabay images.", err);
        reject(err);
      });
  });
}

export function searchUnsplashImages(searchValue) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?query=${searchValue}&client_id=0UaMWWL3Dxdch2R98lyi78MfZyC5ZkhkCDHFfVqfkZg`
      )
      .then((res) => {
        resolve(res.data.results);
      })
      .catch((err) => {
        console.log("error while search unsplash images.", err);
        reject(err);
      });
  });
}
