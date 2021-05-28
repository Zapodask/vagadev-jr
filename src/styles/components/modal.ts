import styled from 'styled-components'
import Modal from 'styled-react-modal'

export const StyledModal = styled(Modal)``

export const Container = styled.div`
  width: 400.21px;
  height: 500px;

  border-radius: 5px;

  background: #FFF;

  display: flex;
  flex-direction: column;

  .close {
    width: 36px;
    height: 36px;

    margin: 14px 13px 46px auto;

    cursor: pointer;
  }

  .message {
    height: 95px;

    background: linear-gradient(180deg, 
        rgba(0,0,0,0) calc(50% - 1px), 
        rgba(8, 65, 84, 1) calc(50%), 
        rgba(0,0,0,0) calc(50% + 1px)
    );

    .box {
      width: 261.14px;
      height: 79px;

      background: #FFF;

      margin: 20px auto;

      font-weight: 300;
      font-size: 30px;
      line-height: 35px;
      text-align: center;
    }
  }

  .mario {
    width: 217px;
    height: 279px;

    margin: auto auto 0 auto;
  }

  @media screen and (max-width: 600px) {
    max-width: 344px;
  }
`
