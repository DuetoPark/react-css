import React from 'react';
import './App.css';
import styled, { css, keyframes } from 'styled-components';

/* [styled-components]
- 스타일 된 컴포넌트 생성

1. 기본형태
- styled.태그`스타일 코드`
- nested가 Sass와 유사 (&)
- attr은 태그에 넘겨주고, styled-component만의 props는 태그에 넘겨주지 않음
- css에 js코드 사용할 때, ${}로 묶어준다
*/
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 48px;
  width: 70%;
  padding: 48px;
  margin: 36px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 16px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #BF4F74;
`;

const Subtitle = styled.h3`
  width: 100%;
  padding-bottom: 8px;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

/* [styled-components]

2. Props
- style-component에만 전달하는 props는 달러($)를 붙인다.
- <Component $props이름>
- ${props => props.$props이름 ? a : b}
- ${props => props.$props이름 && css``}
*/
const Link = styled.a`
  font-size: 16px;
  color: ${props => props.$primary ? '#ff8f2e' : '#777'};
  transition: color 150ms ease-in-out;

  &:hover {
    color: ${props => props.$primary ? '#ffc897' : '#aaa'};
  }
`;

const Button = styled.button`
  height: 32px;
  padding: 0 16px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  transition: all 150ms ease-in-out;
  

  &:hover {
    color: #555;
  }

  ${props => props.$primary && css`
    background-color: #00ffc3;

    &:hover {
      background-color: #00deaa;
    }
  `}

  ${props => props.$outlined && css`
    border: 1px solid #00ffc3;

    &:hover {
      border-color: #00deaa;
    }
  `}
`;

/* [styled-components]

3. Extending Styles
- 위에 처럼 props로 구분하기 보다는 Style을 확장시켜서 사용하자
- style(기틀이 되는 컴포넌트)
*/
const BasicButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  transition: all 150ms ease-in-out;
  text-transform: capitalize;
`;

const PrimaryBtn = styled(BasicButton)`
  background-color: #b300ff;
  color: #fff;

  &:hover {
    background-color: #8e00ca;
  }
`;

const SecondaryBtn = styled(BasicButton)`
  background-color: #efefef;
  color: #555;

  &:hover {
    background-color: #ddd;
    color: #333;

  }
`;

const OutlinedBtn = styled(BasicButton)`
  border: 2px solid #b300ff;
  color: #b300ff;

  &:hover {
    border-color: #8e00ca;
    color: #8e00ca;
  }
`;

const GhostBtn = styled(BasicButton)`
  color: #b300ff;

  &:hover {
    color: #8e00ca;
  }
`;

/* [styled-components]

4. Passed props
*/
const TextInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: ${({$inputColor}) => $inputColor ? $inputColor : '#333'};
  transition: border-color 150ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    border-color: #aaa;
  }
`;

/* [styled-components]

5. &
- This라고 생각하면 쉽다
*/
const Div = styled.div`
  width: 100%;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;

  & ~ & {
    background-color: tomato;
    color: #fff;
  }

  & + & {
    background-color: #b300ff;
  }

  &.super-inhye {
    background-color: #00ffc3;
  }

  .babo & {
    background-color: powderblue;
  }
`;

/* [styled-components]

6. &&
- 각각의 인스턴스
- 모든 컴포넌트의 스타일을 변경하는게 아니라, 컴포넌트 따로 스타일링 되길 원할 때 유용
*/
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  z-index: 1;
  left: 4px;
  top: 4px;
`;

const Label = styled.label`
  position: relative;
  padding-left: 32px;
  margin-bottom: 8px;
`;

const InputText = styled.span`
  ${({$mode}) => {
    switch ($mode) {
      case 'dark': 
        return css`
          background-color: #000;
          color: #fff;

          ${Checkbox}:checked + && {
            background-color: #b300ff;
          }
        `;
      default: 
        return css`
          color: #333;

          ${Checkbox}:checked + && {
            color: #b300ff;
          }
        `;
    }
  }}
  font-size: 16px;
  font-weight: 500;
`;

/* [styled-components]

7. attrs
- 태그의 속성 지정
- extend된 컴포넌트에서 attrs를 덮어쓸 수 있다
*/
const Radio = styled(Checkbox).attrs({type: 'radio'})``;

/* [styled-components]

8. Animation
- keyframes``
- ${}
*/
const heartbeat = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }

  80% {
    opacity: 0.7;
    transform: scale(1.3);
  }

  100% {
    opacity: 0.45;
    transform: scale(1);
  }
`;

const Heart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background-color: #efefef;
  font-size: 48px;
  animation: ${heartbeat} 1s ease-in infinite;
`;

export default function AppStyledCompo() {
  return (
    <>
      <Section>
        <Title>안녕하세욥 우리는 styled-component를 공부하는 중이에욥</Title>

        <RowWrapper>
          <Subtitle>일반 컴포넌트</Subtitle>
          <Link href="https://www.naver.com">네이버로</Link>
          <Link href="/" $primary>홈으로</Link>
        </RowWrapper>

        <RowWrapper>
          <Subtitle>변수</Subtitle>
          <Button $primary>primary</Button>
          <Button $outlined>outlined</Button>
        </RowWrapper>

        <RowWrapper>
          <Subtitle>Extending Style</Subtitle>

          <PrimaryBtn>primary</PrimaryBtn>
          <SecondaryBtn>Secontary</SecondaryBtn>
          <OutlinedBtn>outlined</OutlinedBtn>
          <GhostBtn>Ghost</GhostBtn>

          <PrimaryBtn as='a' href='https://www.youtube.com/'>버튼처럼 보이지만 링크에용(youtube) </PrimaryBtn>
        </RowWrapper>

        <RowWrapper>
          <Subtitle>Passed props</Subtitle>

          <TextInput type='text' defaultValue='@asdfasdf' />
          <TextInput type='text' defaultValue='@qerqwer' $inputColor='tomato' />
        </RowWrapper>

        <RowWrapper>
          <Subtitle>&가 헷갈려용</Subtitle>

          <Div>난 첫째지롱</Div>
          <Div>& + & 적용되지롱</Div>
          <p>중간에 p태그가 있서용</p>
          <Div>& ~ & 적용되지롱</Div>
          <Div className='super-inhye'>난 super-inhye 클래스를 가지고 있지롱</Div>
          <p>중간에 p태그가 있서용</p>
          <div className='babo'>
            <Div>난 babo 안에 있는 Div야</Div>
          </div>
        </RowWrapper>

        <RowWrapper>
          <Subtitle>&&</Subtitle>

          <Label>
            <Checkbox defaultValue='우리두리' name='jeju' />
            <InputText $mode='dark'>우리두리</InputText>
          </Label>

          <Label>
            <Checkbox defaultValue='런던베이글' name='jeju' />
            <InputText $mode='dark'>런던베이글</InputText>
          </Label>

          <Label>
            <Checkbox defaultValue='오른' name='jeju' />
            <InputText>오른</InputText>
          </Label>

          <Label>
            <Checkbox defaultValue='친봉산장' name='jeju' />
            <InputText>친봉산장</InputText>
          </Label>
        </RowWrapper>

        <RowWrapper>
          <Subtitle>attrs</Subtitle>

          <Label>
            <Radio defaultValue='우리두리' name='jeju' />
            <InputText $mode='dark'>우리두리</InputText>
          </Label>

          <Label>
            <Radio defaultValue='런던베이글' name='jeju' />
            <InputText $mode='dark'>런던베이글</InputText>
          </Label>

          <Label>
            <Radio defaultValue='오른' name='jeju' />
            <InputText>오른</InputText>
          </Label>

          <Label>
            <Radio defaultValue='친봉산장' name='jeju' />
            <InputText>친봉산장</InputText>
          </Label>
        </RowWrapper>

        <RowWrapper>
          <Subtitle>Animation</Subtitle>

          <Heart>❤️‍🔥</Heart>
        </RowWrapper>
      </Section>
    </>
  );
}

