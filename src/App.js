import React from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

import logo from './logo.svg';
import './App.css';


class App extends React.Component{
    constructor(){
        super();
        this.state={
          monsters:[],
          searchField:''
        };

        this.handleChange2 = this.handleChange2.bind(this);
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monsters:users}))
    }
    
    

    // this is a function expression that will be declared the first time this object created 
    // so (this) keyward represented the class, so don't need a bind in the constructor
    handleChange = (e)=>{
        this.setState({searchField: e.target.value});
    }

    // test handleChange as a regular function with bind in constructor
    handleChange2(e){
        this.setState({searchField: e.target.value});
    }

    render(){

        const { monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster=>
              monster.name.toLowerCase().includes(searchField.toLowerCase())
          );

        return (
             
             
             
             <div className='App'>
                 <h1>Monsters Rolodex</h1>
                 <SearchBox 
                    placeholder='search monsters'
                    handleChange={this.handleChange2}
                 />
                 <CardList monsters={filteredMonsters} />
             </div>

          );
    }
}


export default App;
