import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITEBACKGROUND_800};

    height: 56px;
    border: 0;
    padding: 0px 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disables {
        opacity: 0.5;
    }

    `;