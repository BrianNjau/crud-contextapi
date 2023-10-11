import './App.css';
import { useState } from 'react';
import { AppContext } from './context';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  const [ users, setUsers ] = useState([]);
	
	const dispatchUserEvent = (actionType, payload) => {
		switch (actionType) {
			case 'ADD_USER':
				setUsers([ ...users, payload.newUser ]);
				return;
			case 'REMOVE_USER':
				setUsers(users.filter(user => user.id !== payload.userId));
				return;
			default:
				return;
		}
	};

	return (
		<div className="App">
			<AppContext.Provider value={{ users, dispatchUserEvent }}>
				<AddUser />
				<UserList />
			</AppContext.Provider>
		</div>
	);
}

export default App;
