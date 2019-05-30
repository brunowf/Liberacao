
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Daniel

import React, { Component } from '../../../node_modules/react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/antd/dist/antd.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "../../../node_modules/mdbreact";
import '../../css/styles.css';
import "../../img/joana.jpg";









export default class AlunosLiberadosSaida extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <MDBContainer style={{ marginTop: 50, marginBottom: 50 }} >
        <MDBRow >
          <MDBCol size="12" md="12" lg="12" className="white z-depth-3 py-2 px-2 card">
            <MDBRow >
              <MDBCol size="4" md="6" lg="4" className="white z-depth-3 py-2 px-2 card">
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage className="img-fluid" src="https://static.wixstatic.com/media/cfbb87_a82560ea45434bf5a02ed0b87803be4d~mv2.jpg/v1/fill/w_616,h_825,al_c,q_90/file.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>JOANA</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
          </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol size="4" md="6" lg="4" className="white z-depth-3 py-2 px-2 card">
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage className="img-fluid" src="https://odia.ig.com.br/_midias/jpg/2019/04/14/whatsapp_image_2019_04_14_at_13_55_47__1_-10670380.jpeg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>MARIA</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
          </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol size="4" md="6" lg="4" className="white z-depth-3 py-2 px-2 card">
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage className="img-fluid" src="https://www.superprof.com.br/imagens/anuncios/professor-home-ola-sou-estudante-engenharia-civil-ufsc-joinville-gostaria-ajuda-matematica-fisica-quimica.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>ALBERTO</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
          </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>


            <MDBRow >
              <MDBCol size="4" md="6" lg="4" className="white z-depth-3 py-2 px-2 card">
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage className="img-fluid" src="http://s2.glbimg.com/XTdgmiwnRQ7hCcedp1OR49rHe9M=/620x465/s.glbimg.com/jo/g1/f/original/2016/01/09/julia.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>JULIA</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
          </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol size="4" md="6" lg="4" className="white z-depth-3 py-2 px-2 card">
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage className="img-fluid" src="http://s.glbimg.com/jo/g1/f/original/2011/10/22/cracha.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>BRENO</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
          </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol size="4" md="6" lg="4" className="white z-depth-3 py-2 px-2 card">
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage className="img-fluid" src="https://www.superprof.com.br/imagens/anuncios/professor-home-estudante-curso-historia-oferece-aulas-historia-geral-atualidades-para-vestibulandos-historia-moderna-historia.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>VINICIUS</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
          </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    );
  }
}




