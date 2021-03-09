
module.exports = function algo_brutForce(password) {
  /* prettier-ignore*/
  const data = {
        alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        alphabet2: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        temp: []
    };
  // verifs
  const splitPass = password.split("");
  if (splitPass.length < 2) {
    throw new Error("Le mot de passe doit contenir au moins 2 caractères");
  }
  for (let i = 0; i < splitPass.length; i++) {
    if (data.alphabet.indexOf(splitPass[i]) === -1) {
      throw new Error(
        "Le mot de passe contient un ou des caractère(s) non référencé(s) dans l'alphabet des possibilités de l'algorithme"
      );
    }
  }
  let concat, i, y;
  const alphabet2_length = data.alphabet2.length;

  function loop(password) {
    const alphabet_length = data.alphabet.length;
    for (i = 0; i < alphabet_length; i++) {
      for (y = 0; y < alphabet2_length; y++) {
        concat = data.alphabet[i] + data.alphabet2[y];
        if (password === concat) {
          return;
        }
        data.temp.push(concat);
      }
    }
    data.alphabet = data.temp;
    loop(password);
  }
  loop(password);
  return concat;
}