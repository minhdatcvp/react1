import React, { Component } from 'react'

export default class editUser extends Component {
    state = {
        id: this.props.userEditOject.id,
        name: this.props.userEditOject.name,
        tel: this.props.userEditOject.tel,
        permission: this.props.userEditOject.permission
    }
    isChange = (event) => {
        var ten = event.target.name;
        var giatri = event.target.value;
        this.setState({
            [ten]: giatri
        })
    }
    // props.getUserInfo
    saveInfo =() => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = parseInt(this.state.permission);
        this.props.getUserInfo(info);
        this.props.edit_User();
    }
    render() {
        return (
            <div className="card border-primary mb-3 mt-3 col-12 bg-secondary text-white" style={{ maxWidth: '100%' }}>
                <div className="card-header">Sửa thông tin User</div>
                <div className="card-body text-primary">
                    <div className="form-group edit">

                        <form>
                            <input defaultValue={this.props.userEditOject.name} onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control mr-5" placeholder="Tên User" style={{ maxWidth: '30%' }} />
                            <br />
                            <input defaultValue={this.props.userEditOject.tel} onChange={(event) => this.isChange(event)} type="text" name="tel" className="form-control mr-5" placeholder="Số điện thoại" style={{ maxWidth: '30%' }} />
                            <br />
                            <div className="form-group" >
                                <select className="custom-select " defaultValue={this.props.userEditOject.permission} onChange={(event) => this.isChange(event)} name="permission" required>
                                    <option value>Phân Quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Nomal</option>
                                </select>
                            </div>
                            <div className="form-group ml-5" >
                                <input type="reset" className="btn btn-primary nuttimkiem" onClick={() => this.saveInfo()} value="Lưu" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
