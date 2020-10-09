import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const portalElement = document.getElementById('portal') as HTMLElement;

type Portal = {
  children: ReactNode;
};

export const Portal = ({ children }: Portal) => {
  return ReactDOM.createPortal(children, portalElement);
};
