import { Card, Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Name from "./components/Name"
import Price from "./components/Price"
import Description from "./components/Description"
import Image from "./components/Image"

const firstName = "user" // Change this to your first name or leave it empty

function App() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="product-card">
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Image />
                </Col>
                <Col md={8}>
                  <Name />
                  <Price />
                  <Description />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <div className="mt-3 text-center">
            <p>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</p>
            {firstName && <img src="https://www.icegif.com/wp-content/uploads/2023/08/icegif-228.gif" alt="Welcome" className="welcome-image" />}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App

