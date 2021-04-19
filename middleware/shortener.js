const sha256 = require("crypto-js/sha256")
const hex = require('crypto-js/enc-hex')

module.exports = {
    hashUrl: (url) => {
        var result = [];
        // generate sha256 hash
        const digest = sha256(url).toString(hex)
        
        for (var i = 0; i < 6; i++) {
            result.push(digest.charAt(Math.floor(Math.random() *
                digest.length)));
        }
        return result.join('');
    }
}