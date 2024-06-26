import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, skills, education, hobbies, achievements, services, areasOfInterest, leadership, softSkills } from "../../content_option";
import { Slide } from "react-awesome-reveal";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Slide direction="right" triggerOnce>
          <Row className="sec_sp fadeInUp">
            <Col lg="5">
              <h3 className="color_sec py-4">{dataabout.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{dataabout.aboutme}</p>
              </div>
            </Col>
          </Row>
        </Slide>

        <Slide direction="right" triggerOnce>
          <Row className="sec_sp fadeInUp">
            <Col lg="5">
              <h3 className="color_sec py-4">Skills</h3>
            </Col>
            <Col lg="7">
              <Row>
                {skills.map((data, i) => (
                  <Col key={i} sm={3} className="skill-item">
                    <div className="skill-logo-container">
                      <img src={data.img} alt={data.name} className="skill-logo" />
                      <h4 className="skill-title">{data.name}</h4>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Slide>

        <Slide direction="right" triggerOnce>
          <Row className="sec_sp fadeInUp">
            <Col lg="5">
              <h3 className="color_sec py-4">Areas of Interest</h3>
            </Col>
            <Col lg="7">
              {areasOfInterest.map((data, i) => (
                <div key={i} className="interest-item d-flex align-items-center mb-3">
                  <img src={data.url} alt={data.title} className="interest-logo mr-3" />
                  <h4 className="interest-title">{data.title}</h4>
                </div>
              ))}
            </Col>
          </Row>
        </Slide>

        <Slide direction="right" triggerOnce>
          <Row className="sec_sp fadeInUp">
            <Col lg="5">
              <h3 className="color_sec py-4">Education</h3>
            </Col>
            <Col lg="7">
              {education.map((data, i) => (
                <div key={i} className="education-item">
                  <h4 className="education-degree">{data.degree}</h4>
                  <p className="education-score">{data.score}</p>
                  <p className="education-university">{data.university}</p>
                  <p className="education-year">{data.year}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Slide>

        <Slide direction="right" triggerOnce>
          <Row className="sec_sp fadeInUp custom-margin-right">
            <Col lg="5">
              <h3 className="color_sec py-4">Hobbies</h3>
            </Col>
            <Col lg="7">
              <div className="d-flex flex-wrap">
                {hobbies.map((data, i) => (
                  <div key={i} className="hobby-item px-3">
                    <img src={data.img} alt={data.name} className="hobby-icon py-4" />
                    <div>
                      <h4 className="hobby-title d-flex p-6">{data.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Slide>

        <Slide direction="right" triggerOnce>
          <Row className="sec_sp fadeInUp">
            <Col lg="5">
              <h3 className="color_sec py-4">Achievements</h3>
            </Col>
            <Col lg="7">
              {achievements.map((data, i) => (
                <div key={i} className="achievement-item">
                  <h2 className="achievement-title">{data.title}</h2>
                  <p className="achievement-description">{data.description}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Slide>

        <Slide direction="right" triggerOnce>
          <Row className="sec_sp fadeInUp">
            <Col lg="5">
              <h3 className="color_sec py-4">Leadership</h3>
            </Col>
            <Col lg="7">
              {leadership.map((data, i) => (
                <div key={i} className="leadership-item">
                  <h4 className="leadership-role">{data.role}</h4>
                  <p className="leadership-organization">{data.organization}</p>
                  <p className="leadership-year">{data.year}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Slide>

        <Slide direction="right " triggerOnce>
          <Row className="sec_sp fadeInUp">
            <Col lg="5">
              <h3 className="color_sec py-4">Soft Skills</h3>
            </Col>
            <Col lg="7">
              <ul className="soft-skills-list">
                {softSkills.map((skill, i) => (
                  <li key={i} className="soft-skill-item">{skill}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Slide>

      </Container>
    </HelmetProvider>
  );
};
