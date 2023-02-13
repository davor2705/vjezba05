import { Component } from "react";

export default class EditForm extends Component {
    
        state = {
            value: this.props.text,
            id: this.props.id
        }

        handleOnChange = (e) => {
                this.setState({text: e.target.value});
        }

        sendData = () => {
            this.props.onSave(this.state);
        }

        render() {

        const {text} = this.state;
        const {onCancel} = this.props;

        return (
                <div className="input-group"> 
                    <input type="text" 
                    value={text} 
                    className="form-control" 
                    onChange={this.handleOnChange}
                    />
                    <button data-type={type} className="btn btn-success btn-sm" onClick={onSave (this.sendData)}>&#10003;</button>
                    <button className="btn btn-danger btn-sm" onClick={onCancel}>X</button>
                </div>
            )
    }
}