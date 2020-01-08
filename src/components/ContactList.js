import React, {Component} from 'react';
import ListItem from "./listItem";
import '../styles/listItem.css'

class ContactList extends Component {
    render() {
        const {contactList, onItemClick, isFavourite, onFav} = this.props;
        return (
            <div className='list-container'>

                <ul>
                    {
                        contactList.map(contact => {
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