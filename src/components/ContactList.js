import React, {Component} from 'react';
import ListItem from "./listItem";
import '../styles/listItem.css'

class ContactList extends Component {
    render() {
        const {contactList, onItemClick} = this.props;
        return (
            <div className='list-container'>

                <ul>
                    {
                        contactList.map(contact => {
                            if(contact.length == 1) {
                                return (
                                    <div className = "card">

                                        <div className = 'title-detail'>
                                            <p>{contact}</p>

                                        </div>


                                    </div>

                                );
                            }
                            return (
                                <ListItem key = {contact.contactId} contact={contact} onclick={() => onItemClick(contact.contactId)} />
                            );
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default ContactList;