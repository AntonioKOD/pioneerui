import { SpinningText } from "../pioneerui/spinning-text";


export function SpinningTextDemo() {
  return (
    <SpinningText
    variants={{
      container: {
        visible: { rotate: 360, scale: [1, 1.1, 1] },
      },
    }}
    duration={10}
    style={{ fontSize: "3rem" }}
    radius={4}
  >
    Pioneer UI
  </SpinningText>
  );
}


