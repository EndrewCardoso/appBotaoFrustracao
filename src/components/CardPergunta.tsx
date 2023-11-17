import { ChangeEvent, useEffect, useState } from 'react';
import '../estilos/Card.css';

interface CardPerguntaProps {
  parTitulo: string;
  parConteudo: string;
  parTipoResposta: string;
  parOpcoes?: string[];
  getResposta: (res: string[]) => void;
}

function CardPergunta({
  parTitulo,
  parConteudo,
  parTipoResposta,
  parOpcoes,
  getResposta,
}: CardPerguntaProps) {
  const [resposta, setResposta] = useState<string[]>([]);

  const [respostaTexto, setRespostaTexto] = useState('');

  useEffect(() => {
    getResposta(resposta);
  }, [getResposta, resposta]);

  function formatarRespostaMultipla(event: ChangeEvent<HTMLInputElement>) {
    const selectedValue = event.target.value;

    if (resposta?.findIndex((r) => r === selectedValue) > -1) {
      setResposta(resposta.filter((r) => r !== selectedValue));
    } else {
      const respostaFormatada: any = [...resposta];
      respostaFormatada.push(selectedValue);
      setResposta(respostaFormatada);
    }
  }

  let selectedRadio: any = null;
  function formatarRespostaUnica(event: ChangeEvent<HTMLInputElement>) {
    const selectedValue = event.target.value;

    if (selectedRadio) {
      selectedRadio.checked = false;
    }
    event.target.checked = true;
    selectedRadio = event.target;
    setResposta([selectedValue]);
  }

  function formatarRespostaTexto(event: ChangeEvent<HTMLTextAreaElement>) {
    const selectedValue = event.target.value;
    setRespostaTexto(selectedValue);
    setResposta([selectedValue]);
  }

  //   getResposta(parTipoResposta==='multiplo'?[]:[]);

  let tipoResposta;
  switch (true) {
    case parTipoResposta === 'multiplo':
      tipoResposta = (
        <ul className="newCard-multiplo">
          {parOpcoes?.map((opcao) => (
            <li>
              <input
                type="checkbox"
                value={opcao}
                onChange={formatarRespostaMultipla}
              />
              <label>{opcao}</label>
            </li>
          ))}
        </ul>
      );
      break;
    case parTipoResposta === 'unico':
      tipoResposta = (
        <ul className="newCard-multiplo">
          {parOpcoes?.map((opcao) => (
            <li>
              <input
                type="radio"
                value={opcao}
                onChange={formatarRespostaUnica}
              />
              <label>{opcao}</label>
            </li>
          ))}
        </ul>
      );
      break;
    default:
      tipoResposta = (
        <textarea
          className="newCard-texto"
          placeholder="Digite aqui a sua resposta!"
          value={respostaTexto}
          onChange={formatarRespostaTexto}
        >
          {/* {resposta} */}
        </textarea>
      );
      break;
  }

  return (
    <div className={'col-md-8 card text-white'}>
      <div className="newCard-sombra">
        {/* <img src="url_da_imagem.jpg" className="card-img-top" alt="Imagem do Card" /> */}
        <div className="card-body">
          <h5 className="card-title">{parTitulo}</h5>
          <p className="card-text">{parConteudo}</p>
        </div>
      </div>

      <div>
        <form className="newCard-pergunta">{tipoResposta}</form>
      </div>
    </div>
  );
}

export default CardPergunta;
