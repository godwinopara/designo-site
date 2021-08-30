import styled from "styled-components";

const ProjectContainer = styled.section`
  margin-top: 9.6rem;
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
  }
`;

const Project = styled.div`
  min-height: 478px;
  margin-bottom: 4rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    min-height: 320px;
  }

  @media screen and (min-width: 1024px) {
  }
`;

const ProjectImg = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  height: 320px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
    border-radius: 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`;

const ProjectDetails = styled.div`
  background: ${({ theme }) => theme.secondaryColors.veryLightPeach};
  height: 158px;
  line-height: 26px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.primaryColors.peach};
    color: ${({ theme }) => theme.primaryColors.white};
  }
  :hover h3 {
    color: ${({ theme }) => theme.primaryColors.white};
  }
  p {
    width: 85%;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.primaryColors.peach};
    margin: 1.6rem 0;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 320px;
    width: 50%;
    border-radius: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;

const DesignContainer = styled.div`
  margin-top: 10rem;
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export {
  DesignContainer,
  ProjectContainer,
  ProjectImg,
  ProjectDetails,
  Project,
};
