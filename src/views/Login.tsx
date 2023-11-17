import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/Login.css';
import '../estilos/Botao.css';

function Login() {
  const navigate = useNavigate();

  const [nome, setNome] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');

  function fazerLogin() {
    localStorage.setItem(
      '@app_tcc_user',
      JSON.stringify({
        nome,
        cpf,
      })
    );
    navigate('/questoes');
  }

  return (
    <div className="div-corpo-login">
      <div>
        <label htmlFor="name_input">Nome</label>
        <input
          type="text"
          id="name_input"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          className="input-texto"
        />
      </div>

      <div>
        <label htmlFor="cpf_input">CPF</label>
        <input
          type="text"
          id="cpf_input"
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
          className="input-texto"
        />
      </div>

      <button className="btn-base btn-login rounded" onClick={fazerLogin}>
        Entrar
      </button>
    </div>
  );
}

export default Login;
