import styled from 'styled-components'

const StyledSelect = styled.select`
    appearance: none;
    background-color: white;
    border: none;
    border-radius: var(--border-radius-default);
    box-shadow: rgba(9,30,66,0.12) 0 10px 24px,
                rgba(9,30,66,0.08) 0  4px  4px;
    display: block;
    font-size: 1.6rem;
    line-height: 2em;
    margin: var(--s-sm) 0 0;
    outline: 2px solid transparent; // WHCM support
    padding: var(--s-xs) var(--s-md);
    width: auto;

    &:focus {
        box-shadow: rgba(9,30,66,0.12) 0 10px 24px,
                    rgba(9,30,66,0.08) 0  4px  4px,
                    rgba(41,116,227,1) 0  0    0   2px;
    }
`

export default StyledSelect
