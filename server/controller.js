const axios = require("axios");

/**
 * Analysis API
 * @param req
 * @param res
 * @returns SymbolAnalysis
 */
const getAnalysis = (req, res) => {
    const { symbol, region } = req.query;
    if (!symbol || !region) {
        return res.status(422).send({
            message: 'Unprocessable Entity.',
            details: 'symbol and region required.'
        });
    }
    const options = {
        method: 'GET',
        url: `https://${process.env.RAPID_API_HOST}/stock/v2/get-analysis`,
        params: {symbol: 'AMRN', region: 'US'},
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': process.env.RAPID_API_HOST
        }
    };
    axios.request(options).then(function (response) {
        return res.status(200).send(response.data);
    }).catch(function (error) {
        return res.status(500).send(error);
    });
}

/**
 * News API
 * @param req
 * @param res
 * @returns void
 */
const getNews = (req, res) => {
    const { q, region } = req.query;
    if (!q || !region) {
        return res.status(422).send({
            message: 'Unprocessable Entity.',
            details: 'q and region required.'
        });
    }

    const options = {
        method: 'GET',
        url: `https://${process.env.RAPID_API_HOST}/auto-complete`,
        params: {q: 'tesla', region: 'US'},
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': process.env.RAPID_API_HOST
        }
    };
    console.log(options);

    axios.request(options).then(function (response) {
        return res.status(200).send(response.data);
    }).catch(function (error) {
        return res.status(500).send(error);
    });
}


module.exports = {
    getAnalysis,
    getNews,
}
