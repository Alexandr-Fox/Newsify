import React from 'react';
import connect from '@vkontakte/vk-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
//import fetchJsonp from 'fetch-jsonp';
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
			news_vk: [],
			groups_vk: [],
			profiles_vk:[],
			news_inst : []
		};
//        this.getItems = this.getItems.bind(this)
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					console.log(e.detail);
					break;
				case 'VKWebAppAccessTokenReceived':
				    console.log(e.detail)
					this.setState({ authToken : e.detail.data.access_token });
		            connect.send("VKWebAppCallAPIMethod", {"method": "newsfeed.search", "params": {"q": this.state.fetchedUser?this.state.fetchedUser.city.title:null,"extended":1, "v":"5.101", "access_token":this.state.authToken}});
					break;
				case 'VKWebAppCallAPIMethodResult':
				    console.log(e.detail)
					this.setState({ news_vk : e.detail.data.response.items });
					this.setState({ groups_vk : e.detail.data.response.groups });
					this.setState({ profiles_vk : e.detail.data.response.profiles });
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

//	getItems() {
//		const ownerId = 124527492
//		let api = `https://api.vk.com/method/market.get?v=5.52&access_token=${this.state.authToken}&owner_id=-${ownerId}`
//		fetchJsonp(api)
//		.then(res => res.json())
//		.then(data => this.setState({ news_vk : data.response.items}))
//		.catch(e => [])
//	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" authToken={this.state.authToken} news_vk={this.state.news_vk} groups_vk={this.state.groups_vk} profiles_vk={this.state.profiles_vk} fetchedUser={this.state.fetchedUser} go={this.go} />
				<Settings id="settings" fetchedUser={this.state.fetchedUser} go={this.go} />
			</View>
		);
	}
}

export default App;

