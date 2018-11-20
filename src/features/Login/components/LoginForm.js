import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { postApi } from '../../../middelware/api'
import { Form, Icon, Input, Button, Checkbox, Card, Layout } from 'antd'
import '../../../App.css'
import styled from 'styled-components'
import { withRouter } from "react-router";
import { setCookies } from "../../../middelware/cookies-manager"
const FormItem = Form.Item;

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
const FormLoginForgot = styled.a`
  float: Right;
`
const CheckRemember = styled(Checkbox)`
  float : Left;
`
const FormLoginButton = styled(Button)`
  width: 100%;
`

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);
  }

  onChangeLogin(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  async onClickLogin() {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const res = await postApi("/users/login", this.state);
        if (res.status === 200) {
          // console.log(res.data.token)
          await setCookies(res.data.token)
          return this.props.history.push("/dummy");
        }else if (res.status === 401) {
          return console.log("Modal")
        }

      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log("coba", this.props);
    // console.log("onChange",this.state);
    // console.log(this.props.user.name);
    return (
      <Layouts>
        <FormLogin onSubmit={this.handleSubmit}>
          <Cards>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true, message: 'Please input your email!'
                  }
                ],
              })(
                <Input
                  id="email"
                  prefix={
                    <Icon
                      type="user"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                  placeholder="Email"
                  onChange={event => this.onChangeLogin(event)}
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ],
              })(
                <Input
                  id="password"
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                  type="password"
                  placeholder="Password"
                  onChange={this.onChangeLogin}
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false,
              })(
                <CheckRemember>Remember me</CheckRemember>
              )}
              <FormLoginForgot
                href="/login">Forgot password
                  </FormLoginForgot>
              <FormLoginButton
                type="primary"
                // htmlType="submit"
                onClick={this.onClickLogin}
              >Log in
                  </FormLoginButton>
              Or
               <Link
                to="/dashboard">
                <a> Lompat ke dashboard! </a>
              </Link>
            </FormItem>
          </Cards>
        </FormLogin>
      </Layouts>
    );
  }
}

export default withRouter(Form.create()(Login));