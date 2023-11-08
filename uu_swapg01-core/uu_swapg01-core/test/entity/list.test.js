import UuSwapCore from "uu_swapg01-core";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`UuSwapCore.Entity.List`, () => {
  testProperties(UuSwapCore.Entity.List, CONFIG);
});
