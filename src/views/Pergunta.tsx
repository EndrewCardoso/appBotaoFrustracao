import { useState } from 'react';

function Pergunta() {

  const [pergunta, setPergunta]=useState();

  return (
    <section>

      <div className="w-100 btn-group d-flex column-end">
        <button type="button" className="btn-base rounded">1</button>
        <button type="button" className="btn-base rounded">2</button>
        <button type="button" className="btn-base rounded">3</button>
      </div>
    </section>
  );
}

export default Pergunta;