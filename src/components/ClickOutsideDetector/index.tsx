import {useEffect, useRef} from 'react';

type ClickOutsideDetectorProps = React.ComponentProps<'div'> & {
  onClickOutside: () => void;
};

export const ClickOutsideDetector = ({onClickOutside, children, ...divProps}: ClickOutsideDetectorProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(
    function addEventListenerForDetectClickOutside() {
      const handleClickOutside = (event: MouseEvent) => {
        const targetNode = event.target as Node;

        if (targetRef.current && !targetRef.current.contains(targetNode)) {
          onClickOutside();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [onClickOutside, targetRef],
  );

  return (
    <div ref={targetRef} {...divProps}>
      {children}
    </div>
  );
};
