import styled from 'styled-components';
import defaultImage from "../images/room-1.jpeg"
const StyleHero = styled.header`
    min-height: calc(60vh - 66px);
    background: url(${(props => props.img ? props.img : defaultImage)}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default StyleHero 