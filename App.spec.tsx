import { render } from "@testing-library/react-native";
import App from "./App";

describe("Testing App", () => {
  it("App loads without error", async () => {
    render(<App />);
  });
});
