import { EffectCallback, DependencyList, useRef, useEffect } from "react";

export const useDidMountEffect = (
  func: EffectCallback,
  deps: DependencyList
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};

interface ItemProps {
  id: number;
}
// Sometimes the item order changes, messing up pagination. In those cases
// the duplicated items returned needs to be removed
export function removeDuplicates(
  item: ItemProps,
  index: number,
  arr: ItemProps[]
) {
  return arr.findIndex((current) => current.id === item.id) === index;
}
