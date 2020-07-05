import { useState, useCallback, SyntheticEvent } from 'react';

export const useAnimateHeight = (
  initialHeight: number
): [
  string | number,
  (e: SyntheticEvent) => void,
  (e: SyntheticEvent) => void,
  (e: SyntheticEvent) => void
] => {
  const [height, setHeight] = useState<string | number>(initialHeight);

  const openAnimateHeightBlock = useCallback(() => setHeight('auto'), [
    setHeight,
  ]);

  const closeAnimateHeightBlock = useCallback(() => setHeight(initialHeight), [
    setHeight,
    initialHeight,
  ]);

  const handleToggle = useCallback(() => {
    if (height === initialHeight) {
      openAnimateHeightBlock();
    } else {
      closeAnimateHeightBlock();
    }
  }, [height, initialHeight, openAnimateHeightBlock, closeAnimateHeightBlock]);

  return [
    height,
    handleToggle,
    openAnimateHeightBlock,
    closeAnimateHeightBlock,
  ];
};
