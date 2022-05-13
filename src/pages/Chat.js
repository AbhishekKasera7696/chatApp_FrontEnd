// import React from 'react';
// import {Container, Row, Col} from "react-bootstrap";
// import Sidebar from "../components/Sidebar";
// import MessageForm from "../components/MessageForm";


// function Chat() {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Sidebar md={4}/>
//         </Col>
//         <Col>
//           <MessageForm md={8}/>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default Chat



// import React from 'react';
// import {Container, Row, Col} from 'react-bootstrap';
// import MessageForm from '../components/MessageForm';
// import SideBar from '../components/Sidebar';

// const Chat = () => {
//   return (
//     <Container>
//       <Row>
//         <Col md={4}>
//           <SideBar />
//         </Col>
//         <Col md={8}>
//           <MessageForm />
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default Chat





import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MessageForm from '../components/MessageForm';
import SideBar from '../components/Sidebar';

const Chat = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <SideBar />
        </Col>
        <Col md={8}>
          <MessageForm />
        </Col>
      </Row>
    </Container>
  )
}

export default Chat
