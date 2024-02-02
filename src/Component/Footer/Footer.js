import { Container } from "react-bootstrap";

import { FaFacebookF,FaInstagram,FaLinkedin,FaWhatsapp } from "react-icons/fa";


function Footer(params) {
    return(
        <div className="footer mt-5 pt-80 pb-40">
            <Container>
            <div class="row ">
                <div class="col-lg-6 col-md-5 col-12 mt-3">
                    <div class="row justify-content-start">
                        <div class="col-md-12 col-lg-11 mb-md-0 mb-4">
                            <div>
                                {/* <img class="footer-logo" src={require(`./image/asset 0.png`)}> </img>/ */}
                                <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                                    sapiente provident, explicabo cum </p>
                            </div>
                            <ul class="icon mt-4 d-flex ">

                                
                                    <a><i class="fo-icon me-2"><FaFacebookF></FaFacebookF></i></a>
                                
                                
                                    <a><i class="fo-icon me-2"><FaInstagram></FaInstagram></i></a>
                                
                                
                                    <a><i class="fo-icon me-2"><FaLinkedin></FaLinkedin></i></a>
                                
                                
                                    <a><i class="fo-icon me-2"><FaWhatsapp></FaWhatsapp></i></a>
                                
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-7 col-12">
                    <div class="row">
                        <div class="col-md-4 mb-md-0">
                            <h2 class="fo-top1">Support</h2>
                            <ul class="fo-list1">
                                <li><a class="py-1 d-block">About</a>
                                </li>
                                <li><a class="py-1 d-block">Blogs</a></li>
                                <li><a class="py-1 d-block">Free Support</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-md-0">
                            <h2 class="fo-top2">Useful Links</h2>
                            <ul class="fo-list2">
                                <li><a  class="py-1 d-block">Home</a></li>
                                <li><a  class="py-1 d-block">Price</a></li>
                                <li><a  class="py-1 d-block">Privacy</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-md-0">
                            <h2 class="fo-top3">Get in touch</h2>
                            <ul class="fo-list3">
                                <li><a class="py-1 d-block">+11 1212 13131</a></li>
                                <li><a class="py-1 d-block">101, New York, USA</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="d-lg-flex d-md-flex text-center justify-content-center pt-5 border-top">
                <div>
                    <p class="copyright">
                        Copyright © 2023 devoguru All rights reserved
                    </p>
                </div>
            </div>

            </div>
            </Container>
        </div>
    );
}
export default Footer;