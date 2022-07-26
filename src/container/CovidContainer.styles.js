import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 1630px;
    padding-right: 30px;
    padding-left: 30px;
    margin: 0 auto;
    @media (max-width: 944px) {
        padding: 0;
    }
`;

const Loader = styled.div`
    width: calc(100vw - 60px);
    height: 100vh;
    background: black;
    position: absolute;
    z-index: 20;
    top: 0;
    opacity: 0.3;
`;

export {
  Loader
}

export default Wrapper;