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
  let body = await fetch(`${process.env.API_URI}/reviews/meta?product_id=${productId}`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
  let res = await body.json();
  if (res) {
    const average = calculateAverage(res.ratings);
    const reviews = calculateTotalReviewNumber(res.ratings);
    let values = [average, reviews]
    return values;
  }
};
