import { Container, Row,Col } from "react-bootstrap";

function Blog() {
    return(

        <div className="blog mt-5">
            <Container>
                <Row >
                    <Col sm={12}  md={4}>
                    <div class="card mt-3">
                        <div className="bl-img">
                        <img src={require(`./image/asset 7.png`)} ></img>
                        </div>
                        <div class="content">
                                <h3>what is digital Markting why important
                                </h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Magnam labore nihil impedit rerum. Illo quibusdam quos nobis praesentium.</p>
                            <a  class="bl-link">
                                Read More <i class="fas la-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    </Col>
                    <Col sm={12} md={4}>
                    <div class="card mt-3">
                        <div className="bl-img">
                        <img src={require(`./image/asset 8.png`)} ></img>
                        </div>
                        <div class="content">
                                <h3>what is digital Markting why important
                                </h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Magnam labore nihil impedit rerum. Illo quibusdam quos nobis praesentium.</p>
                            <a  class="bl-link">
                                Read More <i class="fas la-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    </Col>
                    <Col sm={12} md={4}>
                    <div class="card mt-3">
                        <div className="bl-img">
                        <img src={require(`./image/asset 9.png`)} ></img>
                        </div>
                        <div class="content">
                                <h3>what is digital Markting why important
                                </h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Magnam labore nihil impedit rerum. Illo quibusdam quos nobis praesentium.</p>
                            <a  class="bl-link">
                                Read More <i class="fas la-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>

        </div>

    );
}
export default Blog;