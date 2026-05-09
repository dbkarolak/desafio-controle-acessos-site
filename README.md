# Desafio de Login

## Observação sobre a implementação

Durante a implementação do desafio, identifiquei uma divergência entre a descrição funcional e os cenários de teste solicitados.

No enunciado do desafio, foi especificado que:

> "...`A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.`"

Isso define um único retorno, `"Credenciais incorretas"` para os dois cenários:

- Um email inexistente
- Uma senha incorreta para um email existente

Entretanto, na seção de testes, foram solicitados cenários separados para os seguintes testes:

3. Usuário não encontrado
4. Senha incorreta para o usuário encontrado

Seguindo o comportamento descrito no desafio, optei por implementar a função retornando `"Credenciais incorretas"` em ambos os casos, mantendo o que foi descrito no requisito funcional.

> Observação: Essa abordagem também segue uma prática comum de segurança em autenticação, evitando diferenciar os erros para não facilitar a listagem de usuários válidos no sistema.