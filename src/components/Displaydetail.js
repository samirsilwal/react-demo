import React, {Component} from 'react';
import  '../styles/display.css';

class Displaydetail extends Component {
    render() {
        const  {selectedContact} = this.props;
        if (selectedContact == null || selectedContact.contactAddress == null) {
            return <div></div>;
        }
        return (
            <div className="detail-display">
                <div className='img-detail'>
                    <img src={selectedContact.profileImage} alt={selectedContact.firstName}></img>
                </div>
                <p className = 'name-detail'>{selectedContact.firstName + ' '+ selectedContact.lastName}</p>
                <span className='email'>{selectedContact.email}</span>

                <hr />

                <div className='contact-detail'>
                    contact:
                    <p>{selectedContact.phone}</p>
                </div>
                <div className='address-detail'>
                    address:
                    <p>{
                        selectedContact.contactAddress.city + ', ' +
                        selectedContact.contactAddress.state + ', ' +
                        selectedContact.contactAddress.country

                    }</p>
                </div>

                <div className='codes-detail'>
                    Address-Codes:
                    <p>
                    <span className='zip'>zipCode : {selectedContact.contactAddress.zipCode}</span>
                    <span className='country-code'>CountryCode : {selectedContact.contactAddress.countryCode}</span>

                    </p>
                </div>
                <div className ='street'>StreetAddress : {selectedContact.contactAddress.streetAddress}</div>


            </div>
        );
    }
}

export default Displaydetail;