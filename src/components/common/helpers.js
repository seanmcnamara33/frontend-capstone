/* eslint-disable */
export const formatDate = date => new Date(date).toDateString();

export const calculateAverage = (object) => {
  let sum = 0;
  let count = 0;
  for (const prop in object) {
    sum += parseInt((prop * object[prop]));
    count += parseInt(object[prop]);
  }
  return (Math.round((sum / count) * 4) / 4).toFixed(2);
};

export const calculateTotalReviewNumber = (object) => {
  let count = 0;
  for (const prop in object) {
    count += parseInt(object[prop]);
  }
  return count;
};

export const getStars = async (productId) => {
  return await fetch(`${process.env.API_URI}/reviews/meta?product_id=${productId}`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
    .then((response) => {
      return response.json().then((result) => {
        const average = calculateAverage(result.ratings);
        const reviews = calculateTotalReviewNumber(result.ratings);
        let values = [average, reviews]
        return values;
      });
    })
    .catch((err) => {
      console.log(`Error found in getStars: ${err}`);
    });
};