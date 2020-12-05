import React, {Component} from 'react';
import styles from './ProfileStatus.module.css'
import Button from "@material-ui/core/Button";

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } );
    }
    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        } );
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let a = this.state
        let b = this.props
        console.log('update 2')
    }

    render() {
        console.log('render 1 ')
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status || "-------"}</span>
                </div>
                }
                {this.state.editMode &&
                <div style={{display: 'flex'}}>
                    <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}/>
                    <Button variant={'contained'} onClick={this.deactivateEditMode}>Save</Button>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;