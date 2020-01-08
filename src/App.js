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
            sorted:[],
            hybrid:[]
        }
    }

    handldeSorted = () => {
        const listName = this.state.contactList.map((contact) => contact.firstName);
        let sortedName = listName.sort();
        const toCheck = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
          for(let j = 0 ; j < toCheck.length; j++) {
              for (let i = 0; i < sortedName.length; i++) {
                  if (sortedName[i][0] === toCheck[j]) {
                      sortedName.splice(i,0,toCheck[j]);
                      break;
                  }
              }
          }

          let hybridList=[];
          for(let k = 0; k < sortedName.length; k++) {
              if(sortedName[k].length > 1) {
                  const temp = this.state.contactList.filter(contact => contact.firstName === sortedName[k])[0];
                  hybridList.push(temp);
              }else {
                  hybridList.push(sortedName[k]);
              }
          }

          //console.log(hybridList);

          this.setState({
              sorted : hybridList,
              hybrid: hybridList
          })


    }

    handleOnClick = (id) => {

       const selectedContact =  this.state.contactList.filter(contact => contact.contactId === id);
        this.setState({
            shouldDisplay : !this.state.shouldDisplay,
            currentContact: selectedContact[0]
        })
    }

    handleOnSearch = (e) => {
       const filtered = this.state.sorted.filter(function(contact) {
           if(contact.length === 1){
               if (contact.includes(e.target.value.toUpperCase())){
                   return contact;
               }
           }else {
               if(contact.firstName.toUpperCase().includes(e.target.value.toUpperCase()))
               {
                   return contact;
               }

           }
       });
       console.log(filtered)
       this.setState({
           hybrid : filtered
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
                this.handldeSorted();

            })
            .catch((err) => console.log(err))


    }

    render() {


     return (
         <div>
             <div className='title'>CONTACTS</div>
             <div className ='search-box'>
                 <Search filterItem = {this.handleOnSearch} />
             </div>
             <ContactList  contactList = {this.state.hybrid}  onItemClick = {this.handleOnClick} />
             <ContactDetail shouldDisplay={this.state.shouldDisplay} onItemClick = {this.handleOnClick} selected = {this.state.currentContact}/>
         </div>
     );

 }
}

export default App;
