import styled from 'styled-components'
import colors from './colors'
import Modal from 'styled-react-modal'

interface FrameProps {
  image: string
  mobileImage: string
}

export const Frame = styled.div<FrameProps>`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 840px;

  display: flex;

  .info {
    width: 420px;
    height: 327px;

    display: flex;
    flex-direction: column;

    text-align: right;

    margin: 209px 20% 0 auto;

    .title {
      font-weight: 900;
      font-size: 46px;
      line-height: 54px;
      color: #FFF;
    }

    .price {
      margin: 0 0 28px auto;

      font-weight: 900;
      font-size: 70px;
      line-height: 82px;
      color: ${colors.secondary};

      display: flex;

      .cents {
        font-weight: 900;
        font-size: 28px;
        line-height: 33px;
      }
    }

    .description {
      color: #FFF;
      font-size: 16px;
      line-height: 155%;
    }
  }

  @media screen and (max-width: 600px) {
    background-image: url(${props => props.mobileImage});
    min-height: 600px;
    width: 100%;

    .info {
      width: 100%;
      height: 260px;

      background: rgba(0, 0, 0, 0.65);

      margin: auto 0 0 0;
      padding: 14px 29px 0 29px;

      .title {
        font-size: 26px;
        line-height: 30px;

        margin-bottom: 10.66px;
      }

      .price {
        margin-bottom: 0;
      }

      .description {
        font-size: 12px;
      }
    }
  }
`

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  padding-top: 44px;

  .banner {
    display: flex;

    .pagination {
      width: 63px;
      height: 384px;

      color: #FFF;

      margin: 133px 0 95px auto;
      border-radius: 0 0 0 10px;

      display: flex;
      flex-direction: column;

      .sideA {
        height: 300px;
        background: ${colors.secondary};

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
          writing-mode: vertical-rl;
          margin: 30px auto 0 auto;

          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
        }

        .line {
          height: 77px;
          width: 1px;
          border: 1px solid ${colors.primary};

          margin: 0 auto 22px auto;
        }
      }

      .sideB {
        height: 84px;
        background: ${colors.primary};
        border-radius: inherit;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        place-items: center;

        p {
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;

          margin-top: 23px;
        }
        
        .arrows {
          margin-bottom: 17.14px;

          img {
            height: 17.86px;
            width: 10.01;
            margin: 10px;

            cursor: pointer;
          }
        }
      }

      @media screen and (max-width: 600px) {
        min-width: 100% ;
        height: 52px;

        flex-direction: row;

        margin: 500px 0 25px 0;

        .sideA {
          width: 100%;
          height: inherit;

          border-bottom-left-radius: 10px;

          p {
            writing-mode: horizontal-tb;

            margin: auto auto auto 22px;
          }

          .line {
            display: none;
          }
        }

        .sideB {
          width: 140px;
          height: inherit;

          flex-direction: row;
          justify-content: center;

          border-radius: 0;

          p {
            font-size: 14px;
            line-height: 16px;
            margin: auto 0;
          }

          .arrows {
            margin: auto 0;

            img {
              width: 10.01px;
              height: 17.86px;
            }
          }
        }
      }
    }
  }

  .banners {
    max-width: 1274px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, 627px);
    grid-gap: 20px;
    justify-content: center;
  }

  .spotlight {
    max-height: 42px;
    max-width: 1274px;

    margin: 83px auto 80px auto;

    display: flex;
    place-items: center;

    font-weight: 300;
    font-size: 36px;
    line-height: 42px;

    .square {
      height: 40px;
      max-width: 40px;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      margin-right: 19px;

      .point {
        width: 5.6px;
        height: 5.6px;

        background: ${colors.secondary};

        border-bottom-left-radius: 5px;
        margin: 2.8px;
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 18px;
      line-height: 21px;

      margin: 42px auto 31px 22px;

      .square {
        height: 21px;
        max-width: 21px;

        .point {
          width: 3.6px;
          height: 3.6px;

          margin: 1.8px
        }
      }
    }
  }

  .products {
    max-width: 1116px;

    display: grid;
    grid-template-columns: repeat(auto-fit, 350px);
    grid-gap: 16.5px;

    margin: 0 auto 171px auto;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    .banners {
      max-width: 600px;
      margin: 0;
    }

    .products {
      grid-template-columns: 20px 300px 20px;

      svg {
        width: 15.01px;
        height: 26.8px;

        margin: auto 0;
      }

      .frame {
        border-radius: 10px;
        overflow: hidden;

        padding: 2px;
        box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
      }
    }
  }
`

interface ModalProps {
  opacity: number
}

export const StyledModal = styled(Modal)<ModalProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
`
