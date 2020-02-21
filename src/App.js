import React from 'react';
import connect from '@vkontakte/vk-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
//import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import Settings from './panels/Settings';

import Home from './panels/Home';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			authToken : null,
			items : []
		};

	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				case 'VKWebAppAccessTokenReceived':
					this.setState({ authToken : e.detail.data.access_token });
					break;
				default:
					console.log(e.detail);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
		connect.send("VKWebAppGetAuthToken", {"app_id": 7308928 , "scope": "friends,photos,video,wall,groups"});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};
//
//	getItems() {
//		const ownerId = 124527492
//		let api = `https://api.vk.com/method/market.get?v=5.52&access_token=${this.state.authToken}&owner_id=-${ownerId}`
//		fetchJsonp(api)
//		.then(res => res.json())
//		.then(data => this.setState({ items : data.response.items}))
//		.catch(e => [])
//	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" authToken={this.state.authToken} fetchedUser={this.state.fetchedUser} go={this.go} />
				<Settings id="settings" fetchedUser={this.state.fetchedUser} go={this.go} />
			</View>
		);
	}
}

export default App;

