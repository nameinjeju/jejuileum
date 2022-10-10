import styled, { css } from 'styled-components';

import { media } from 'src/styles/media';

export const Container = styled.div<{ height?: string }>`
  display: flex;
  height: ${(props) => props.height};
  justify-content: center;
  align-items: center;
  background-color: #003d99;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 30px;
`;

export const ResultTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.bold}, sans-serif;
  color: #ffffff;
  text-align: center;
  margin: 0;
  margin-top: 30px;
  font-size: 30px;
  line-height: 100%;
`;

export const ResultContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  margin-top: 30px;
  padding-top: 100%;
  background-color: #ffffff;
  filter: drop-shadow(rgb(0, 48, 120) 10px 10px 15px);

  > * {
    position: absolute;
  }
`;

export const SubTitle = styled.div`
  top: 0;
  left: 50%;
  width: calc(100% - 9rem);
  margin: 0;
  padding: 1rem 0 1rem 0;
  background-color: ${({ theme }) => theme.color.orange};
  border-radius: 0px 0px 1.75rem 1.75rem;
  font-family: 'GmarketSansMedium', sans-serif;
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 100%;
  text-align: center;
  transform: translate(-50%, 0);
  z-index: 99;
  scale: 1;

  ${media.mobile`
    width: calc(100% - 7.4rem);
  `}
`;

export const Title = styled.div`
  top: 50%;
  left: 50%;
  width: 100%;
  margin: 0;
  padding: 0 4rem;
  font-family: 'GmarketSansBold', sans-serif;
  text-align: center;
  font-size: 4rem;
  line-height: 100%;
  letter-spacing: -0.02em;
  transform: translate(-50%, -50%);
  z-index: 99;
  scale: 1;

  ${media.mobile`
    padding: 0 2.8rem;
    font-size: 3.6rem;
  `};
`;

export const BackgroundImg = styled.img<{ index: number }>`
  position: absolute;
  width: 100%;
  height: auto;

  ${({ index }) => {
    switch (index) {
      case 1:
        return css`
          top: 0;
          left: 0;
        `;
      case 2:
        return css`
          top: 0;
          right: 0;
        `;
      case 3:
        return css`
          bottom: 0;
          left: 0;
        `;
      case 4:
        return css`
          bottom: 20px;
          left: 50%;
          width: 5.875rem;
          transform: translateX(-50%);
        `;
    }
  }}
`;

export const ExplanationText = styled.div<{ opacity?: number }>`
  margin: 0;
  margin-top: 30px;
  color: #ffffff;
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;

  > strong {
    font-family: 'Pretendard-Regular', sans-serif;
    font-weight: normal;
    color: ${({ theme }) => theme.color.cyan};
  }

  > span {
    display: block;
    font-family: 'Pretendard-Regular', sans-serif;
  }

  ${({ opacity }) =>
    opacity &&
    css`
      margin-top: 26px;
      font-family: 'Pretendard-Light', sans-serif;
      font-weight: 300;
      opacity: ${opacity};

      > a {
        font-family: 'Pretendard-Light', sans-serif;
        color: #ffffff;
        text-decoration: underline;
      }
    `}
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 75px;
  margin-top: 30px;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.color.orange};
  border-radius: 10px;
  color: #ffffff;
  font-size: 26px;
  line-height: 100%;
  letter-spacing: -0.02em;

  > svg {
    display: inline-block;
    margin-top: -2px;
    vertical-align: middle;
  }
`;

export const ShareText = styled.p`
  margin-top: 40px;
  color: #ffffff;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.02em;
`;

export const ShareButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 64px;
  margin-top: 25px;

  button:not(:first-child) {
    margin-left: 15px;
  }
`;

export const ShareButton = styled.button<{ color: string }>`
  display: flex;
  width: 64px;
  height: 100%;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: ${({ color }) => color};
`;

export const RestartButton = styled.button`
  width: 100%;
  height: 75px;
  margin-top: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  color: #ffffff;
  font-size: 25px;
  line-height: 100%;
  letter-spacing: -0.02em;

  > svg {
    margin-top: -2px;
    vertical-align: middle;
  }
`;

export const DivideLine = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin: 40px 0;
  background-color: #002f77;

  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    opacity: 0.1;
  }
`;

export const LightText = styled.p`
  margin: 10px 0 40px 0;
  color: #ffffff;
  font-family: 'GmarketSansLight', sans-serif;
  line-height: 100%;
  opacity: 0.4;

  ${media.mobile`
    font-size: 16px;
  `}
`;

export const ResultFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
