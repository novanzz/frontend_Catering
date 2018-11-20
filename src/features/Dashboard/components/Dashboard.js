import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Form, Icon, Input, Button, Card, Layout } from 'antd'
import '../../../App.css'
import styled from 'styled-components'

const FormItem = Form.Item;

const Layouts = styled(Layout)`
  background-color : #273d60;
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
    margin-top : 10px;
    margin-left : 35%;
  }
`
const FormLoginButton = styled(Button)`
  width: 100%;
`

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.onChangeKalimat = this.onChangeKalimat.bind(this);
    this.onClickKalimat = this.onClickKalimat.bind(this);
  }

  onChangeKalimat(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  onClickKalimat(){
    const { username, password } = this.state;
    return (username,password);
  }

  render() {
    console.log(this.props);
    const {username} = this.state;
    return (
      <Layouts>
        <FormLogin onSubmit={this.handleSubmit}>
          <Cards>
            <FormItem>
              <Input
                id="username"
                prefix={
                  <Icon
                    style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                }
                placeholder="Tulis Kalimat disini (1)"
                onChange={event => this.setState({ username: event.target.value })}
              />
            </FormItem>
            <FormItem>
              <Input
                id="password"
                prefix={
                  <Icon style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                }
                placeholder="Tulis Kalimat disini (2)"
                onChange={event => this.onChangeKalimat(event)}
              />
            </FormItem>
            <FormItem>
              <FormLoginButton
                type="primary"
                htmlType="submit">Log out
              </FormLoginButton>
              <FormLoginButton
                type="primary"
                onClick={this.onClickKalimat}>Display Kalimat
              </FormLoginButton>
              Or
               <Link
                to="/login">
                <a> Lompat ke login!</a>
              </Link>
            </FormItem>
            <h3> Kalimat (1) !</h3>
            <p>{username}</p>
            <h3> Kalimat (2) !</h3>
            <p>{}</p>
          </Cards>
        </FormLogin>
      </Layouts>
    );
  }
}

export default Form.create()(Dashboard);