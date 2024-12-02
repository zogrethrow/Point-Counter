import {Dispatch, SetStateAction} from "react";

const Modal = ({ title, isActive, closeModal, children, footer }: { title: string; isActive: boolean; closeModal: Dispatch<SetStateAction<boolean>>; children: React.ReactNode; footer: React.ReactNode | undefined }) => {
  return (
    <div className={`modal ${isActive ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-card p-5">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={()=> closeModal(false)}></button>
        </header>
        <section className="modal-card-body">
          { children }
        </section>
        <footer className="modal-card-foot">
          { footer }
        </footer>
      </div>
    </div>
  )
}

export default Modal;