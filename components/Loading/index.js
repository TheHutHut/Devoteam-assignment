import styled from 'styled-components';

const Wrapper = styled('div')``;

export default function Loading({ number, children, className, customFunction, ...rest }) {
    return (
        <Wrapper className={className} {...rest}>
            <h5>Loading...</h5>
        </Wrapper>
    );
}
