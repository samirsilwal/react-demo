import React, {Component} from 'react';
import '../styles/listItem.css'
import Displaydetail from "./Displaydetail";

class ContactDetail extends Component {
    render() {
        const {shouldDisplay, onItemClick, selected} = this.props;
        return (
            <div  className="modal" style={shouldDisplay ? {display: 'block'} : {display:'none'}}>


                <div className="modal-content">
                    <div>
                        <span className="close" onClick={onItemClick}>&times;</span>

                        <span>CONTACT DETAIL</span>
                    </div>
                    <Displaydetail selectedContact = {selected} />
                </div>

            </div>
        );
    }
}

export default ContactDetail;