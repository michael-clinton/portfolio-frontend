import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  padding: 0 1rem;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 300;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: #fff;
    font-weight: 300;

    @media (max-width: 480px) {
      font-size: 2.8rem;
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .project {
    padding: 2rem 1.8rem;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: 300;

    &:hover {
      transform: translateY(-8px);
      background-color: var(--pink);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--blue);
      margin-bottom: 3.6rem;

      svg {
        flex-shrink: 0;
      }

      .project-links {
        display: flex;
        align-items: center;
        gap: 1rem;

        a {
          display: inline-flex;
          align-items: center;
        }

        a > img {
          width: 4.5rem;
          transition: transform 0.2s ease;
          &:hover {
            transform: scale(1.1);
          }

          @media (max-width: 480px) {
            width: 3.5rem;
          }
        }
      }
    }

    .body {
      flex-grow: 1;
    }

    h3 {
      margin-bottom: 1.5rem;
      font-size: 2.2rem;
      color: var(--green);
      font-weight: 300;

      @media (max-width: 480px) {
        font-size: 1.8rem;
      }
    }

    p {
      letter-spacing: 0.12rem;
      margin-bottom: 2rem;
      color: #e0e0e0;
      font-size: 1.5rem;
      font-weight: 300;

      @media (max-width: 480px) {
        font-size: 1.3rem;
      }

      a {
        color: #fff;
        border-bottom: 1px solid var(--green);
        transition: color 0.25s ease;
        &:hover {
          color: var(--green);
        }
      }
    }

    footer {
      margin-top: auto;

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.5rem;
        font-size: 1.4rem;
        opacity: 0.8;
        color: #b0b0b0;
        font-weight: 300;

        @media (max-width: 480px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
