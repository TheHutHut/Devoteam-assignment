import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
`;

const AvatarImage = styled(Image)`
    vertical-align: middle;
    border-radius: 50%;
`;

export default function Avatar({ src, ...rest }) {
    return (
        <Wrapper {...rest}>
            <AvatarImage alt="Picture of the author" src={src} layout="fill" objectFit="cover" />
        </Wrapper>
    );
}
