import React, { Component } from 'react'

export default class AddUser extends Component {

  
        state = { 
            id : "",
            name : "",
            tel : "",
            permission : ""
        }
    isChange = (event) => {
        var ten = event.target.name;
        var giatri = event.target.value;
        this.setState({
            [ten] : giatri
        })
    }
    hienthiForm =() =>{
        if(this.props.hienthitrangthai === false){
            return(
                <div className="card border-primary mb-3 mt-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Thêm user</div>
                <div className="card-body text-primary">
                    <div className="form-group">
                        <form>
                            <input type="text" name = "name" onChange = {(event) => this.isChange(event)} className="form-control"  placeholder="Tên User" />
                            <br />
                            <input type="text" name="tel" onChange = {(event) => this.isChange(event)} className="form-control"  placeholder="Số điện thoại" />
                            <br />
                            <div className="form-group">
                                <select className="custom-select" name="permission" onChange = {(event) => this.isChange(event)} required>
                                    <option value>Phân Quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Nomal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-primary nuttimkiem" onClick = {(name , tel , permission) => this.props.add(this.state.name,this.state.tel,this.state.permission )} value = "Thêm mới"/>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            )
        }
    }
    
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                {/* {this.hienthi()}
                {this.hienthiForm()} */}
                {this.hienthiForm()}
            </div>

        )
    }
}
