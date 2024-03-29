import React, { useState } from 'react';
import { Copy } from 'tabler-icons-react';

type CopyButtonProps = {
  text: string;
};
type CopyButtonText = 'Copy' | 'Copied';
const CopyButton = ({ text }: CopyButtonProps) => {
  const [state, setState] = useState<CopyButtonText>('Copy');
  return (
    <div
      className="flex gap-2 items-center cursor-pointer p-1 hover:dark:bg-secondary-700 active:dark:bg-secondary-600 hover:bg-primary-400 active:bg-primary-200 rounded-tr-md"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setState('Copied');
        setTimeout(() => {
          setState('Copy');
        }, 4000);
      }}
    >
      <p className="select-none">{state}</p>
      <Copy />
    </div>
  );
};

export default CopyButton;
