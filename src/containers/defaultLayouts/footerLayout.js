import React, { Component } from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  padding-top: 50px;
  padding-bottom: 35px;
  width: 100%;
  background-color: #EDEDED;
  color: #5D5D5D;
  text-align: center;
`

class footerLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Footer>
          <span>Cathering Ibu &copy; 2019</span>
          <span >Powered by Novan Ramadhan</span>
        </Footer>
      </React.Fragment>
    );
  }
}

export default (footerLayout);