import React from 'react';
import PropTypes from 'prop-types';
//import connect from '@vkontakte/vk-connect';
import VKConnect from '@vkontakte/vkui-connect-mock';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';


const osName = platform();

const Home = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="settings">
				{osName === IOS ? <Icon28Settings/> : <Icon24Settings/>}
			</HeaderButton>}
		>Newsify</PanelHeader>
		{fetchedUser &&
		<Group title="Профиль">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={City(fetchedUser)}>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>
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

function City(fetchedUser){
    var town=fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : '';
//    var town;
    VKConnect.subscribe(event => {
//        if (!event.detail) {
//            return;
//        }

        const { type, data } = event.detail;

        if (type === 'VKWebAppGeodataResult') {
            if( data.available===true){
                var adress='https://geocode-maps.yandex.ru/1.x/?format=json&apikey=aaa60bd2-f573-4cf9-873e-589107560bc0&sco=longlat&kind=locality&geocode='+data.long+','+data.lat;
                var x=new XMLHttpRequest();
                x.open('GET', adress,true);
                x.onload = function() {
                    if (x.status === 200) {
                        var string = JSON.parse(x.responseText);
                        town = string['response']['GeoObjectCollection']['featureMember'][0]['GeoObject']['name'];
                    }
                }
                x.send()
             }
             else{town=JSON.stringify(data);}
        }
        else {town = type;}
    });
    town = VKConnect.send("VKWebAppGetGeodata", {});
//    town=JSON.stringify(VKConnect.send("VKWebAppGetGeodata", {}));
    return town;
}
export default Home;