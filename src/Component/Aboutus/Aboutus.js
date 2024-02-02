import { Container,Row,Col } from "react-bootstrap";

function Aboutus() {
    return(

        <div className="Aboutus">
            <Container>
                <Row className="mt-5">
                    <Col>
                        <div className="ab-info1 fw-bold mb-2">
                            <span>Aboutus</span>
                        </div>
                        <div className="ab-info2">
                        <h3>Best Digital Agency devoguru </h3>
                        </div>
                        <div className="ab-info3">
                        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel
                            sint commodi repudiandae
                            consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
                        </p>
                        </div>
                        <div className="ab-info4 mt-5">
                        <a class="ab-btn-main ">Read More</a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="ab-img">
                            <img src={require(`./image/asset 2.png`)}></img>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    );
}
export default Aboutus;