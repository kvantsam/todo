import React from "react";
import ReactDOM from 'react-dom';




const TodoList = () => {
    const items = ['Install React', 'Study Reac', 'Use React', 'Build React App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
            <li>{items[3]}</li>
        </ul>
    );
};

const AppHeader = () =>{
    return <h1>My Todo List</h1>;
};

const SearchPanel = () => {

    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    // return <input placeholder="search" />;
    return <input
        style = {searchStyle}
        placeholder= {searchText}
        disabled={true} />;
}

const App = () => {

    const value = '<script>alert ("")</script>';
    // const isLoggedIn = false;
    // const loginBox = <span>Log in to the system</span>;
    // const welcomeBox = <span>Welcome Back</span>;

    return (
        <div>
            {/*{ isLoggedIn ? null : loginBox }*/}
            { value }
            <AppHeader />
            <SearchPanel />
            <TodoList/>
        </div>
    );
}

// const element = <App />;

    ReactDOM.render(<App />,
        document.getElementById('root'));