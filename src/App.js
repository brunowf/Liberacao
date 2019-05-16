import React from 'react';
import {Container, Row, Col ,Nav} from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { slide as Menu } from 'react-burger-menu'

export default class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
// function App() {
//   return (

//     <Row>
//       <Nav defaultActiveKey="/home" className="flex-column">
//         <Container>
//           <Nav.Link disabled>Cadastro</Nav.Link>
//             <Container>
//               <Nav.Link >Usuario</Nav.Link>
//               <Nav.Link>Professor</Nav.Link>
//               <Nav.Link>Aluno</Nav.Link>
//               <Nav.Link>Turma</Nav.Link>
//             </Container>
//           <Nav.Link disabled>Horário</Nav.Link>
//         </Container>
//       </Nav>
//       <Container>
//         asdasd
//       </Container>
//     </Row>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//   );
// }

// export default App;
