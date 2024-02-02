import { Row, Col, Container } from "react-bootstrap";


function Slider() {
    return (

        <div className="slider">
            <Container>
            <Row>
                <Col lg={6} md={6}>
                    <div className="sl-info1">
                        <span>Your Trusted Digital Agency</span>
                    </div>
                    <div className="sl-info2 mt-3">
                    <h3>Boost Your Product <span>Grow</span> 10x Faster</h3>
                    </div>
                    <div className="sl-info3 mt-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                        </p>
                    </div>
                    <div className="sl-info4 mt-3">
                        <p>Watch The Video</p>
                    </div>
                </Col>


                <Col lg={6} md={6}>
                    <div>
                        <img src={require(`./image/asset 1.png`)}></img>
                    </div>

                </Col>

            </Row>
            </Container>

        </div>
    );
}
export default Slider;