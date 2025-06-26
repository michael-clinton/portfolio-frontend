import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem clamp(1rem, 5vw, 10rem);
  background-color: #21212150;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Red Hat Display', sans-serif;
    color: #fff;
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    gap: 0.4rem;
    white-space: nowrap;

    span {
      font-size: inherit;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    a {
      color: #fff;
      padding: 0.5rem 0.8rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      font-size: clamp(1.1rem, 1.5vw, 1.4rem);
      transition: filter 0.25s ease;
      white-space: nowrap;

      &.button {
        padding: 0.6rem 1.8rem;
        background-color: var(--pink);
        border-radius: 0.4rem;
      }

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  .menu-container {
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu {
    width: 2rem;
    height: 0.2rem;
    background: #fff;
    position: relative;
    cursor: pointer;
    display: none;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: #fff;
      transition: 0.6s;
    }

    &:before {
      bottom: 0.5rem;
    }

    &:after {
      top: 0.5rem;
    }

    &.active {
      background-color: transparent;
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }
  }

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;

    &:after {
      content: '';
      background: #fff;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 4px;
      transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    }
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  @media (max-width: 960px) {
    .menu {
      display: block;
    }

    nav {
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--green);
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      gap: 2rem;
      padding: 4rem 2rem;

      &.active {
        opacity: 1;
        visibility: visible;
      }

      a.button {
        background-color: var(--pink);
        margin-top: 2rem;
      }
    }
  }
`;
