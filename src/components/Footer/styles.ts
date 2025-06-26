import styled from "styled-components";

export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 300;

  .logo {
    font-size: 2.8rem;
    font-weight: 400;
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
    font-weight: 300;
    color: #e0e0e0;

    img {
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3rem;
    }
  }

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 800px) {
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 4rem 1rem;

    p {
      font-size: 1.2rem;
    }
  }
`;
