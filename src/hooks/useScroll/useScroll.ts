import { OverlayScrollbars, Options } from "overlayscrollbars";
import { useEffect, MutableRefObject } from "react";

const config = {};

const useScroll = (
  node: MutableRefObject<HTMLElement | null>,
  hasScroll: boolean
) => {
  let scrollbar: any;
  useEffect(() => {
    if (node.current && hasScroll) {
      scrollbar = OverlayScrollbars(node.current, config);
    }
    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, [node, hasScroll]);
};

export default useScroll;
