import styled from "styled-components";

const HeaderWrapper = styled.div`
    height: 70px;
    display: flex;
    background-color: #008dc9;
    border-bottom: 1px solid #e3e7e9;
`;
const HeaderIcon = styled.div`
    margin: auto 10px;
`;

const HeaderImg = styled.img`
    width: 50px;
    height: 50px;
`;
const HeaderText = styled.div`
    font-size: 32px;
    margin: auto 10px;
    color: #fff;

    @media (max-width: 944px) {
        font-size: 24px;
    }
`;

export {
  HeaderWrapper,
  HeaderIcon,
  HeaderText,
  HeaderImg
}