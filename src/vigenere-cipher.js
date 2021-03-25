const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(straight = 'true') {
    this.straight = straight;
  }
  
  encrypt(message, key) {
    if (!message || !key) throw new Error('Error');
    message = message.toUpperCase();
    key = key.toUpperCase();
    while (key.length < message.length) {
      key += key;
    }
    let encryptMessage = "";
    let position = 0;
    for (let i = 0; i < message.length; i+= 1) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {
        charCode -= 65;
        let charCodeEncrypted = key.charCodeAt(position) - 65;
        let resultCharCode = ((charCode + charCodeEncrypted) % 26) + 65;
        encryptMessage += String.fromCharCode(resultCharCode);
        position++;
      } 
      else {
        encryptMessage += message[i];
      }
    }
    if (!this.straight) return encryptMessage.split('').reverse().join('');
    return encryptMessage;
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Error');
    message = message.toUpperCase();
    key = key.toUpperCase();
    while (key.length < message.length) {
      key += key;
    }
    let decryptMessage = "";
    let position = 0;
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {
        charCode -= 65;
        let charCodeEncrypted = key.charCodeAt(position) - 65;
        let resultCharCode = ((charCode + 26 - charCodeEncrypted) % 26) + 65;
        decryptMessage += String.fromCharCode(resultCharCode);
        position++;
      } 
      else {
        decryptMessage += message[i];
      }
    }
    if (!this.straight) return decryptMessage.split('').reverse().join('');
    return decryptMessage;
  }
}

module.exports = VigenereCipheringMachine;
