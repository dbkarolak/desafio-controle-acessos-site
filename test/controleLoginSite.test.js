import { realizarLogin } from '../src/controleLoginSite.js'
import assert from 'node:assert';

describe('Testes do Controle de Logins do Site', function () {
    it('Validar que a autenticação ocorre com sucesso utilizando um email válido e uma senha válida nao expirada.', function (){
        // Arrange
        const emailValido = "ananias@sitedojulio.com.br";
        const senhaValida = "SenhaA";
        
        // Act
        const retornoDaFuncao = realizarLogin(emailValido,senhaValida);
        
        // Assert
        assert.equal(retornoDaFuncao, 'Login realizado com sucesso.')
    });
})