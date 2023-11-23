import { useQuerySui } from "./SuiHooks";
import { render, renderHook } from "@testing-library/react-native";

describe("Test SuiHooks", () => {
  it("verify useSuiGetOwnedObjects is returning appropriate objects", async () => {
    const { result } = renderHook(() => useQuerySui());
    const { data } = await result.current.getOwnedObjects(
      "0x36e127e0a376ba265ad8ff5ef8db9277a9753daec5c59f3d66bd6b1fa168a3fa"
    );
    console.log("data", data);
  });
});
