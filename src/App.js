import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
//import VKConnect from '@vkontakte/vkui-connect-mock';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Persik from './panels/Persik';
import Settings from './panels/Settings';
//import { platform, IOS } from '@vkontakte/vkui';
//import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
//import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
//import Button from '@vkontakte/vkui/dist/components/Button/Button';
//import Group from '@vkontakte/vkui/dist/components/Group/Group';
//import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
//import Div from '@vkontakte/vkui/dist/components/Div/Div';
//import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
//import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
//import Icon28Settings from '@vkontakte/icons/dist/28/settings';
//import Icon24Settings from '@vkontakte/icons/dist/24/settings';


import Home from './panels/Home';
const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
//	const [fetchedGeo, setGeo] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
            <Settings id='settings' go={go} />
			<Persik id='persik' go={go} />
		</View>
	);
}

export default App;

