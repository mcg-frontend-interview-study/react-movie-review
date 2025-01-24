import {useEffect, useRef} from 'react';
import {fetchNextAreaStyle} from './style';

type InfinityScrollPluginProps = React.PropsWithChildren & {
  callback: () => void;
};

export const InfinityScrollPlugin = ({callback, children}: InfinityScrollPluginProps) => {
  const areaRef = useRef<HTMLDivElement>(null);

  useEffect(
    function observeArea() {
      const observer = new IntersectionObserver(
        entries => {
          if (!entries[0].isIntersecting) return;
          callback();
        },
        {threshold: 0.7},
      );

      if (areaRef?.current) {
        observer.observe(areaRef.current);
      }

      return () => {
        if (areaRef?.current) {
          observer.unobserve(areaRef.current);
        }
      };
    },
    [callback, areaRef],
  );

  return (
    <>
      {children}
      <div ref={areaRef} css={fetchNextAreaStyle} />
    </>
  );
};
