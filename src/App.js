import {useEffect, useState} from "react";

import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

import './App.css';

const App = () => {

    const [searchField, setSearchField] = useState('');
    const [title, setTitle] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter(
            (monster) => {
                return monster.name.toLowerCase().includes(searchField);
            });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);


    const onSearchChange = (event) => {
        let searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }

    const onTitleChange = (event) => {
        let titleString = event.target.value.toLowerCase();
        setTitle(titleString);
    }


    return (
        <div className="App">
            <h1 className={"app-title"}> {title} </h1>
            <SearchBox onChangeHandler={onSearchChange}
                       placeholder={"Search Monsters"}
                       className={"SearchField"}/>
            <br/>
            <SearchBox onChangeHandler={onTitleChange}
                       placeholder={"setTitle"}
                       className={"title-search-box"}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

// class App extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             monsters: [],
//             searchField: ""
//         };
//
//     }
//
//     onSearchChange = (event) => {
//         let searchField = event.target.value.toLowerCase();
//         this.setState(
//             () => {
//                 return {searchField}
//             }
//         );
//
//     }
//
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then((users) => this.setState(() => {
//                 return {monsters: users}
//             }));
//
//     }
//
//     render() {
//         const {monsters, searchField} = this.state;
//         const {onSearchChange} = this;
//         let filteredMonsters = monsters.filter(
//             (monster) => {
//                 return monster.name.toLowerCase().includes(searchField);
//             });
//         return (
//             <div className="App">
//                 <h1 className={"app-title"}> Monster Rolodex</h1>
//                 <SearchBox onChangeHandler={onSearchChange}
//                            placeholder={"Search Monsters"}
//                            className={"SearchField"}/>
//                 <CardList monsters={filteredMonsters}/>
//             </div>
//         );
//     }
// }

export default App;
