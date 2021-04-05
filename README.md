Projeto criado como teste para vaga de desenvolvimento Front-end na Venturus.

Se trata de um gerenciador de times, onde o usuário pode montar suas equipes, escolhendo os jogadores através da [API Sportmonks](https://docs.sportmonks.com/football/), montando sua formação ideal, além de informações extras como se o time é real ou aquele dos seus sonhos e tags.

O projeto foi criado e executado através de React, usando [Create React App](https://github.com/facebook/create-react-app).

## Comentários sobre o desenvolvimento

Minha ideia sobre os testes era criar a aplicação primeiro e em seguida os testes, o que eu eu imagino que seja longe do recomendado. No entanto decidi fazer dessa forma pois tenho poucaprática com testes e meu plano era aproveitar esse projeto para aprendê-los, o que ainda pretendo fazer, mas não dentro do prazo limite para avaliação.

Para o estilo escolhi usar o CCS in JS do Material UI pois seria uma maneira de agilizar algumas coisas mais ainda colocando a mão na massa.

A implementação do esquadrão

## API Sportmonks

Escolhi essa API pois foi onde encontrei a opção de encontrar um endpoint que buscasse os jogadores pelo nome. Para usá-la é necessário adicionar o token no endereço de chamada do método GET.

O token pode ser gerado gratuitamente após o login [aqui](https://www.sportmonks.com/)

## Scripts Disponíveis

### `yarn install`

Para instalar todas dependencias necessárias.

### `yarn start`

Para rodar a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para vê-la em seu browser.

A página será recarregada sempre que houver edições.

### `yarn lint`

Para verificar se as regras de lint na aplicação estão sendo aplicadas corretamente.

### `yarn build`

Builda a aplicação para produção no folder `build`
