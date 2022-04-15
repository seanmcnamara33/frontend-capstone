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

export const getStyles = async (productId) => {
  try {
    let style = await fetch(`${process.env.API_URI}/products/${productId}/styles`, { method: 'GET', headers: { Authorization: process.env.API_KEY } });
    return await style.json();
  } catch(err) {
    console.log(`Error in getStyles helper fucntion: ${err}`)
  }
};

export const addToCart = async (sku, quantity) => {
  try {
    let body = JSON.stringify({sku_id: sku, quantity: quantity});
    var response = await fetch('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/cart', {
      method: 'POST',
      body: body,
      headers: {'Content-Type': 'application/json', Authorization: process.env.API_KEY }}
    );
    return response;
  } catch(err) {
    console.log(`error in addToCart: ${err}`)
  }
};

export const getItems =  async () => {
  try {
    const items =  await fetch(`${process.env.API_URI}/products`, { method: 'GET', headers: { Authorization: process.env.API_KEY } });
    return await items.json();
  } catch(err) {
    console.log(`Error found in getItems: ${err}`);
  }
};

