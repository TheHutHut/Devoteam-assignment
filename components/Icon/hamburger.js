import styled from 'styled-components';

const Svg = styled('svg')``;

export default function HamburgerIcon({ ...rest }) {
    return (
        <Svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M20 19.8H2C1.44772 19.8 1 19.3523 1 18.8C1 18.2478 1.44772 17.8 2 17.8H20C20.5523 17.8 21 18.2478 21 18.8C21 19.3523 20.5523 19.8 20 19.8Z"
                fill="black"
                stroke="black"
                strokeLinecap="round"
            />
            <path
                d="M20 11.4H2C1.44772 11.4 1 10.9523 1 10.4C1 9.84774 1.44772 9.40002 2 9.40002H20C20.5523 9.40002 21 9.84774 21 10.4C21 10.9523 20.5523 11.4 20 11.4Z"
                fill="black"
                stroke="black"
                strokeLinecap="round"
            />
            <path
                d="M20 3H2C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1L20 1C20.5523 1 21 1.44772 21 2C21 2.55228 20.5523 3 20 3Z"
                fill="black"
                stroke="black"
                strokeLinecap="round"
            />
        </Svg>
    );
}
