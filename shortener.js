const sha256 = require("crypto-js/sha256")
const hex = require('crypto-js/enc-hex')
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
        var digest = sha256(url).toString(hex)
        
        for (var i = 0; i < 6; i++) {
            result.push(digest.charAt(Math.floor(Math.random() *
                digest.length)));
        }
        return result.join('');
    }
}