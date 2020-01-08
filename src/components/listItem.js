import React, {Component} from 'react';

class ListItem extends Component {
    render() {
        const {contact,onclick} =this.props;

        return (
            <li onClick={onclick}>
                <div className = "card">
                    <div className='image-wrapper'>
                        <img src= {contact.profileImage} alt={contact.firstName}></img>
                    </div>
                    <div className = 'title-detail'>
                        <p> {contact.firstName}</p>
                        {contact.phone}
                    </div>


                </div>
            </li>
        );
    }
}

export default ListItem;