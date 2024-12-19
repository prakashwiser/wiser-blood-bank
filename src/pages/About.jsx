import React from "react";
import { Col, Row, Container } from "react-bootstrap";  // Make sure this import is correct
import Text from "../Components/Text";
import Div from "../Components/Div";
import Image from "../Components/Image";
import banner from "../assets/About-banner-img.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img5 from "../assets/img5.jpg";
import { RiEmojiStickerLine } from "react-icons/ri";
import Navbars from "../Components/Navbar";

const banners = {
  backgroundImage: `url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "450px",
};

const navbarStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  width: '750px',
  zIndex: 1000,
  boxShadow: '0 8px 14px rgba(26, 25, 25, 0.7)',
};

const image1 = "https://cdn.britannica.com/32/191732-050-5320356D/Human-red-blood-cells.jpg";

function About() {
  return (
    <>
      <Navbars />
      <Div>
        <Div style={banners} className="d-flex justify-content-center align-items-center">
          <Text
            style={navbarStyles}
            css="fs-1 fw-bold text-center text-white shadow-md"
            text="Every Blood Donor Is A Lifesaver"
          />
        </Div>
        <Container>
          <Row className="mt-5">
            <Col lg={1}></Col>
            <Col lg={10}>
              <Div>
                <Row>
                  <Col lg={6}>
                    <Image src={image1} alt="Red blood cells" className="w-100 rounded-3" />
                  </Col>
                  <Col lg={6} className="d-flex justify-content-center flex-column">
                    <Text text="Mission" css="fs-3 fw-bold" />
                    <Text
                      css="fs-6"
                      text="To contribute towards the problem of shortage of blood in India by raising awareness and improving donor experience and thereby, become a 360-degree solution provider."
                    />
                    <Text text="Vision" css="fs-3 fw-bold mt-3" />
                    <Text text="Reach Blood Sufficient India through Voluntary Blood Donations." />
                  </Col>
                </Row>
                <br />
              </Div>
              <Text text="History" css='fs-3 text-center my-3' />
              <Text text="We at BloodConnect live by the motto of saving lives by ensuring every drop of blood contributes towards the right cause of saving lives. A mission started by young IITians (Delhi), BloodConnect commenced operations on 1st April 2010 as a project under National Service Scheme (NSS) chapter. Soon, the young team lived by the fact that blood cant be manufactured in factories and committed themselves towards connecting generous donors to the donees." />
              <br />
              <Text text="They worked around-the-clock towards this cause, and in no time, BloodConnect became a full- scale NGO with a mission of solving the problem of blood shortage in India. The organization now caters to any requirement pertaining to blood and by uniting people in need of blood to voluntary blood donors." />
              <Div>
                <Div className="d-flex fs-2 justify-content-center mt-3 my-4">
                  <Text text="Our" className="fs-3" />
                  <Text css="text-danger ms-1" text="Activities" className="fs-3" />
                </Div>
                <Text text="Since its inception, BloodConnect has developed a 360-degree solution to cater to the problem of blood shortage in the country. The model revolves around four focal points:" />
                <br />
                <Row>
                  <Col lg={6}>
                    <ul>
                      <li>
                        <Text text="Ensuring continuous, sufficient blood supply to blood banks through blood donation camps and weekly donations" />
                      </li>
                      <li className="mt-2">
                        <Text text="Increasing awareness by organizing Street Plays, Info-Talks, Competitions" />
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6}>
                    <ul>
                      <li>
                        <Text text="Helping those in dire need by operating an emergency 24x7 helpline" />
                      </li>
                      <li className="mt-3">
                        <Text text="Establishing a network of youth across the country to lead the movement" />
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Div>
            </Col>
            <Col lg={1}></Col>
          </Row>
          <Row className="mt-5">
            <Col lg={2}></Col>
            <Col lg={2}>
              <Image src={img1} className='w-100 h-100 rounded-5' />
            </Col>
            <Col lg={2} className="my-3 my-md-0">
              <Image src={img2} className='w-100 h-100 rounded-5' />
            </Col>
            <Col lg={2}>
              <Image src={img3} className='w-100 h-100 rounded-5' />
            </Col>
            <Col lg={2} className="mt-3 mt-md-0">
              <Image src={img5} className='w-100 h-100 rounded-5' />
            </Col>
            <Col lg={2}></Col>
            <Text css='fs-2 text-center text-danger fw-bolder footer-logo my-3 my-md-5' text='Help us make India Blood Sufficient ...' />
          </Row>
        </Container>

      </Div>
    </>
  );
}

export default About;
