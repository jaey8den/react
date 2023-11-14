import Button from "./components/Button";
import DismissAlert from "./components/DismissAlert";
import { Transition } from "react-transition-group";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const showAlert = () => setAlertVisibility(true);
  const hideAlert = () => setAlertVisibility(false);
  const nodeRef = useRef(null);

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
  };

  const transitionStyles = {
    // entering: { opacity: 1 },
    // entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const colorSelection = "success";

  return (
    <>
      <div>
        <Transition nodeRef={nodeRef} in={alertVisible} timeout={duration}>
          {(state) => (
            <div
              ref={nodeRef}
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              <DismissAlert onClose={() => hideAlert()} />
            </div>
          )}
        </Transition>
      </div>
      <div>
        <Button onClick={() => showAlert()} color={colorSelection}>
          Show Alert
        </Button>
      </div>
    </>
  );
}

export default App;
