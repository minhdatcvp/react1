import React, { Component } from 'react'
import TableDataChild from './TableDataChild'

export default class TableData extends Component {
    // this.props.dataUser
    // duyệt từng phần tử được nhận để hiển thị ra bảng
    checkData =() => this.props.dataUser.map((value,key) => {
        return (
            <TableDataChild editFunTable = {(user) => this.props.editFun(value)} 
            delFunTable = {(user) => this.props.delFun(value)} 
            userName = {value.name} key={key} stt={value.id}  tel={value.tel} permission={value.permission} />
        )
    })
    // ---------------------------------------------------------
    render() {
        
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Số điện thoại</th>
                        <th>Phân quyền</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.checkData()}
                    </tbody>
                </table>
                </div>

        )
    }
}
