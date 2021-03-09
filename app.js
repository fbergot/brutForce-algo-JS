const inputPassword = document.getElementById('inputPass');
const contentDiv = document.getElementById('contentPass');
const spanTime = document.getElementById('time');


const but = document.getElementById("execute").addEventListener("click", () => {
    goPromise()
        .then((arr) => {
            contentDiv.innerText = `Le mot de passe est : ${arr[0]}`;
            spanTime.innerText = `${arr[1]} secondes`;
        })
      .catch((error) => (contentDiv.innerText = "Erreur : " + error.message));
});
  


function goPromise() {   
    return new Promise((resolve, reject) => {
        try {
            const [pass , time] = algo_brutForce(inputPassword.value);
            resolve([pass , time]);       
        } catch (e) {
            reject(e);
        }
    }); 
}


function algo_brutForce(password) {

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
            throw new Error("Le mot de passe contient un ou des caractère(s) non référencé(s) dans l'alphabet des possibilités de l'algorithme (a-z par défaut).");           
        }
    }
    
    // time init
    const startTime = new Date().getTime();   
    let concat, i, y, o = 0;  
    const alphabet2_length = data.alphabet2.length;
    
    function loop(password) {      
        const alphabet_length = data.alphabet.length;
            for (i = 0; i < alphabet_length; i++) {
                for (y = 0; y < alphabet2_length; y++) {
                     concat = data.alphabet[i] + data.alphabet2[y];
                     o += 1;
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

    const totalTime = new Date().getTime() - startTime;
    const time = (totalTime / 1000).toFixed(2);
    console.log(`Nombre de sous-array : ${o}`);

    return [concat , time];
}




