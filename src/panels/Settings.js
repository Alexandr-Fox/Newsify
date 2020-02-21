import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Panel, Button, PanelHeaderButton, FormLayoutGroup, FormLayout, Input, CardGrid, Card, Header, Avatar, Cell, PanelHeader, Group, Div } from '@vkontakte/vkui';
//import connect from '@vkontakte/vk-connect';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28Instagram from '@vkontakte/icons/dist/28/logo_instagram';

//import persik from '../img/persik.png';
//import './Persik.css';

const osName = platform();

//var count = 0;
//const popout=<ScreenSpinner size='large' />
var email;
const onChange = (e) => {
    const { name, value } = e.currentTarget;
    console.log(name,  email);
    email= value;
}
const Settings = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
//			popout={popout}
		>
			Настройки
		</PanelHeader>
		{fetchedUser &&
        <Group separator="hide" header={<Header mode="secondary">Профиль</Header>}>
            <CardGrid>
                <Card size="l" mode="shadow">
                    <Cell
                        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}>
                        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                    </Cell>
                </Card>
            </CardGrid>
        </Group>}
        <Div>
            <Group separator="hide" header={<Header mode="secondary">Instagram</Header>}>
                <CardGrid>
                    <Card size="l" mode="shadow">
                        <Cell
                            before={<Icon28Instagram/>}
                            description={"Временно не работает!"}>
                            Вход в Instagram
                        </Cell>
                        <FormLayout>
                            <FormLayoutGroup >
                                <Input top="Логин" name="email" type="email" placeholder="Введите логин" value={email} onChange={onChange}/>
                                <Input top="Пароль" type="password"  placeholder="Введите пароль" />
                                <Button size="xl" mode="secondary" onClick={go} data-to='home' disabled>Войти</Button>
                            </FormLayoutGroup>
                        </FormLayout>
                    </Card>
                </CardGrid>
            </Group>
        </Div>

	</Panel>
);

Settings.propTypes = {
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
////           CardGrid
////                Card size="l" mode="shadow"
////                /Card
////            /CardGrid

//function statTown(fetchedUser){
//    return fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : '';
//}
//
//function City(fetchedUser){
//    console.log("start");
//    const [fetchedGeo, setGeo] = useState(null);
//    var town=fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : '';
//    //if (count%100 != 0) return town;
////    var town = "False";
//    useEffect(() => {
//        connect.subscribe(({ detail: { type, data }}) => {
//            if (type === 'VKWebAppUpdateConfig') {
//                const schemeAttribute = document.createAttribute('scheme');
//                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
//                document.body.attributes.setNamedItem(schemeAttribute);
//            }
//            if (type === 'VKWebAppGeodataFailed') {
//                console.log(data);
//            }
//        });
//        async function fetchData() {
//            const geo = await connect.send('VKWebAppGetGeodata');
//            setGeo(geo);
//        }
//        fetchData();
//    }, []);
//    console.log(fetchedGeo);
//    town=GeoCod(fetchedGeo,fetchedUser);
//    return town;
//}
//function GeoCod(fetchedGeo,fetchedUser){
//    const [fetchedCity, setCity] = useState(null);
////    const [test,setDat] = useState(null);
//    var x=new XMLHttpRequest();
//    console.log("helo");
//    var adress='https://geocode-maps.yandex.ru/1.x/?format=json&apikey=aaa60bd2-f573-4cf9-873e-589107560bc0&sco=longlat&kind=locality&geocode=';
//    if (fetchedGeo !== null){
//        if( fetchedGeo.available === true){
//            adress=adress+fetchedGeo.long+','+fetchedGeo.lat;
//            x.open('GET', adress,false);
//            x.onload = function() {
//                if (x.status === 200 ) {
//                    var string = JSON.parse(x.responseText);
//                    setCity(string.response.GeoObjectCollection.featureMember[0].GeoObject.name);
//                    console.log(fetchedGeo);
//                }
//            }
//            x.send();
//        }
//        else{
//           setCity(fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : '');
//        };
//    }
//    else{
//       console.log(fetchedGeo);
//       setCity(fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : '');
//    };
//    count=count+1;
//    if (fetchedCity!==null){
//        console.log("db run")
//        let db = new sqlite3.Database('./db/Newsify.db', (err) => {
//            if (err) {
//                console.error(err.message);
//            }
//            else{
//                console.log('Connected to the chinook database.');
//                selectData();}
//        });
//        const selectData = () =>{
//            console.log("Select data")
//            db.all('SELECT * FROM Newsify WHERE ID = ?', [fetchedUser.id], (err, rows) => {
//                if (err) {
//                    throw err;
//                }
//                console.log(rows);
//                if (rows.length>0){
//                    updateData();
//                }
//                else {
//                    insertData();
//                };
//            });
//        }
//        const updateData = () =>{
//            console.log("Update data")
//            db.run("UPDATE FROM Newsify SET CITY='?' WHERE ID=?", [fetchedCity,fetchedUser.id]);
//        }
//        const insertData = () =>{
//            console.log("Insert data")
//            db.run('INSERT INTO Newsify (ID,CITY,LANGUAGE) VALUES (?,?,?)', [fetchedUser.id,fetchedCity,"RU"]);
//        }
//        db.close((err) => {
//            if (err) {
//                return console.error(err.message);
//            }
//            console.log('Close the database connection.');
//        });
//    }
//    return fetchedCity;
//}


export default Settings;
