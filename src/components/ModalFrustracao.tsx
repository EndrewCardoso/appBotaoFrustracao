import * as Dialog from '@radix-ui/react-dialog';
import '../estilos/Botao.css';

export function ModalFrustracao({ open, onClose, dicas }: any) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Overlay className="modal_overlay" />
      <Dialog.Content asChild>
        <div className="modal_container">

          <Dialog.Title className="modal_title">
            <p>O que é frustração?</p>

            <div>
              <img
                src="./frustration.png"
                alt="Frustração"
                className="modal_img"
              />
            </div>
          </Dialog.Title>
          <Dialog.Description className="modal_description" asChild>
            <div>
              <span>
                Sentir-se frustrado é uma emoção caracterizada por insatisfação,
                desconforto e impotência diante de obstáculos, metas não
                alcançadas ou situações desafiadoras. Essa emoção comum pode
                resultar em sentimentos como irritação, desapontamento e, em
                alguns casos, raiva. Lidar com a frustração envolve reconhecer e
                entender esses sentimentos, ajustar expectativas, buscar soluções
                e aprender com a experiência para seguir em frente de maneira
                construtiva.
              </span>
              {dicas?.map((dica: string) => (<p>{dica}</p>))}
            </div>
          </Dialog.Description>

          <footer className="modal_footer">
            <Dialog.Close asChild>
              <button className="btn-base btn-login">Tentar responder</button>
            </Dialog.Close>
          </footer>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
