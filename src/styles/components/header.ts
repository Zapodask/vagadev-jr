import styled from 'styled-components'
import colors from 'styles/colors'

export const Container = styled.div`
    max-width: 1189px;
    
    height: 35px;

    margin: 0 auto;
    
    color: #FFF;

    display: flex;
    justify-content: space-between;

    .leftSide {
        display: flex;
        gap:40px;
        
        .dropdown {
            img {
                height: 100%;
            }

            .arrow {
                display: none;
                width: 0;

                border:18.37px solid transparent;
                border-bottom-color: ${colors.secondary};
            }

            .content {
                display: none;
                position: absolute;
                transform: translate(-30px);
                
                width: 565px;

                background-color: ${colors.primary};
                box-shadow: 10px 10px 0 0 ${colors.secondary};
                
                border-radius: 5px;
                border: 2px solid ${colors.secondary};
                padding: 45px 60px 39.48px 30px;

                .box {
                    display: flex;

                    div {
                        width: 100%;

                        b {
                            font-size: 1rem;
                            line-height: 19px;
                            padding-left: 16px;
                        }

                        a {
                            float: none;
                            display: block;

                            color: #FFF;
                            text-decoration: none;
                            font-size: 14px;
                            line-height: 16px;

                            border-radius: 5px;
                            padding: 12px 16px;
                            margin: 5px;

                            &:hover {
                                background: ${colors.secondary};
                            }
                        }
                    }
                }
            }

            &:hover {
                .content {
                    display: block;
                }
                .arrow {
                    display: block;
                }
            }
        }

        .logo {
            margin: auto 0 0 0;

            width: 163px;
            height: 35px;
        }

        @media screen and (max-width: 600px) {
            gap: 20px;

            .arrow {
                &:hover {
                    display: none;
                }
            }

            .content {
                width: 100%;
                height: 100%;

                top: 0;

                border: 0;
                border-radius: none;
                box-shadow: none;

                .box {
                    flex-direction: column;

                    div {
                        a {
                            font-size: 1rem;
                        }
                    }
                }
            }
            
            .logo {
                width: 107px;
                height: 23px;
            }
        }
    }
    .rightSide {
        display: flex;

        button {
        display: flex;

        background: none;
        border: none;

        color: #FFF;

        cursor: pointer;

        img {
            max-height: 26px;
        }

        label {
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            
            margin: auto 15px;

            cursor: inherit;

            @media screen and (max-width: 600px) {
            display: none;
            }
        }

        .circle {
            width: 23px;
            height: 23px;

            background: ${colors.secondary};

            border: none;
            border-radius: 50%;
            margin-left: 5px;

            font-weight: 900;
            font-size: 14px;
            line-height: 16px;

            display: grid;
            place-items: center;

            @media screen and (max-width: 600px) {
            margin-left: 0;
            transform: translate(-7px);
            }
        }
        }

        .line {
        width: 30px;
        height: 0;

        border: 1px solid #FFF;

        transform: rotate(90deg);
        margin: auto 0;

        }
    }

    @media screen and (max-width: 600px) {
        margin: 0 13px 0 18px;
        height: 29.24px;

        .rightSide {
        img {
            margin-left: 16.03px;
        }

        .line {
            display: none;
        }
        }
    }

    @media screen and (max-width: 1200px) {
        margin: 0 30px;


    }
`
