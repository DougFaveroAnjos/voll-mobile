import API from './api'

export async function fazerLogin(email: String, senha: String){
    /**Faz a verificação se o campo de email e senha está vazio, se estiver vazio retorna um "Null" */
    if(!email || !senha) return null
    try{
        /**Realiza a conexão com com a API (Rota de autenticação) */
        const login = await API.post('/auth/login', {
            email,
            senha
        })
        console.log(login.data)
        /**NÃO ESQUECER DO RETURN*/
        return login.data
    }
    catch(error){
        console.log("Deu erro:", error)
        return null
    }
}