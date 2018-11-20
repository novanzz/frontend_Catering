import React, { Component } from 'react'
import { fetchApi } from '../../../middelware/api'
import { Table, Input, Button, Icon, Layout, Pagination } from 'antd'
import styled from 'styled-components'

const Layouts = styled(Layout)`
  minHeight: 100vh
`
const Tables = styled(Table)`
  box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.1), 0 6px 8px 0 rgba(0, 0, 0, 0.1);
  padding-right : 5px
`

class Dummy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      data: [],
    }
    this.onLoadPage = this.onLoadPage.bind(this);
  }

  async onLoadPage() {
    const fetch = await fetchApi("/products/");
    this.setState({
      data: fetch.data.product
    });
    // console.log("fetch", fetch.data.product[0].name)
  }

  componentDidMount() {
    this.onLoadPage();
  }

  handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
  }

  render() {
    // console.log("state fetch", this.state.data)
    // fetching data
    const data = this.state.data.map((fetch, i) => {
      const obj = {
        key: i,
        name: fetch.name,
        price: fetch.price,
        photo: fetch.productImage,
        foodItem: '',
        available: ''
      }
      return obj;
    });
    console.log(data)

    // const data = [{
    //   key: '1',
    //   name: 'John Brown',
    //   price: 32,
    //   photo: 'New York No. 1 Lake Park',
    //   foodItem: '',
    //   available: ''
    // }];

    //definition table columns
    const columns = [{
      title: 'Foto',
      dataIndex: 'photo',
      key: 'photo',
    }, {
      title: 'Nama Paket',
      dataIndex: 'name',
      key: 'name',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={this.handleSearch(selectedKeys, confirm)}
          />
          <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
          <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
        </div>
      ),
      filterIcon: filtered => <Icon type="smile-o" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
      onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => {
            this.searchInput.focus();
          });
        }
      },
      render: (text) => {
        const { searchText } = this.state;
        return searchText ? (
          <span>
            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
              fragment.toLowerCase() === searchText.toLowerCase()
                ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
            ))}
          </span>
        ) : text;
      },
    }, {
      title: 'Item Makanan',
      dataIndex: 'foodItem',
      key: 'foodItem',
    }, {
      title: 'Harga',
      dataIndex: 'price',
      key: 'price',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.price - b.price,
    }, {
      title: 'Ketersediaan',
      dataIndex: 'available',
      key: 'available',
    }, {
      title: 'Edit',
      dataIndex: 'edit',
      key: 'edit',
    }];
    return (
      <Layouts>
        <Tables columns={columns} dataSource={data}>
          <Pagination defaultCurrent={1} total={1} />
        </Tables>
      </Layouts>
    );
  }
}

export default (Dummy);