import React, { Component } from 'react';
import SwiperCom from '../../components/swiperTwo/index'
import video1 from '../../static/images/v1.mp4'
import peizhi from '../../static/images/11.jpg'
import './home.less'
import bg from "../../static/images/bg.jpg"
import httpLists from '../../utils/http'
import {
    message,
} from 'antd';
let { containHttp } = httpLists
const {
    makeAppointment
} = containHttp
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailsPicListsOne: [
                {
                    url: require('../../static/images/01.JPG'),
                    cont: '19英寸个性轮辋'
                },
                {
                    url: require('../../static/images/02.JPG'),
                    cont: '19英寸个性轮辋'
                }, {
                    url: require('../../static/images/03.JPG'),
                    cont: '19英寸个性轮辋'
                }, {
                    url: require('../../static/images/04.jpg'),
                    cont: '19英寸个性轮辋'
                }, {
                    url: require('../../static/images/05.JPG'),
                    cont: '19英寸个性轮辋'
                }, {
                    url: require('../../static/images/06.JPG'),
                    cont: '19英寸个性轮辋'
                }, {
                    url: require('../../static/images/07.JPG'),
                    cont: '19英寸个性轮辋'
                }, {
                    url: require('../../static/images/08.JPG'),
                    cont: '19英寸个性轮辋'
                }, {
                    url: require('../../static/images/09.JPG'),
                    cont: '19英寸个性轮辋'
                }, {
                    url: require('../../static/images/10.JPG'),
                    cont: '19英寸个性轮辋'
                },
            ],
            distributorLists: [
                {
                    name: '广汽传祺三和店',
                    id: '1'
                },
                {
                    name: '广汽传祺新元素店',
                    id: '2'
                },
                {
                    name: '广汽传祺金致店',
                    id: '3'
                },
                {
                    name: '广汽传祺长缘捷龙店',
                    id: '4'
                },
                {
                    name: '广汽传祺益传中宝店',
                    id: '5'
                },
                {
                    name: '广汽传祺信祺店',
                    id: '6'
                },
            ],
            carLists: [
                {
                    name: '第七代天籁',
                    id: 213
                },
                {
                    name: '轩逸经典',
                    id: 26
                },
                {
                    name: '轩逸',
                    id: 34
                },
                {
                    name: '奇骏',
                    id: 205
                },
                {
                    name: '逍客',
                    id: 21
                },
                {
                    name: '蓝鸟',
                    id: 194
                },
                {
                    name: '楼兰',
                    id: 197
                },
                {
                    name: '劲客',
                    id: 208
                },
                {
                    name: '骐达',
                    id: 29
                },
                {
                    name: '途达',
                    id: 210
                }
            ],
            distributorVal: '',
            carValue: '',
            name: '',
            tel: ''
        }
    }
    componentDidMount() {
    }
    componentWillReceiveProps() {
    }
    //选转经销商
    selectDistributor(e) {
        this.setState({
            distributorVal: e.target.value
        })
    }
    //选择车型
    selectCar(e) {
        this.setState({
            carValue: e.target.value
        })
    }
    //提交
    handleSubmit() {
        const {
            name,
            tel,
            distributorVal,
        } = this.state
        if (name && tel && distributorVal) {
            if ((/^1[34578]\d{9}$/.test(tel))) {
                makeAppointment({
                    MEDIA_LEAD_ID: '124840',
                    FK_DEALER_ID: distributorVal,
                    CUSTOMER_NAME: name,
                    SMART_CODE: 'A0000-000-000-00-00000',
                    OPERATE_TYPE: 0,
                    STATUS: '0',
                    MOBILE: tel
                })

            } else {
                message.error('请输入正确的手机号')
            }
        } else {
            message.error('请填写完整信息')
        }
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleTel(e) {
        this.setState({
            tel: e.target.value
        })
    }
    linkToMore(){
        window.location.href = 'https://www.gacmotor.com'
    }
    render() {
        const {
            distributorLists,
            carLists,
            distributorVal,
            carValue,
            detailsPicListsOne,
        } = this.state
        return (
            <div className="home_page">
                <img className="bg1" src={bg} alt="" />
                <div className="ask_price">
                    <div className="fill_lists">
                        <div className="fill_list">
                            <div className="fill_val">
                                <input type="text" placeholder="姓名" onChange={e => this.handleName(e)} />
                            </div>
                        </div>
                        <div className="fill_list">
                            <div className="fill_val">
                                <input type="text" placeholder="电话" onChange={e => this.handleTel(e)} />
                            </div>
                        </div>
                        <div className="fill_list">
                            <div className="fill_val">
                                <select
                                    onChange={e => this.selectDistributor(e)}
                                    value={distributorVal}
                                >
                                    <option value="" >意向经销商</option>
                                    {
                                        distributorLists.map((i, index) => {
                                            return (
                                                <option value={i.id} key={index}>{i.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        {/* <div className="fill_list fill_list_last">
                            <div className="fill_val">
                                <select
                                    onChange={e => this.selectCar(e)}
                                    value={carValue}
                                >
                                    <option value="" >意向车型</option>
                                    {
                                        carLists.map((i, index) => {
                                            return (
                                                <option value={i.id} key={index}>{i.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div> */}
                    </div>
                    <div className="submit_btn" onTouchStart={this.handleSubmit.bind(this)}>马上预约</div>
                </div>
                <div className="vadio">
                    <video src={video1} controls="controls"></video>
                </div>
                <div className="swiper_cont">
                    <SwiperCom>
                        {
                            detailsPicListsOne.map((i, index) => {
                                return (
                                    <div className="detail_pic" key={index}>
                                        <img className="detail_img" src={i.url} />
                                        {/* <div className="detail_content">{i.cont}</div> */}
                                    </div>
                                )
                            })
                        }
                    </SwiperCom>
                </div>
                <div className="peizhi">
                    <img className="bg1" src={peizhi} alt="" />
                </div>
                <div className="link_to_more" onClick={this.linkToMore}></div>
            </div>
        )
    }
}
export default HomePage
