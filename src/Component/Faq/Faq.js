import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
function Faq() {
    return (
        <div className="faq">
            <h1 className='text-center mb-5'>Frequently Asked Questions</h1>
            <Container>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is digital markting?</Accordion.Header>
                        <Accordion.Body>
                            digital markting dolor sit amet consectetur adipisicing elit. Laudantium, itaque earum! Obcaecati ex odit aperiam suscipit. Eveniet culpa praesentium incidunt quod fugit dolore molestiae explicabo exercitationem magnam minus, quia esse!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is digital markting?</Accordion.Header>
                        <Accordion.Body>
                            digital markting dolor sit amet consectetur adipisicing elit. Laudantium, itaque earum! Obcaecati ex odit aperiam suscipit. Eveniet culpa praesentium incidunt quod fugit dolore molestiae explicabo exercitationem magnam minus, quia esse!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is digital markting?</Accordion.Header>
                        <Accordion.Body>
                            digital markting dolor sit amet consectetur adipisicing elit. Laudantium, itaque earum! Obcaecati ex odit aperiam suscipit. Eveniet culpa praesentium incidunt quod fugit dolore molestiae explicabo exercitationem magnam minus, quia esse!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>What is digital markting?</Accordion.Header>
                        <Accordion.Body>
                            digital markting dolor sit amet consectetur adipisicing elit. Laudantium, itaque earum! Obcaecati ex odit aperiam suscipit. Eveniet culpa praesentium incidunt quod fugit dolore molestiae explicabo exercitationem magnam minus, quia esse!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>What is digital markting?</Accordion.Header>
                        <Accordion.Body>
                            digital markting dolor sit amet consectetur adipisicing elit. Laudantium, itaque earum! Obcaecati ex odit aperiam suscipit. Eveniet culpa praesentium incidunt quod fugit dolore molestiae explicabo exercitationem magnam minus, quia esse!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
}
export default Faq;