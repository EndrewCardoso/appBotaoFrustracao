import { useState } from 'react';
import CardPergunta from './components/CardPergunta';
import BotaoFrustracao from './components/BotaoFrustracao';
import './App.css';
import './estilos/Geral.css';

function App() {
  const Pergunta = [
    {
      titulo: 'Programação',
      tema: 'Lógica computacional',
      pergunta:
        'Qual o melhor laço de repetição para se usar quando não sabemos o momento de finalizar a repetição?',
      tipoResposta: 'texto',
      dicas: ['Dica 1', 'Dica 3'],
      dificuldade: 1,
    },
    {
      titulo: 'Banco de Dados',
      tema: 'SQL',
      pergunta:
        'Qual o melhor laço de repetição para se usar quando não sabemos o momento de finalizar a repetição?',
      tipoResposta: 'unico',
      opcoes: ['Resposta 1', 'Resposta 2', 'Resposta 3'],
      dicas: ['Dica 2'],
      dificuldade: 2,
    },
    {
      titulo: 'Orientação a objetos',
      tema: 'Conceitos de programação',
      pergunta:
        'Qual o melhor laço de repetição para se usar quando não sabemos o momento de finalizar a repetição?',
      tipoResposta: 'multiplo',
      opcoes: ['Resposta 1', 'Resposta 2', 'Resposta 3'],
      dicas: ['Dica 1', 'Dica 2', 'Dica 3'],
      dificuldade: 3,
    },
  ];

  const [NrPergunta, setNrPergunta] = useState(0);
  const [resposta, setResposta] = useState([]);

  const content = localStorage.getItem('@app_tcc_user');
  let user: any;
  if (content) {
    user = JSON.parse(content);
  } else {
    console.log('json nulo: ' + content);
  }

  return (
    <div className="App div-corpo">
      <CardPergunta
        parTitulo={Pergunta[NrPergunta].titulo}
        parConteudo={Pergunta[NrPergunta].pergunta}
        parTipoResposta={Pergunta[NrPergunta].tipoResposta}
        parOpcoes={Pergunta[NrPergunta]?.opcoes ?? []}
        getResposta={(res: any) => {
          setResposta(res);
        }}
      />

      <div className="BotoesConteiner">
        <BotaoFrustracao
          usuario={{
            parNome: user.nome,
            parCpf: user.cpf
          }}
          pergunta={{
            perguntaId: NrPergunta,
            parTema: Pergunta[NrPergunta].tema,
            parPergunta: Pergunta[NrPergunta].pergunta,
            parResposta: resposta,
            parDica: Pergunta[NrPergunta].dicas,
            parDificuldade: Pergunta[NrPergunta].dificuldade,
          }}
        />
        
        <button
          className="w-20 btn-base"
          onClick={() => setNrPergunta((prev) => prev + 1)}
          disabled = { NrPergunta + 1 === Pergunta.length }
        >
          Responder
        </button>
      </div>
    </div>
  );
}

export default App;
