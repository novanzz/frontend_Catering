import React, { Component } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout, BackTop } from 'antd';

import routes from '../routes';

import Header from '../containers/defaultLayouts/headerLayout';
import Footer from "./defaultLayouts/footerLayout";
import Sider from "./defaultLayouts/siderLayout";

const { Content } = Layout;

class Containers extends Component {

  constructor(props){
    super(props)

    this.state = {
      isCollapse: false,
    }

    this.handleCollapse = this.handleCollapse.bind(this); 

  }

  handleCollapse(e){
    console.log(e);
  }

  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider  handleCollapse={this.handleCollapse} />
          <Layout>
            <Header></Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360, paddingBottom: 1380 }}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} name={route.name} render={props => (
                      <route.component {...props} />
                    )} />)
                      : (null);
                  },
                  )}
                </Switch>
              </div>
              <BackTop />
            </Content>
            <Footer></Footer>
          </Layout>
        </Layout>

      </div>
    );
  }
}

export default (Containers);