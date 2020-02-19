import React from 'react';
import PropTypes from 'prop-types';
//import connect from '@vkontakte/vk-connect';
//import VKConnect from '@vkontakte/vkui-connect-mock';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
//import Button from '@vkontakte/vkui/dist/components/Button/Button';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
//import Group from '@vkontakte/vkui/dist/components/Group/Group';
////import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
//import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
//import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';


//var count = 0;
//var town_stat = "";
//const mysql = require("mysql2");
//const connection = mysql.createConnection({
//    host: "db4free.net",
//    user: "alexandrfox",
//    database: "newsify",
//    password: "Yfljyeyfljyt"
//});

const osName = platform();
const Home = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="settings">
				{osName === IOS ? <Icon28Settings/> : <Icon24Settings/>}
			</HeaderButton>}
		>Новости</PanelHeader>
		<FormLayout>
		</FormLayout>

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};
//function statTown(){
//    return "DFG"
//}

export default Home;
