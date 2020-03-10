class Chiper {
    encrypt(strings,myKey){
        const crypto = require('crypto')
        , key = myKey
        , cipher = crypto.createCipher('aes-128-ecb', key)
        , decipher = crypto.createDecipher('aes-128-ecb', key)

        let encryptedPassword = cipher.update(strings, 'utf8', 'base64');
        encryptedPassword += cipher.final('base64')
        return encryptedPassword
    }
    decrypt(strings, myKey){
        const crypto = require('crypto')
        , key = myKey
        , cipher = crypto.createCipher('aes-128-ecb', key)
        , decipher = crypto.createDecipher('aes-128-ecb', key)

        let decryptedPassword = decipher.update(strings, 'base64', 'utf8');
        decryptedPassword += decipher.final('utf8');
        return decryptedPassword
    }
}

const chiper = new Chiper()
const message = chiper.encrypt('Ini tulisan rahasia','p4$$w0rd')
console.log(message)
const decryptMessage = chiper.decrypt(message,'p4$$w0rd')
console.log(decryptMessage)


