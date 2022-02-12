import CardStanding from 'components/Card/standingCard';
import HorizontalCard from 'components/Card/horizontalCard';
import theme from 'styles/theme';

const colorScheme = [
    theme.colors.green,
    theme.colors.sand,
    theme.colors.yellow,
    theme.colors.sand,
    theme.colors.yellow,
    theme.colors.green,
];

const CardsRender = ({ toggle, users }) => {
    let colorSchemeCount = 0;
    return (
        <>
            {users.map((user, index) => {
                const count = colorSchemeCount;
                colorSchemeCount === 5 ? (colorSchemeCount = 0) : colorSchemeCount++;

                return toggle ? (
                    <HorizontalCard key={index} data={user} color={colorScheme[count]} />
                ) : (
                    <CardStanding key={index} data={user} color={colorScheme[count]} />
                );
            })}
        </>
    );
};

export default CardsRender;
