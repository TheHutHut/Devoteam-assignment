import { above, below } from 'styles/mediaQuery';
import Avatar from 'components/Avatar';
import CardHeading from './Heading';
import CardText from './Text';
import styled from 'styled-components';
import EmailIcon from 'components/Icon/email';
import PhoneIcon from 'components/Icon/phone';
import theme from 'styles/theme';

const Wrapper = styled('div')`
    position: relative;
    width: 320px;
    height: 100px;
    background-color: ${({ color }) => color};
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

    ${above.desktop} {
        width: 749px;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        background-color: ${theme.colors.white};
        height: 100%;
        width: calc(100% - 58px);
        right: 0;
        border-radius: 42px 20px 20px 0px;

        ${above.desktop} {
            width: calc(100% - 73px);
        }
    }
`;

const ContentWrapper = styled('div')`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 2;
    padding-right: 21px;
    padding-left: 18px;

    ${above.desktop} {
        padding-right: 33px;
        padding-left: 31px;
    }
`;

const AvatarWrapper = styled('div')`
    width: 80px;
    height: 80px;
    margin-right: 11px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

    ${above.desktop} {
        margin-right: 11px;
    }
`;

const InfoWrapper = styled('div')`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: space-between;

    ${below.desktop} {
        padding-top: 15px;
        padding-bottom: 13px;
        flex-direction: column;
    }

    ${above.desktop} {
        align-items: center;
    }
`;

const TextWrapper = styled('div')`
    ${above.desktop} {
        height: 100%;
        padding-top: 26px;
    }
`;

const StyledHeading = styled(CardHeading)`
    font-size: 18px;
    line-height: 21px;

    ${above.desktop} {
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 3px;
    }
`;

const StyledText = styled(CardText)`
    font-size: 13px;
    line-height: 16px;

    ${above.desktop} {
        font-size: 14px;
        line-height: 17px;
    }
`;
const IconWrappers = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: bottom;
`;

const StyledEmailIcon = styled(EmailIcon)`
    margin-right: 10px;
    width: 19px;
    height: 19px;

    ${above.desktop} {
        width: 22px;
        height: 22px;
    }
`;

const StyledPhoneIcon = styled(PhoneIcon)`
    width: 19px;
    height: 19px;

    ${above.desktop} {
        width: 22px;
        height: 22px;
    }
`;

export default function HorizontalCard({ data, color, ...rest }) {
    const { name, picture, location } = data;
    const fullName = `${name.first} ${name.last}`;
    const src = picture.thumbnail;
    const city = location.city;

    return (
        <Wrapper color={color} {...rest}>
            <ContentWrapper>
                <AvatarWrapper>
                    <Avatar src={src} />
                </AvatarWrapper>
                <InfoWrapper>
                    <TextWrapper>
                        <StyledHeading>{fullName}</StyledHeading>
                        <StyledText>{city}</StyledText>
                    </TextWrapper>
                    <IconWrappers>
                        <StyledEmailIcon />
                        <StyledPhoneIcon />
                    </IconWrappers>
                </InfoWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}
