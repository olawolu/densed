const sha256 = require("crypto-js/sha256")
const base64 = require('crypto-js/enc-base64')
// Requirements:
//  short url must consist of the host and a 6 character string
//  multiple entry of the same url should not generate the same short url
// const Math = require('')
module.exports = {
    // hash: (url) => {
    //     // generate an md5 hash
    // },

    hashUrl: (url) => {
        var result = [];
        // generate sha256 hash
        var urlHash = sha256(url)
        var digest = base64.stringify(urlHash)

        for (var i = 0; i < 6; i++) {
            result.push(digest.charAt(Math.floor(Math.random() *
                digest.length)));
        }
        return result.join('');
    }
}