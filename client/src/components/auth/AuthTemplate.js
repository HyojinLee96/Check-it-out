import React from 'react';
import styled from 'styled-components';

// SignUp, SignIn 페이지의 레이아웃 컴포넌트
// children으로 받아 온 내용을 보여 주기만 하는 역할

const AuthTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    45deg,
    rgba(66, 183, 245, 0.8) 0%,
    rgba(66, 245, 189, 0.4) 100%
  );
`;

const CenterBox = styled.div`
  .project-title {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 2.5rem;
    color: #ffa2a2;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 8%;
    height: 100%;
    background: #4285f4;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .bookIcon {
    display: block;
    margin: 0 auto;
  }
  position: relative;
  width: 600px;
  height: 90%;
  background: #ffffff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 4%;
  box-sizing: border-box;
`;


const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateWrapper>
      <CenterBox>
        <div className="project-title">Check-it-out</div>
        <img className="bookIcon" src="https://img.icons8.com/plasticine/100/000000/book-and-pencil.png"/>
        {children}
      </CenterBox>
    </AuthTemplateWrapper>
  );
};

export default AuthTemplate;