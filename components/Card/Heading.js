import styled from 'styled-components';
import theme from 'styles/theme';
import { above } from 'styles/mediaQuery';

const Heading = styled('h3')`
    color: ${theme.colors.text};
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
`;

export default function CardHeading({ children, ...rest }) {
    return <Heading {...rest}>{children}</Heading>;
}
