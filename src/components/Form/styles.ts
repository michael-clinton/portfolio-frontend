import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 300;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 400;
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    input,
    textarea {
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: 1px solid #FFF;
      background: none;
      color: white;
      font-weight: 300; /* Made thinner */
      font-family: 'Red Hat Display', sans-serif;

      &::placeholder {
        color: #FFF;
        font-weight: 300;
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1rem 6rem;
      text-transform: uppercase;
      font-weight: 400;
    }
  }

  @media (max-width: 740px) {
    form {
      width: 100%;

      input,
      textarea {
        width: 100%;
      }
    }
  }
`;

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 300;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
    font-weight: 400;
  }
`;
