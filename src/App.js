import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Container, Popover, OverlayTrigger } from "react-bootstrap";

function App(props) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previous) => previous + 1);
  }

  function decrement() {
    setCount((previous) => previous - 1);
  }

  //Cria o texto para o icone "?"
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Projeto contador</Popover.Header>
      <Popover.Body>
        Olá <strong>seja bem-vindo(a)</strong> ao meu projeto. Esse meu projeto
        é bem simples, só queria testar meu conhecimentos no React, caso queira
        ver o código desse projeto, acesse meu GitHub
      </Popover.Body>
    </Popover>
  );
  //Cria a animação para botão com o icone "?"
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">?</Button>
    </OverlayTrigger>
  );

  return (
    <div className="App">
      <header className="App-header">
        <div class="rectangle">
          <span class="result">{count}</span>
        </div>

        <br />
        <span>
          <Button onClick={increment} variant="outline-success">
            +1
          </Button>{" "}
          <Button onClick={decrement} variant="outline-danger">
            -1
          </Button>{" "}
          <Example />
        </span>
      </header>
    </div>
  );
}

export default App;
