/* --- Axios 1 */
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
  .then(res => {
    echo('Axios 1, Bitcoin course', res.data.ticker.price);
  })
  .catch(err => {
    console.log("Error:", err);
  })

/* --- Axios 2 */
const fetchBitcoinCourse = async () => {
  try {
    res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
    echo('Axios 2, Bitcoin course', res.data.ticker.price);
  } catch (e) {
    console.log("Error:", e);
  }
}
fetchBitcoinCourse();

/* --- Axios 3 */
const iCanDadJoke= async () => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
      }
    }
    res = await axios.get('https://icanhazdadjoke.com/', config);
    echo('Axios 3, Dad Joke', res.data.joke);
  } catch (e) {
    console.log("Error:", e);
  }
}
iCanDadJoke();

