import styled from 'styled-components';

const Svg = styled('svg')``;

export default function Arrow({ ...rest }) {
    return (
        <Svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M16.7005 6.92918C17.226 7.42551 17.226 8.22429 16.7005 8.72061C16.4377 8.96877 16.097 9.09286 15.7521 9.09286C15.4072 9.09286 15.0665 8.96877 14.8037 8.72061L10.1479 4.32347L10.1479 17.732C10.1479 18.43 9.54847 19 8.80535 19C8.06633 19 7.4628 18.4339 7.4628 17.732L7.4628 4.32347L2.81521 8.72061C2.28969 9.21694 1.44393 9.21694 0.918404 8.72061C0.392881 8.22429 0.392881 7.42551 0.918404 6.92918L7.86105 0.372244C8.1115 0.135713 8.45226 0 8.80946 0C9.16665 0 9.50742 0.131836 9.75786 0.372244L16.7005 6.92918Z"
                fill="black"
            />
        </Svg>
    );
}