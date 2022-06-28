import { useEffect, useRef, useState } from 'react';

const UseListVisibility = () => {
  const [show, setShow] = useState(false);
  const DropDownListRef = useRef<HTMLDivElement>(null);

  const handleDropDownVisibility = () => setShow((state) => !state);

  useEffect(() => {
    const handleMouseClick = (e: MouseEvent) => {
      if (show && !DropDownListRef?.current?.contains(e.target as Node)) {
        setShow(false);
      }
    };

    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, [show, DropDownListRef]);

  return { show, DropDownListRef, handleDropDownVisibility };
};

export default UseListVisibility;
