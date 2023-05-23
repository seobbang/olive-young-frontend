import { useState } from 'react';
import { styled } from 'styled-components';

import { CheckBigCheckedIcon, CheckBigIcon, CheckBigNotCheckedIcon, ShoppingCartIcon } from '../../assets/icon';

const DeliveryCheck = () => {
  const [deliveryCheck, setDeliveryCheck] = useState(true);
  const [progressAmount, setProgressAmount] = useState('100%');
  return (
    <St.DeliveryCheckContainer>
      <St.OliveyoungDelivery deliveryCheck={deliveryCheck}>
        <div className="delivery">
          <label>
            <input
              type="checkbox"
              checked={deliveryCheck}
              onChange={() => {
                setDeliveryCheck(!deliveryCheck);
                setProgressAmount(progressAmount === '0%' ? '100%' : '0%');
              }}
            />
            <h3>올리브영 배송</h3>
          </label>
          <span>무료 배송</span>
        </div>
        <St.Buttons>
          <button type="button">오늘드림 이동</button>
          <button type="button">선택삭제</button>
        </St.Buttons>
      </St.OliveyoungDelivery>

      <St.ProgressBar progressAmount={progressAmount}>
        <div className="progressBarContainer">
          <progress max="100"></progress>
        </div>
        <img src={ShoppingCartIcon} alt="쇼핑 카트 아이콘"></img>
      </St.ProgressBar>
    </St.DeliveryCheckContainer>
  );
};

export default DeliveryCheck;

const St = {
  DeliveryCheckContainer: styled.div`
    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme.colors.gray_900};
    box-shadow: 0 0.1rem 0 rgba(0, 0, 0, 0.05);
  `,
  OliveyoungDelivery: styled.div<{ deliveryCheck: boolean }>`
    display: flex;
    justify-content: space-between;

    margin: 1.2rem 1.2rem 0 1.8rem;

    ${({ theme }) => theme.fonts.Title2};

    .delivery {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      span {
        ${({ theme }) => theme.fonts.SubTitle2};
        color: ${({ theme }) => theme.colors.gray_700};
      }
    }

    input {
      width: 2.4rem;
      height: 2.4rem;
      margin: 0;

      appearance: none;
      border-right: 0;
      background-image: url(${({ deliveryCheck }) => (deliveryCheck ? CheckBigCheckedIcon : CheckBigNotCheckedIcon)});
    }
  `,
  Buttons: styled.div`
    display: flex;
    gap: 0.4rem;

    button {
      vertical-align: center;

      height: 2.4rem;
      padding: 0.5rem 0.7rem;

      border-radius: 0.4rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
      color: ${({ theme }) => theme.colors.gray_700};
      background: none;
      ${({ theme }) => theme.fonts.SubTitle4};
    }
  `,
  ProgressBar: styled.aside<{
    progressAmount: string;
  }>`
    display: flex;
    gap: 0.8rem;
    align-items: center;

    margin: 0 1.9rem 1.3rem 1.8rem;

    progress {
      opacity: 0;
    }
    .progressBarContainer {
      position: relative;
      background: #eee;
      height: 0.6rem;
      width: 100%;
      border-radius: 2rem;
      overflow: hidden;
    }

    .progressBarContainer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 0.6rem;
      width: 100%;
      width: ${({ progressAmount }) => progressAmount};
      border-radius: 2rem;
      background: ${({ theme }) => theme.colors.red_300};

      transition: all ease-in-out 2s 0s;
    }
  `,
};
