import React, { Component } from 'react';
import './home.less'
import bg1 from "../../static/images/bg1.png"
import bg2 from "../../static/images/bg2.jpg"
import bg3 from "../../static/images/bg3.jpg"
import bg4 from "../../static/images/bg4.jpg"
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
            distributorLists: [
                {
                    name: '重庆东风南方渝兴专营店',
                    id: 'J0402'
                },
                {
                    name: '重庆东风南方渝发专营店',
                    id: 'J0407'
                },
                {
                    name: '重庆东风南方渝东专营店',
                    id: 'J0408'
                },
                {
                    name: '重庆东风南方盛泰专营店',
                    id: 'J0411'
                },
                {
                    name: '重庆广汇都灵专营店',
                    id: 'J0405'
                },
                {
                    name: '重庆商社西星专营店',
                    id: 'J0403'
                },
                {
                    name: '万州盛泰飞骏专营店',
                    id: 'J0406'
                },
                {
                    name: '涪陵商社文化专营店',
                    id: 'J0410'
                }
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
            carValue
        } = this.state
        if (name && tel && distributorVal && carValue) {
            if ((/^1[34578]\d{9}$/.test(tel))) {
                makeAppointment({
                    MEDIA_LEAD_ID:'124840',
                    FK_DEALER_ID:distributorVal,
                    CUSTOMER_NAME:name,
                    SMART_CODE:'A0000-000-000-00-00000',
                    OPERATE_TYPE:0,
                    STATUS:'0',
                    MOBILE:tel
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
    render() {
        const {
            distributorLists,
            carLists,
            distributorVal,
            carValue
        } = this.state
        return (
            <div className="home_page">
                <img className="bg1" src={bg1} alt="" />
                <img className="bg2" src={bg2} alt="" />
                <img className="bg3" src={bg3} alt="" />
                <img className="bg4" src={bg4} alt="" />
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
                        <div className="fill_list fill_list_last">
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
                        </div>
                    </div>
                    <div className="submit_btn" onTouchStart={this.handleSubmit.bind(this)}>提交</div>
                </div>
            </div>
        )
    }
}
export default HomePage
