import React from 'react'
import contacts from '../contacts.json'
import ContactCard from './ContactCard'

class Contacts extends React.Component {
    constructor() {
        super() 
        
        let myArray = contacts.slice(0,5)
        // console.log(myArray)
        this.state = {myArray: myArray}
    }
    /* Creates a copy of the state and add a random contact from contact.json file */
    addRandom = () => {
        const randomContact = Math.floor((Math.random()* contacts.length - 5) +5)
        const contactsCopy = [...this.state.myArray]
        contactsCopy.push(contacts[randomContact])
        this.setState({
            myArray : contactsCopy
        })
        
    }
    
    /* Sort by name */
    sortByName =() => {
        const copyContacts = [...this.state.myArray]
        const sorted = copyContacts.sort(function(a,b){
        let first = a.name
        let second = b.name
        if (first < second) return -1;
        else if (first > second) return 1;
        return 0
        })
        this.setState({
            myArray: sorted
        })
    }
    
    /* Sort by popularity */
    sortByPopularity = () => {
        const copyContacts = [...this.state.myArray]
        const sortedPop = copyContacts.sort(function(a,b){

        let first = a.popularity

        let second = b.popularity
        if (first < second) return -1;
        else if (first > second) return 1;
        return 0
        })
        this.setState({
            myArray: sortedPop
        })
        
    }


    render(){
        return(
            <section>
                <button onClick={this.addRandom}> Add Random Contact!</button>
                <button onClick={this.sortByName}> Sort by name!</button>
                <button onClick={this.sortByPopularity}> Sort by popularity! </button>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Pop</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.myArray.map((contact, index)=>(
                            <ContactCard
                            key = {index}
                            {...contact}
                             />
                        ))}

                    </tbody>
                </table>
            </section>
        )
    }
}

export default Contacts