import CryptoJS from 'crypto-js';


export const encryptedPasswd = (password) =>{
    var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
    var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
    var encrypted = CryptoJS.AES.encrypt(password, key, { iv: iv });
    
    return encrypted.toString();
};



export const decryptedPasswd = (encrypted) =>{
    var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
    var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
    var bytes = CryptoJS.AES.decrypt(encrypted, key, {iv: iv});
    var decrypted = bytes.toString(CryptoJS.enc.Utf8);

    return decrypted
};

