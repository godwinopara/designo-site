import React from "react";
import styled from "styled-components";
import { allImages } from "../components/images";
import Layout from "../components/layout";

const Locations = () => {
  return (
    <Layout pageTitle="Locations | Designo Offices">
      <LocationMainContainer className="container">
        <DesignoLocation>
          <Map
            mobileImage={allImages.locationPageImages.canadaMap}
            tabletImage={allImages.locationPageImages.canadaMapTablet}
            desktopImage={allImages.locationPageImages.canadaMap}
          ></Map>
          <DesignoLocationDetails>
            <Container>
              <h2>Canada</h2>
              <AddressDetails>
                <address>
                  <strong>Designo Central Office</strong>
                  <br />
                  3886 Wellington Street
                  <br />
                  Toronto, Ontario M9C 3J5
                  <br />
                </address>
                <address>
                  <strong>Contact </strong>
                  <br />
                  P : +1 253-863-8967
                  <br />
                  M : contact@designo.co
                  <br />
                </address>
              </AddressDetails>
            </Container>
          </DesignoLocationDetails>
        </DesignoLocation>
        <DesignoLocation>
          <Map
            mobileImage={allImages.locationPageImages.australiaMap}
            tabletImage={allImages.locationPageImages.australiaMapTablet}
            desktopImage={allImages.locationPageImages.australiaMap}
          ></Map>
          <DesignoLocationDetails>
            <Container>
              <h2>Australia</h2>
              <AddressDetails>
                <address>
                  <strong> Designo AU Office </strong>
                  <br />
                  19 Balonne Street <br />
                  New South Wales 2443
                  <br />
                </address>
                <address>
                  <strong>Contact</strong>
                  <br />
                  P : (02) 6720 9092
                  <br />
                  M : contact@designo.au
                  <br />
                </address>
              </AddressDetails>
            </Container>
          </DesignoLocationDetails>
        </DesignoLocation>
        <DesignoLocation>
          <Map
            mobileImage={allImages.locationPageImages.unitedKingdomMap}
            tabletImage={allImages.locationPageImages.unitedKingdomMapTablet}
            desktopImage={allImages.locationPageImages.unitedKingdomMap}
          ></Map>
          <DesignoLocationDetails>
            <Container>
              <h2>United Kingdom</h2>
              <AddressDetails>
                <address>
                  <strong>Designo UK Office</strong>
                  <br />
                  13 Colorado Way
                  <br />
                  Rhyd-y-fro SA8 9GA
                  <br />
                </address>
                <address>
                  <strong>Contact</strong>
                  <br />
                  P : 078 3115 1400
                  <br />
                  M : contact@designo.uk
                  <br />
                </address>
              </AddressDetails>
            </Container>
          </DesignoLocationDetails>
        </DesignoLocation>
      </LocationMainContainer>
    </Layout>
  );
};

export default Locations;

const LocationMainContainer = styled.main`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width: 1024px) {
    section:nth-of-type(odd) {
      flex-direction: row-reverse;
    }
  }
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const DesignoLocation = styled.section`
  @media screen and (min-width: 1024px) {
    max-height: 320px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.2rem;
  }
`;

const DesignoLocationDetails = styled.section`
  background-color: ${({ theme }) => theme.secondaryColors.veryLightPeach};
  background-image: url(${allImages.shared.twoCirclesBackgroundPattern});
  padding: 8rem 0;
  margin-bottom: 3.1rem;

  h2 {
    text-align: center;
    margin-bottom: 2.4rem;
    line-height: 36px;
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.primaryColors.peach};
  }
  address {
    margin-bottom: 2.4rem;
    font-style: normal;
    font-size: 1.6rem;
    text-align: center;
    line-height: 25px;
    color: ${({ theme }) => theme.secondaryColors.darkGrey};
  }

  @media screen and (min-width: 768px) {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    h2 {
      text-align: left;
      font-size: ${({ theme }) => theme.fontSize.minilarge};
    }

    address {
      text-align: left;
      width: 45%;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
    height: 100%;
    border-radius: 15px;
  }
`;

const AddressDetails = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Map = styled.div`
  height: 246px;
  width: 100%;
  background-image: url(${(props) => props.mobileImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-image: url(${(props) => props.tabletImage});
    height: 320px;
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${(props) => props.desktopImage});
    width: 35%;
    border-radius: 15px;
  }
`;
