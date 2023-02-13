import { Component, useReducer } from "react";

export default class User extends Component {

    state = {
        isEditName: false,
        isEditSurname: false,
        isEditAge: false,
    }

    render() {
        const { index, user } = this.props;
        const { isEditName, isEditSurname, isEditAge } = this.state;

        return (
            <tr>
                <td>{index}</td>
                <td>
                    {
                        !isEditName && (
                            <span className="link-primary">{user.ime}</span>
                        )
                    }
                </td>
                <td>
                    {
                        !isEditSurname && (
                            <span className="link-primary">{user.prezime}</span>
                        )
                    }
                </td>
                <td>
                    {
                        !isEditAge && (
                            <span className="link-primary">{user.dob}</span>
                        )
                    }
                </td>
            </tr>
        );
    }
}
