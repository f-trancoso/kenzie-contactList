import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;
`

const modalAppear = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-30%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Container = styled.div`
    background-color: var(--background);

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 7px;

    margin: 0px;
    padding-bottom: 1rem;

    width: 90%;
    min-height: 300px;
    max-height: fit-content;
    animation: ${modalAppear} 0.3s ease-in-out;

    @media (min-width: 768px) {
        height: max-content;
        max-width: 520px;
        padding-bottom: 1.5rem;
        border-radius: 4px;
        gap: 16px;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;

    width: 100%;
    height: 40px;

    padding: 20px;

    @media (min-width: 768px) {
        height: 50px;
    }

    h3 {
        color: var(--text1);
    }

    .close-button {
        background-color: transparent;
        border: none;
        color: var(--text1);
        cursor: pointer;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 90%;
    margin: 0px;

    @media (min-width: 768px) {
        gap: 16px;
        width: 100%;
        height: 100%;
    }
`