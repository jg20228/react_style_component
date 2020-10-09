import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const Header = () => {
  const HeaderStyle = styled.div`
    background-image: url('images/background.jpg');
    height: 750px;
    background-size: 100% 100%;
  `;

  const NavStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding: 20px;
  `;

  const MenuStyle = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 30px;
    list-style-type: none;
    color: white;
    font-weight: 800;
  `;

  const LogoStyle = styled.div`
    color: white;
    font-size: 25px;
    font-weight: 800;
  `;
  const SectionStyle = styled.div``;

  return (
    <HeaderStyle>
      <NavStyle>
        <LogoStyle>🍙</LogoStyle>
        <MenuStyle>
          <li>호스트가 되어보세요</li>
          <li>도움말</li>
          <li>회원가입</li>
          <li>로그인</li>
        </MenuStyle>
      </NavStyle>
      <SectionStyle>
        <Search />
      </SectionStyle>
    </HeaderStyle>
  );
};

export default Header;
