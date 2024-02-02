import { Container,Row,Col } from "react-bootstrap";

function Soultion() {
    return(

        <div className="Soultion mb-5 ">
            <Container>
                <Row className="mt-5">
                    <Col>
                        <div className="so-info1 fw-bold mb-2">
                        <p class="so-title">Best Soultion</p>
                        </div>
                        <div className="so-info2">
                        <h3>You Can Find All Things On Our Best Solution</h3>
                        </div>
                        <div className="so-info3 md-3">
                        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel
                            sint commodi repudiandae
                            consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
                        </p>
                        </div>
                        <div className="so-info4 mt-5">
                        <a  class="so-btn-main mt-4">Contact Now</a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="ab-img">
                            <img src={require(`./image/asset 6.png`)}></img>
                        </div>
                    </Col>
                </Row>
            </Container>

       

        </div>

    );
}
export default Soultion;