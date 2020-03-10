const crypto = require('crypto')
class Hash {
    md5(strings) {
        console.log(crypto.createHash('md5').update(strings).digest('hex'))
    }

    sha1(strings) {
        console.log(crypto.createHash('sha1').update(strings).digest('hex'));
    }

    sha256(strings) {
        console.log(crypto.createHash('sha256').update(strings).digest('hex'))
    }
    sha512(strings) {
        console.log(crypto.createHash('sha512').update(strings).digest('hex'))
    }
}

const hash = new Hash()
hash.md5('secret')
hash.sha1('secret')
hash.sha256('secret')
hash.sha512('secret')