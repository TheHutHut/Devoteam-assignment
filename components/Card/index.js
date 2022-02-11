import styled from 'styled-components';

const Wrapper = styled('div')``;

export default function Card({ ...rest }) {
    return <Wrapper {...rest}></Wrapper>;
}
