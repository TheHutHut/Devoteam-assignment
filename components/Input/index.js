import styled from 'styled-components';

const InputWrapper = styled('input')`
    outline: none;
    border: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`;

const Input = ({ className, onChange, ...rest }) => {
    return <InputWrapper onChange={onChange} className={className} {...rest}></InputWrapper>;
};

export default Input;
