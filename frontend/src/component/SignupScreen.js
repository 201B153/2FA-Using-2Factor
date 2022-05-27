import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles/home.module.css';

axios.defaults.withCredentials = true;
function Home() {
	const [ state, setState ] = useState({
		value: 'Home'
	});

	const logout = () => {
		axios
			.get('http://localhost:5000/logout')
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
		window.location.reload();
	};
	return (
		<div className={styles}>
			<div className={styles.top}>
				<p>201b153</p>
			</div>
			<div className={styles.bottom}>
				<button onClick={logout} className={styles.logout}>
					Log out
				</button>

				<div className={styles.card} />
				<div className={styles.words}> {state.value}</div>
			</div>
		</div>
	);
}

export default Home;