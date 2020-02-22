import React from 'react';
import PropTypes from 'prop-types';
//import connect from '@vkontakte/vk-connect';
//import VKConnect from '@vkontakte/vkui-connect-mock';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Counter from '@vkontakte/vkui/dist/components/Counter/Counter';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon16Like from '@vkontakte/icons/dist/16/like_outline';
import Icon24Repost from '@vkontakte/icons/dist/24/share';
import Icon16Comment from '@vkontakte/icons/dist/16/comment';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon28VK from '@vkontakte/icons/dist/28/logo_vk';
import Icon28Instagram from '@vkontakte/icons/dist/28/logo_instagram';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Inst_1 from '../img/inst_1.jpg';
import Inst_2 from '../img/inst_2.jpg';
import Inst_3 from '../img/inst_3.jpg';
import './Persik.css';

const osName = platform();


class Home extends React.Component {
//	constructor(props) {
//		super(props);
//        this.state = {
//            colors:'var(--accent)'
//        }
//	}

	render() {

		let { id, go, fetchedUser, news_vk, groups_vk, profiles_vk} = this.props
		console.log(news_vk)
		return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderButton onClick={go} data-to="settings">
                        {osName === IOS ? <Icon28Settings/> : <Icon24Settings/>}
                    </PanelHeaderButton>}
                >Новости</PanelHeader>
                {fetchedUser &&
                <Group separator="hide">
                    <Div>
                        <Card size="l" mode="shadow">
                            <Cell
                                before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                                description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''} indicator={<Icon28Instagram fill="var(--destructive)" width={25} height={25} />}>
                                {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                            </Cell>
                            <FormLayout>
                                <Gallery
                                    slideWidth="100%"
                                    style={{ height: "1%"}}
                                    align="centred"
                                    bullets="dark"
                                >
                                    <img  className="Persik" src={Inst_1} alt="example"></img>
                                    <img  className="Persik" src={Inst_2} alt="example"></img>
                                    <img  className="Persik" src={Inst_3} alt="example"></img>
                                </Gallery>
                                <Div style={{display: 'flex'}}>
                                    <Button mode="tertiary" stretched style={{ marginRight: 0 , marginLeft: 0}}><Avatar style={{ background: 'var(--destructive)' }} size={25}><Icon16Like fill="var(--white)" /></Avatar></Button>
                                    <Button mode="tertiary" stretched ><Avatar style={{ background: 'var(--accent)' }} size={25}><Icon16Comment fill="var(--white)" /></Avatar></Button>
                                    <Button mode="tertiary" stretched style={{ marginRight: 0 , marginLeft: 0}}><Avatar style={{ background: 'var(--accent)' }} size={25}><Icon24Repost fill="var(--white)" width={16} height={16} /></Avatar></Button>
                                </Div>
                            </FormLayout>
                        </Card>
                    </Div>
                    {news_vk.map(({owner_id, text, attachments, likes, reposts, comments})=>(
                        <Div>
                            <Card size="l" mode="shadow">
                                <Cell
                                    before={owner_id>0?<Avatar src={selectAva(owner_id, profiles_vk)}/>:<Avatar src={selectAva(owner_id, groups_vk)}/>}
                                    description={''} indicator={<Icon28VK fill="var(--accent)" width={25} height={25} />}>
                                    {owner_id>0?selectName(owner_id, profiles_vk):selectName(owner_id, groups_vk)}
                                </Cell>
                                <Div>{text}</Div>
                                    <FormLayout>
                                        {attachments && setAttachments(attachments)}
                                        <Div style={{display: 'flex'}}>

                                            <Button mode="tertiary" stretched style={{ marginRight: 0 , marginLeft: 0}} after={<Counter mode="prominent">{likes.count}</Counter>}><Avatar style={{ background: 'var(--destructive)' }} size={25}><Icon16Like fill="var(--white)" /></Avatar></Button>
                                            <Button mode="tertiary" stretched ><Avatar style={{ background: 'var(--accent)' }} size={25} after={<Counter mode="prominent">{comments.count}</Counter>}><Icon16Comment fill="var(--white)" /></Avatar></Button>
                                            <Button mode="tertiary" stretched style={{ marginRight: 0 , marginLeft: 0}} after={<Counter mode="prominent">{reposts.count}</Counter>}><Avatar style={{ background: 'var(--accent)' }} size={25}><Icon24Repost fill="var(--white)" width={16} height={16} /></Avatar></Button>
                                        </Div>
                                    </FormLayout>
                            </Card>
                        </Div>
                    ))}
                </Group>}
            </Panel>
        );
    }
}

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
function selectAva(owner_id, array){
    for(var i=0; i<array.length;i++){
        if (Math.abs(array[i].id)===Math.abs(owner_id)){
            return array[i].photo_100;
        }
    }
}
function selectName(owner_id, array){
    for(var i=0; i<array.length;i++){
        if (Math.abs(array[i].id)===Math.abs(owner_id)){
            if (owner_id<0){
                return array[i].name;
            }
            else{
                return `${array[i].first_name} ${array[i].last_name}`
            }
        }
    }
}
function setAttachments(attachments){
    console.log("attachment");
    let photo=[];
//    let music=[];
//    let doc=[];
    let link=[];
//    let video=[];
//    let note=[];
    for (var i=0; i<attachments.length;i++){
        if (attachments.type==="photo"){
            photo.push(attachments.photo.sizes.length>7?attachments.photo.sizes[6].url:attachments.photo.sizes[5].url);
        }
        if (attachments.type==="link"){
            link.push({"url":attachments.link.url,"title":attachments.link.title});
        }
    }
    return <Gallery
        slideWidth="100%"
        style={{ height: "1%"}}
        align="centred"
        bullets="dark"
    >
        {photo.map((photo)=>(
             <img src={photo} className="Persik" alt=""></img>
        ))}
    </Gallery>
    {link.map(({url,title})=>(
        <Button href={url}>{title}</Button>
    ))}
}
export default Home;
