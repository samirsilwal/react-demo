import React from 'react';
import './App.css';
import ContactList from "./components/ContactList";
import uuid from 'uuid';
import './model/Contact'
import Contact from "./model/Contact";
import ContactDetail from "./components/ContactDetail";
import Search from "./components/Search";

class  App extends React.Component {

    constructor() {
        super();
        this.state = {
            contactList: [],
            shouldDisplay:false,
            filtered:[],
            currentContact:{},
        }
    }

    handleOnClick = (id) => {

       const selectedContact =  this.state.contactList.filter(contact => contact.contactId === id);
        this.setState({
            shouldDisplay : !this.state.shouldDisplay,
            currentContact: selectedContact[0]
        })
    }

    handleOnSearch = (e) => {
       const filtered= this.state.contactList.filter(contact => contact.firstName.includes(e.target.value.toUpperCase()));
       this.setState({
           filtered : filtered
       })
    }

 


    componentDidMount() {

        fetch('https://mock-io.herokuapp.com/users')
            .then(response => response.json())
            .then((value) => {
                  value.forEach(val => {
                      const tempContact = Contact(val, uuid());
                      this.setState({
                          contactList: [...this.state.contactList, tempContact],
                          filtered : [...this.state.contactList, tempContact]
                      })
                  })
                console.log(this.state.contactList)

            })
            .catch((err) => console.log(err))
    }

    render() {


     return (
         <div>
             <div className='title'>CONTACTS</div>
             <div className ='search-box'>
                 <Search filterItem = {this.handleOnSearch} ></Search>
             </div>
             <ContactList  contactList = {this.state.filtered} onItemClick = {this.handleOnClick} />
             <ContactDetail shouldDisplay={this.state.shouldDisplay} onItemClick = {this.handleOnClick} selected = {this.state.currentContact}/>
         </div>
     );

 }
}

export default App;
