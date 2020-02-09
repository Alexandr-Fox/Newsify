import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vk-connect';
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

var count = 0;
var town_stat = "";

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
				description={count<4?City(fetchedUser):town_stat}>
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
    console.log("start");
    const [fetchedGeo, setGeo] = useState(null);
    var town=fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : '';
    //if (count%100 != 0) return town;
//    var town = "False";
    useEffect(() => {
        connect.subscribe(({ detail: { type, data }}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });
        async function fetchData() {
            const geo = await connect.send('VKWebAppGetGeodata');
            setGeo(geo);
        }
        fetchData();
    }, []);
    console.log(fetchedGeo);
    town=GeoCod(fetchedGeo,fetchedUser);
    return town;
}
function GeoCod(fetchedGeo,fetchedUser){
    const [fetchedCity, setCity] = useState(null);
    var x=new XMLHttpRequest();
    console.log("helo");
    var adress='https://geocode-maps.yandex.ru/1.x/?format=json&apikey=aaa60bd2-f573-4cf9-873e-589107560bc0&sco=longlat&kind=locality&geocode=';
    if (fetchedGeo !== null){
        if( fetchedGeo.available === true){
            adress=adress+fetchedGeo.long+','+fetchedGeo.lat;
            x.open('GET', adress,false);
            x.onload = function() {
                if (x.status === 200 ) {
//                    if (count<1){
                    var string = JSON.parse(x.responseText);
                    setCity(string.response.GeoObjectCollection.featureMember[0].GeoObject.name);
                    console.log(fetchedGeo);
//                        }
//                    else{setCity(JSON.parse(x.responseText).response.GeoObjectCollection.featureMember[0].GeoObject.name);
//                        console.log(fetchedGeo);}
                }
            }
            x.send();
        }
        else{//town=JSON.stringify(data);
           setCity(fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : '');
        }
    }
    count=count+1;
    town_stat = fetchedCity;
    return fetchedCity;
}
export default Home;
