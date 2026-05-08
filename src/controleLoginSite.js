const usuariosDoSite = [
    {
        "id" : 1,
        "nome" : "Ananias", 
        "email" : "ananias@sitedojulio.com.br",
        "senha" : "SenhaA",
        "expirado" : false
    },
    {
        "id" : 2,
        "nome" : "Denis", 
        "email" : "denis@sitedojulio.com.br",
        "senha" : "SenhaD",
        "expirado" : false
    },
        {
        "id" : 3,
        "nome" : "Pâmela", 
        "email" : "pamela@sitedojulio.com.br",
        "senha" : "SenhaP",
        "expirado" : true
    },
        {
        "id" : 4,
        "nome" : "Romeo", 
        "email" : "romeo@sitedojulio.com.br",
        "senha" : "SenhaR",
        "expirado" : false
    },
        {
        "id" : 5,
        "nome" : "Julio", 
        "email" : "julio@sitedojulio.com.br",
        "senha" : "SenhaJ",
        "expirado" : true
    }
]

function realizarLogin(email, senha){
    for(let i=0; i < usuariosDoSite.length; i++){
        if(usuariosDoSite.at(i).email == email && usuariosDoSite.at(i).senha == senha){
            if(usuariosDoSite.at(i).expirado){
                return "Renove suas credenciais."
            }
            return "Login realizado com sucesso."
        }
    }
    return "Credenciais incorretas."
}

console.log(realizarLogin("ananias@sitedojulio.com.br","SenhaA"));
console.log(realizarLogin("julio@sitedojulio.com.br","SenhaJ"));
console.log(realizarLogin("trackinas@dojuliodelima.com","SenhaTrackinas"));
console.log(realizarLogin("ananias@sitedojulio.com.br","TrackinasNaoEhBiscoito"));
