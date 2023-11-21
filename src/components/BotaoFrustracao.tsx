import { useEffect, useState } from 'react';
import { ModalFrustracao } from './ModalFrustracao';
import api from '../servicos/api';
import '../estilos/Botao.css';
import '../estilos/ModalFrustracao.css';
import Pergunta from '../views/Pergunta';

interface BotaFrustracaoProps {
  
  usuario : {
    parNome: string;
    parCpf: string;
  },
  pergunta: {
    perguntaId: number;
    parTema: string;
    parPergunta: string;
    parResposta: string[];
    parDica: string[];
    parDificuldade: number;
  };
}

export default function BotaoFrustracao({ usuario, pergunta }: BotaFrustracaoProps) {
  const [contador, setContador] = useState(0);
  const [pararContagem, setPararContagem] = useState(false);
  const [modal, setModal] = useState(false);

  console.log('Pergunta aqui: ' + pergunta.parResposta);

  useEffect(() => {
    setContador(0);
  }, [pergunta.perguntaId]);

  useEffect(() => {
    let intervalId: any;

    if (!pararContagem) {
      intervalId = setInterval(() => {
        setContador((prevContador) => prevContador + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [pararContagem]);

  async function guardarInfo (parNome: string, parCpf: string, parTema: string, parPerguntaId: number, parPergunta: string, parResposta: string[], parDificuldade: number) {
    setPararContagem(true);
    setModal(true);
    
    let cpf = parCpf.replaceAll('.', '').replaceAll('-', '');
    let respostaMesclada = parResposta.join(';');
    console.log(parNome, cpf, parTema, parPerguntaId, parPergunta, respostaMesclada, parDificuldade, contador);
    const result = await api.post('/frustracao', {parNome, cpf, parTema, parPerguntaId, parPergunta, respostaMesclada, parDificuldade, contador},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
    console.log(result);
    return result.data;
  };

  return (
    <>
      <ModalFrustracao
        open={modal}
        onClose={() => {
          setModal(false);
          setPararContagem(false);
        }}
        dicas={pergunta.parDica}
      />

      <button
        className="w-20 btn-base rounded"
        onClick={() => guardarInfo(usuario.parNome, usuario.parCpf, pergunta.parTema, pergunta.perguntaId, pergunta.parPergunta, pergunta.parResposta, pergunta.parDificuldade)}
      >
        Estou Frustrado {contador}
      </button>
    </>
  );
}
