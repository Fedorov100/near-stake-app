import { ButtonBase } from "@mui/material";
import styled, { css } from "styled-components";

export const buttonBaseStyle = css`
    outline: none;

    border: 0;
    height: 42px;
    border-radius: 21px;

    cursor: pointer;

    user-select: none;

    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.actionButton.textColor};
`;

/**
 * Styled component of the `<ButtonBase />` of the Material-UI
 *
 * @see https://material-ui.com/api/button-base/
 */
export const BorderButton = styled(ButtonBase).attrs({ disableRipple: true })`
    ${buttonBaseStyle};

    font-weight: 860;
    color: #cebfbf;
    border: 1px solid #cebfbf;

    &:hover {
        border: 1px solid #cebfbf;
        background-color: ${({ theme }) => theme.hoverBackgroundColor};
        color: ${({ theme }) => theme.borderButton.hoverTextColor};
    }

    &:disabled {
        opacity: 0.3;
    }
`;
