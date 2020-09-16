import React, { Component } from 'react'
import EditUser from './EditUser';
export default class SearchForm extends Component {

    state = {
        tempText: ""
    }
    // lấy và đẩy dữ liệu vào biên tạm thời trong state để đẩy lên App
    isChange = (event) => {
        this.setState({
            tempText: event.target.value
        })
        this.props.checkSubmit(this.state.tempText);
    }
    // ---------------------------------------------------------------------
    hienthiNut = () => {
        if (this.props.trangthai) {
            return (
                <div className="btn btn-block btn-outline-info float-right" onClick={() => this.props.hienthi()} style={{ maxWidth: '18rem' }}> Thêm mới </div>
            )
        }
        else {
            return (
                <div className="btn btn-block btn-outline-danger float-right" onClick={() => this.props.hienthi()} style={{ maxWidth: '18rem' }}> Đóng lại </div>
            )
        }
    }
    // lấy thông tin từ editUser lên
    getUserEditInfo = (info) => {
        
        this.props.getInfoUserEdit(info);
    }

    checkeditUser = () => {
        if (this.props.editUserStatus === true) {
            return <EditUser
                getUserInfo={(info) => this.getUserEditInfo(info)}
                edit_User={this.props.editUserClick} userEditOject={this.props.userEditOject} />
        }
    }
    // editOject
    render() {

        return (
            <div className="col-12">
                <div className="form-group col-12">
                    <div className="btn-group">
                        <input type="text" className="form-control searchuser" onChange={this.isChange} placeholder="Nhập tìm kiếm" />
                        <button className="btn-info nuttimkiem" onClick={(dulieu) => this.props.checkSubmit(this.state.tempText)}>  Tìm </button>
                    </div>
                    {this.hienthiNut()}
                </div>
                {this.checkeditUser()}
            </div>

        )
    }
}
