import styled from 'styled-components'
import colors from 'styles/colors'

export const Container = styled.div<{ checked: Boolean }>`
    min-width: 350px;
    min-height: 602px;

    box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 363px;
        margin-top: 36px;
    }

    .down {
        height: 187px;
        background: ${colors.tertiary};
        border-top: 2px solid ${colors.secondary};
        border-radius: 0 0 10px 10px;
        margin-top: auto;

        display: flex;
        flex-direction: column;
        place-items: center;

        .name {
            font-size: 14px;
            line-height: 16px;
            color: ${colors.primary};

            margin: 24px auto 11px 36px;
        }

        .price {
            color: ${colors.primary};
            font-size: 18px;
            font-weight: 900;
            line-height: 21px;

            margin: auto auto 24px 36px;
        }

        button {
            width: 240px;
            height: 52px;

            background: ${props => props.checked ? colors.primary : colors.secondary};
            color: #FFF;
            outline: none;

            border: none;
            border-radius: 5px;
            margin-bottom: 21px;

            font-weight: 900;
            font-size: 18px;
            line-height: 21px;

            cursor: pointer;

            display: flex;
            place-items: center;
            justify-content: ${props => props.checked ? 'space-between' : 'center'};

            padding: 17px;
            
            img {
                width: 68px;
                height: 79px;
                overflow-y: visible;
                transform: translate(10px, -32px);
            }
        }
    }

    @media screen and (max-width: 600px) {
        min-width: 236.5px;
        min-height: 423px;

        .down {
            height: 141.23px;
            
            button {
                width: 162.17px;
                height: 35.14px;
            }
        }
    }
`
