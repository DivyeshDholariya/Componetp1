import { Container, Row, Col } from "react-bootstrap";

function Client() {
    return (
        <div className="client mt-9">
            <Container>
                <h3 class="cl-title mt-5 mb-5">Clients Says!</h3>
                <Row>
                <Col>
                        <div class="card mt-3">
                            <div class="cl-info">
                                <img src={require(`./image/asset 3.png`)} alt="client"></img>
                            </div>
                            <div className="text mt-3">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti unde
                                    ratione doloribus optio</p>
                                <h3>Jhon Flok</h3>
                                <p>Ceo Founder</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card mt-3">
                            <div class="cl-info">
                                <img src={require(`./image/asset 4.png`)} alt="client"></img>
                            </div>
                            <div className="text mt-3">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti unde
                                    ratione doloribus optio</p>
                                <h3>Jesiya Leo</h3>
                                <p>Ceo Founder</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card mt-3">
                            <div class="cl-info">
                                <img src={require(`./image/asset 5.png`)} alt="client"></img>
                            </div>
                            <div className="text mt-3">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti unde
                                    ratione doloribus optio</p>
                                <h3>Devid Flok</h3>
                                <p>Ceo Founder</p>
                            </div>
                        </div>
                    </Col>
                
                </Row>
            </Container>
        </div>
    );
}
export default Client;