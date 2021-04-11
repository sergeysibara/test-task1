export function generateString(length: number) {
  const result = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(
      Math.random() * charactersLength
    )));
  }

  return result.join('');
}
