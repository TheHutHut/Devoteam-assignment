import styled from 'styled-components';
import theme from 'styles/theme';

const Wrapper = styled('div')`
    width: 100%;
    max-width: 1440px;
`;

const Header = styled('div')`
    margin: 0 auto;
    margin-top: 72px;
    margin-bottom: 32px;
    width: 310px;

    ${above.desktop} {
        width: 875px;
        margin-top: 75px;
        margin-bottom: 48px;
    }
`;

const Heading = styled('h1')`
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    color: #000000;
    font-size: 24px;
    line-height: 28px;

    ${above.desktop} {
        font-size: 48px;
        line-height: 56px;
    }
`;

const Body = styled('div')`
    width: 100%;
    margin-bottom: 71px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function Home({ users }) {
    console.log(users);
    if (users === null) {
        return <Wrapper>Data missing</Wrapper>;
    }
    return (
        <Wrapper>
            <Header>
                <Heading>Meet the Team</Heading>
            </Header>
            <Body></Body>
        </Wrapper>
    );
}

export const getStaticProps = async () => {
    // Call contentful API endpoint to get pages
    const url = 'https://randomuser.me/api/?results=50';
    const res = await fetch(url);

    if (res) {
        const data = await res.json();
        return {
            props: {
                users: data.results ? data.results : null,
            },
        };
    }
};
