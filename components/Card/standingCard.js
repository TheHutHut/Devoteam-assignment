import { above } from 'styles/mediaQuery';
import Avatar from 'components/Avatar';
import CardHeading from 'components/Heading/h3';
import CardText from 'components/Text';
import styled from 'styled-components';
import EmailIcon from 'components/Icon/email';
import PhoneIcon from 'components/Icon/phone';
import theme from 'styles/theme';

const Wrapper = styled('div')`
    position: relative;
    width: 135px;
    height: 220px;
    background-color: ${theme.colors.white};
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${above.desktop} {
        width: 210px;
        height: 342px;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        background-color: ${({ color }) => color};
        width: 50%;
        height: 100%;
        left: 0;
        bottom: 0;
        border-radius: 42px 0px 0px 20px;
    }
`;

const InnerWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;

    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        z-index: 1;
    }

    &::before {
        width: 100%;
        height: 50%;
        background-color: ${({ color }) => color};
        right: 0;
        top: 0;
        border-radius: 20px 20px 42px 0px;
    }
    &::after {
        background-color: ${theme.colors.white};
        width: 100%;
        height: 50%;
        left: 0;
        bottom: 0;
        border-radius: 42px 0px 20px 20px;
    }
`;

const ContentWrapper = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 20px;
    z-index: 2;
    padding-top: 33px;

    ${above.desktop} {
        padding-top: 65px;
    }
`;

const StyledHeading = styled(CardHeading)`
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin-bottom: 16px;

    ${above.desktop} {
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 35px;
    }
`;

const AvatarWrapper = styled('div')`
    margin: 0 auto;
    width: 80px;
    height: 80px;
    margin-bottom: 7px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

    ${above.desktop} {
        width: 100px;
        height: 100px;
        margin-bottom: 31px;
    }
`;

const StyledText = styled(CardText)`
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    margin-bottom: 11px;

    ${above.desktop} {
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 20px;
    }
`;
const IconWrappers = styled('div')`
    margin: 0 auto;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledEmailIcon = styled(EmailIcon)`
    margin-right: 10px;
    width: 14px;
    height: 14px;

    ${above.desktop} {
        width: 22px;
        height: 22px;
    }
`;

const StyledPhoneIcon = styled(PhoneIcon)`
    width: 12px;
    height: 12px;

    ${above.desktop} {
        width: 22px;
        height: 22px;
    }
`;

export default function StandingCard({ data, color, ...rest }) {
    const { name, picture, location } = data;
    const fullName = `${name.first} ${name.last}`;
    const src = picture.thumbnail;
    const city = location.city;

    return (
        <Wrapper color={color} {...rest}>
            <InnerWrapper color={color}>
                <ContentWrapper>
                    <StyledHeading>{fullName}</StyledHeading>
                    <AvatarWrapper>
                        <Avatar src={src} />
                    </AvatarWrapper>
                    <StyledText>{city}</StyledText>
                    <IconWrappers>
                        <StyledEmailIcon />
                        <StyledPhoneIcon />
                    </IconWrappers>
                </ContentWrapper>
            </InnerWrapper>
        </Wrapper>
    );
}
