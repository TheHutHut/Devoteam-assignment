import styled from 'styled-components';
import theme from 'styles/theme';

const Text = styled('p')`
    color: ${theme.colors.text};
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
`;

export default function CardText({ children, ...rest }) {
    return <Text {...rest}>{children}</Text>;
}
