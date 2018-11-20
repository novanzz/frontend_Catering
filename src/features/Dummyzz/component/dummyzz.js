import React, { Component } from 'react'
import { Form, Card, Layout } from 'antd'
import '../../../App.css'
import styled from 'styled-components'

const Layouts = styled(Layout)`
  background : #273d60;
`
const Cards = styled(Card)`
  padding-top : 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
`
const FormLogin = styled(Form)`
  max-width: 370px;
  min-width : 280px;
  @media only screen and (max-width: 600px) { 
    margin-top : 150px  
    margin-left : 20px;
    margin-right : 20px;
  }
  @media only screen and (min-width: 600px){
    margin : 220px;
  }
  @media only screen and (min-width: 800px){
    margin : 220px;
  }
  @media only screen and (min-width: 992px){
    margin-top : 120px;
    margin-left : 35%;
  }
`
class Dummyz extends Component {

  render() {
    return (
      <Layouts style={{ minHeight: '100vh' }}>
        <FormLogin>
          <Cards>
              <h1 style={{textAlign: "center"}}>Dummy Form yang ke 2</h1>
          </Cards>
        </FormLogin>
      </Layouts>
    );
  }
}

export default(Dummyz);