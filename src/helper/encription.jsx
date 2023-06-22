import AES from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';
import config from "/env.json"

export function encrypt(messages) {
  const cipherText = AES.encrypt(messages, config.app_key)
  const encrypted = cipherText.toString()

  return encrypted
}

export function decrypt(cipher) {
  const bytes = AES.decrypt(cipher, config.app_key)
  const decrypted = bytes.toString(enc);

  return decrypted
}