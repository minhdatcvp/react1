import React, { Component } from 'react'

export default class TableDataChild extends Component {
    // giá trị của từng quyền
    permissionShow =() => {
        if(this.props.permission === 1){ return "Admin";}
        else if(this.props.permission === 2){ return "Moderator";}
        else { return "Nomal";}
    }
    // ----------------------------
    render() {
        return (
            <tr>
                <td >{this.props.stt}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn btn-warning" onClick= {() => this.props.editFunTable()}><i className="fa fa-edit"> Sửa</i></div>
                </td>
                <td>
                    <div className="btn btn-danger " onClick= {() => this.props.delFunTable()}><i className="fas fa-trash-alt"> Xóa</i></div>
                </td>
            </tr>
        )
    }
}
