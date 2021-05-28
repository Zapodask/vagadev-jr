import styled from 'styled-components'
import colors from 'styles/colors'

export const Container = styled.div`
    width: 627px;
    height: 425px;

    display: grid;
    grid-template-rows: 368px 61px;

    border-radius: 0 0 5px 5px;

    margin: 0 auto;

    img {
        width: 100%;
        height: 100%;
    }

    div {
        display: grid;
        grid-template-columns: 10px auto;
        border-radius: inherit;

        &:nth-child(1) {
            background: ${colors.primary};
            border-radius: 0 0 0 5px;
        }

        &:nth-child(2) {
            width: 100%;
            background: ${colors.secondary};
            
            display: flex;
            justify-content: space-between;

            p {
                margin: auto auto auto 19px;
                color: ${colors.primary};
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 19px;
                white-space: nowrap;
            }
            .line {
                max-width: 248px;
                height: 0;
                border: 1px solid ${colors.primary};
                border-radius: 5px;

                margin: auto 26px auto auto;
            }
        }
    }

    @media screen and (max-width: 630px) {
        width: 334.97px;
        height: 219px;

        grid-template-rows: 190.88px 31.64px;

        div:nth-child(2) {
            p {
                font-size: 12px;
                line-height: 14px;

                margin-right: 10px;
            }

            .line {
                width: 90%;
                margin-right: 13.62px;
            }
        }
    }

`
