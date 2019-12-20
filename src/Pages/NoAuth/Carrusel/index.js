import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import { Box } from '@material-ui/core'

export default function CarouselPage() {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption className="carruselCaption">
              <Box fontSize={28} bgcolor="text.secondary" m={1}>
                <p>First text</p>
                <Box fontSize={16}>
                  <p>First text</p>
                </Box>
              </Box>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <Box fontSize={28} bgcolor="text.secondary" m={1}>
                <p>First text</p>
                <Box fontSize={16}>
                  <p>First text</p>
                </Box>
              </Box>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Box fontSize={28} bgcolor="text.secondary" m={1}>
                <p>First text</p>
                <Box fontSize={16}>
                  <p>First text</p>
                </Box>
              </Box>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}