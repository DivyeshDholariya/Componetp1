import { Container, Row, Col } from "react-bootstrap";

function Contact() {
    return (
        <div className="Contact mt-5">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div class=" col-12 my-auto aos-init aos-animate" >
                            <div class="row justify-content-center m-auto">
                                <div class="col-xl-12">
                                    <form class="contact-form">
                                        <div class="row g-4">
                                            <div className="main d-flex">
                                                <div class=" form-group">
                                                    <input type="text" name="text" class="form-control" placeholder="Enter Full Name*" width={'100%'}></input>
                                                </div>
                                                <div class=" form-group">
                                                    <input type="email" name="email" class="form-control" placeholder="Enter Your Email*" width={'100%'}></input>
                                                </div>
                                            </div>
                                            <div className="main d-flex">
                                                <div class=" form-group">
                                                    <input type="number" name="number" class="form-control" placeholder="Enter Your Number*" width={'100%'}></input>
                                                </div>
                                                <div class=" form-group">
                                                    <input type="text" name="text" class="form-control" placeholder="Subject*" width={'100%'}></input>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 form-group">
                                                <textarea class="form-control text-area" placeholder="Enter Your Message*" rows="3"></textarea>
                                            </div>
                                            <div class="col-lg-12 form-group text-center mt-4">
                                                <button type="submit" class="co-btn-main w-100">Send
                                                    Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="co-img">
                            <img src={require(`./image/contact.png`)}></img>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}
export default Contact;