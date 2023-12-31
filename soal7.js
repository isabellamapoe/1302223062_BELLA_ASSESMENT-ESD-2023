function decryptMessage(encryptedMessage) {
    const shiftAmount = 5;
    let decryptedMessage = "";
  
    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
  
      if (char >= "a" && char <= "z") {
        const decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 97 - shiftAmount + 26) % 26) + 97);
        decryptedMessage += decryptedChar;
      } else if (char >= "A" && char <= "Z") {
        const decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 65 - shiftAmount + 26) % 26) + 65);
        decryptedMessage += decryptedChar;
      } else {
        decryptedMessage += char;
      }
    }
  
    return decryptedMessage;
  }
  
  const encryptedMessage = "xfqfr bfmdz gjxtp lzj rfz ifkyfw jxi snm gwt, gjxtp qz rfz rfpfs in bfwlty lfp? fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";
  const decryptedMessage = decryptMessage(encryptedMessage);
  
  console.log(decryptedMessage);
  