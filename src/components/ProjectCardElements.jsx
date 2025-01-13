import styled from "@emotion/styled";

export const Card = styled.div`
  background: rgba(5, 0, 0, 0.3);
  box-shadow: 0 8px 32px 0 rgba(135, 47, 31, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px 0 solid rgba(255, 255, 255, 0.18);
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  font-family: "Share Tech Mono", monospace;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

// export const CardLeft = styled.div`
//   justify-self: center;
//   height: 100%;
//   background-color:yellow;
//   img {
//     object-fit: scale-down;
//   }
// `;

export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;  /* Or any other fixed height */
  width: 100%;
  transition: none;

  img {
    object-fit: cover;  /* Cover the container without distorting the image */
    width: 100%;
    height: 100%;
    transition: none;
  }
`;


export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.815);
  cursor: default;
  box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
`;
