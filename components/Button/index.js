import styled from 'styled-components';

const ButtonWrapper = styled('button')`
    cursor: pointer;
    width: auto;
    user-select: none;
    display: inline-block;
    border: none;
    padding: 0px;
    background-color: transparent;
`;

const Button = ({ children, disabled, onClick, className, ...rest }) => {
    return (
        <ButtonWrapper className={className} onClick={disabled ? null : onClick} {...rest}>
            {children}
        </ButtonWrapper>
    );
};

export default Button;
