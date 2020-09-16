
import './../Css/App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import './../Css/1.css'
import React, { Component } from 'react'
import DataUser from './DataUser.json'
export default class App extends Component {

  state = {
    trangthai: true,
    data: DataUser,
    searachText: '',
    editUserStatus: false,
    userEditOject: {}
  }
  // an hien adduser
  thaydoistate = () => {
    this.setState({
      trangthai: !this.state.trangthai
    })
  }
  // ---------------------------------
  // lay du lieu de search
  getTextSub = (dulieu) => {
    this.setState({
      searachText: dulieu
    })
  }
  // -----------------------------
  getaddUser = (name, tel, permission) => {
    var item = {};
    item.id = this.state.data.length + 1;
    item.name = name;
    item.tel = tel;
    item.permission = parseInt(permission);
    var Items = this.state.data;
    Items.push(item);
    this.setState({
      data: Items
    })
  }
  //---------------------------------------
  editClick = (user) => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
      userEditOject: user
    })
    localStorage.setItem('UserData', JSON.stringify(this.state.data));
  }
  getInfoUserEdit = (info) => { 
    console.log(info)
    this.state.data.forEach((item) => {
      if(item.id === info.id){
        item.name = info.name;
        item.tel = info.tel;
        item.permission = info.permission;
      }
    })
    localStorage.setItem('UserData', JSON.stringify(this.state.data));
  }
  //delFun(user)
  delClick = (user) =>{
    var TempData = this.state.data;
    TempData.forEach((item) => {
      if(item.id > user.id ){
        item.id = item.id -1 ;
      }
    })
    TempData = TempData.filter(item => item !== user)
    
    this.setState({
      data : TempData
      
    })
    localStorage.setItem('UserData', JSON.stringify(this.state.data));
    
  }
  render() {
    localStorage.setItem('UserData', JSON.stringify(this.state.data));
    // xu ly du lieu theo điều kiện rồi dua vao mang arrSearch
    var arrSearch = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searachText) !== -1) {
        arrSearch.push(item);
      }
    })
    // ------------------------------------------

    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row mt-3">
            <SearchForm hienthi={() => this.thaydoistate()} trangthai={this.state.trangthai}
              getInfoUserEdit = {(info) => this.getInfoUserEdit(info)}
              checkSubmit={(dulieu) => this.getTextSub(dulieu)} editUserStatus={this.state.editUserStatus} editUserClick={() => this.editClick()}
              userEditOject={this.state.userEditOject}
            />
            <div className="col-12"> <hr /></div>
            <TableData editFun={(user) => this.editClick(user)} dataUser={arrSearch} delFun={(user) => this.delClick(user)} />
            <AddUser add={(name, tel, permission) => this.getaddUser(name, tel, permission)} hienthitrangthai={this.state.trangthai} />
          </div>
        </div>


      </div>
    )
  }
}

// export default App;
