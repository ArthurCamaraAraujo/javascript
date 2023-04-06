var agora = new Date()
var dia = agora.getDay()
switch (dia) {
    case 0:
        console.log('Hoje é Domingo! Não tem aula.')
        break
    case 1:
        console.log('Hoje é Segunda! Tem aula.')
        break
    case 2:
        console.log('Hoje é Terça! Tem aula.')
        break
    case 3:
            console.log('Hoje é Quarta! Tem aula.')
            break
    case 4:
        console.log('Hoje é Quinta! Tem aula.')
        break

    case 5:
        console.log('Hoje é Sexta! Tem aula.')
        break
    case 6:
        console.log('Hoje é Sábado! Não tem aula.')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}