import React, { useState, useEffect } from 'react';
import { above, below } from 'styles/mediaQuery';
import ArrowIcon from 'components/Icon/Arrow';
import Button from 'components/Button';
import dynamic from 'next/dynamic';
import HamburgerIcon from 'components/Icon/hamburger';
import H3 from 'components/Heading/h3';
import Input from 'components/Input';
import Loading from 'components/Loading';
import SearchIcon from 'components/Icon/Search';
import styled from 'styled-components';
import ThumbnailIcon from 'components/Icon/thumbnail';

const LazyCardsRender = dynamic(() => import('../components/Lazy/CardsRender'), {
    loading: () => <Loading />,
});

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

const SearchWrapper = styled('div')`
    width: 310px;
    margin-bottom: 17px;
    display: flex;

    ${below.desktop} {
        flex-wrap: wrap;
    }

    ${above.desktop} {
        width: 735px;
        margin-bottom: 18px;
    }
`;

const LayoutButtonWrapper = styled('div')`
    ${below.desktop} {
        display: flex;
        justify-content: end;
        order: 3;
        width: 50%;
    }
`;

const ArrowButtonWrapper = styled('div')`
    ${below.desktop} {
        order: 2;
        width: 50%;
    }
`;

const InputWrapper = styled('div')`
    display: flex;
    height: 24px;
    position: relative;

    ${below.desktop} {
        order: 1;
        width: 100%;
        margin-bottom: 20px;
        border-bottom: 2px solid #000;
    }

    ${above.desktop} {
        flex: 1;
        margin-left: 13px;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            width: 313px;
            border-bottom: 2px solid #000;
        }
    }
`;

const StyledInput = styled(Input)`
    margin-left: 5px;
    font-size: 18px;
    padding-bottom: 4px;
    width: 100%;

    ${above.desktop} {
        width: 313px;
        padding-bottom: 8px;
    }
`;

const StyledArrowIcon = styled(ArrowIcon)`
    transform: rotate(180deg);
`;

const InfoHeading = styled(H3)`
    font-size: 18px;
    line-height: 21px;
    margin-top: 20px;

    ${above.desktop} {
        font-size: 18px;
        line-height: 21px;
    }
`;

const CardWrapper = styled('div')`
    &.list {
        display: flex;
        flex-direction: column;

        & > div {
            margin-bottom: 15px;
            ${above.desktop} {
                margin-bottom: 18px;
            }
        }
    }

    &.grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 26px 35px;

        ${above.desktop} {
            grid-template-columns: repeat(3, 1fr);
            gap: 48px 57px;
        }
    }
`;

function SortArray(x, y) {
    const nameX = `${x.name.first} ${x.name.last}`;
    const nameY = `${y.name.first} ${y.name.last}`;

    if (nameX < nameY) {
        return -1;
    }
    if (nameX > nameY) {
        return 1;
    }
    return 0;
}

export default function Home({ users }) {
    const [toggle, setToggle] = useState(false);
    const [search, setSearch] = useState('');
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        filterArray(users);
    }, [search]);

    const filterArray = (users) => {
        const filteredUsers = users
            .filter((entry) => {
                const name = `${entry.name.first} ${entry.name.last}`;
                return name.toLowerCase().includes(search.toLowerCase());
            })
            .sort(SortArray);

        setUsersData(filteredUsers);
    };

    const reverseArray = () => {
        const reversed = usersData.reverse();
        setUsersData([...reversed]);
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };

    if (users === null || usersData === null) {
        return <Wrapper>Data missing</Wrapper>;
    }

    return (
        <Wrapper>
            <Header>
                <Heading>Meet the Team</Heading>
            </Header>
            <Body>
                <SearchWrapper>
                    <ArrowButtonWrapper>
                        <Button onClick={reverseArray}>
                            <StyledArrowIcon />
                            <ArrowIcon />
                        </Button>
                    </ArrowButtonWrapper>
                    <InputWrapper>
                        <SearchIcon />
                        <StyledInput onChange={(event) => setSearch(event.target.value)} />
                    </InputWrapper>
                    <LayoutButtonWrapper>
                        <Button onClick={handleToggle}>
                            {toggle ? <HamburgerIcon /> : <ThumbnailIcon />}
                        </Button>
                    </LayoutButtonWrapper>
                </SearchWrapper>
                {usersData.length === 0 ? (
                    <InfoHeading>No team member by that name</InfoHeading>
                ) : (
                    <CardWrapper className={toggle ? 'list' : 'grid'}>
                        <LazyCardsRender toggle={toggle} users={usersData} />
                    </CardWrapper>
                )}
            </Body>
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
