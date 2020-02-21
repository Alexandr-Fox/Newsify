import React from 'react';
import PropTypes from 'prop-types';
//import connect from '@vkontakte/vk-connect';
//import VKConnect from '@vkontakte/vkui-connect-mock';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon16Repost from '@vkontakte/icons/dist/16/repost';
import Icon16Comment from '@vkontakte/icons/dist/16/comment';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
//import Icon28VK from '@vkontakte/icons/dist/28/logo_vk';
import Icon28Instagram from '@vkontakte/icons/dist/28/logo_instagram';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
import persik from '../img/persik.png';
import Inst_1 from '../img/inst_1.jpg';
import Inst_2 from '../img/inst_2.jpg';
import Inst_3 from '../img/inst_3.jpg';

const osName = platform();
//const Array = [{text:'xxxxxxx',title_group:'dsfth'},{text:'xxxxxxx',title_group:'dsfth'}]
const Home = ({ id, go, authToken, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="settings">
				{osName === IOS ? <Icon28Settings/> : <Icon24Settings/>}
			</PanelHeaderButton>}
		>Новости</PanelHeader>
		{fetchedUser &&
		<Div>
            <Group separator="hide" header={<Header subtitle="Instagram"><Icon28Instagram/></Header>}>
                <CardGrid>
                    <Card size="l" mode="shadow">
                        <Cell
                            before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                            description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}>
                            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                        </Cell>
                        <FormLayout>
                            <FormLayoutGroup >
                                <Gallery
                                    slideWidth="90%"
                                    style={{ height: "10%" ,width: "99%"}}
                                    align="centred"
                                    bullets="dark"
                                >
                                    <img src={Inst_1} alt="example"></img>
                                    <img src={Inst_2} alt="example"></img>
                                    <img src={Inst_3} alt="example"></img>
                                </Gallery>
                                <Button mode="tertiary" ><Avatar style={{ background: 'var(--destructive)' }} size={20}><Icon16Like fill="var(--white)" /></Avatar></Button>
                                <Button mode="tertiary" ><Avatar style={{ background: 'var(--accent)' }} size={19}><Icon16Comment fill="var(--white)" /></Avatar></Button>
                                <Button mode="tertiary" ><Avatar style={{ background: 'var(--accent)' }} size={19}><Icon16Repost fill="var(--white)" /></Avatar></Button>
                            </FormLayoutGroup>
                        </FormLayout>
                    </Card>
                </CardGrid>
            </Group>
        </Div>}
	</Panel>
);
//        {Array.map(({text,title_group}) =>(
//            <News text={text} title_group={title_group} go={go}/>
//        ))}

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
