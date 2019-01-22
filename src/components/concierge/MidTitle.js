// import React, { Component } from 'react';
import React from 'react';
import styled from 'styled-components';


const Msg = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  text-align: center;
  color: rgba(27, 27, 27, 0.7);
  padding-top: 10px;

`;


const MidTitle = (props) => {
  return (
      <Msg>{props.text}</Msg>

  );
};


export default MidTitle;