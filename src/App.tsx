import { Link, Outlet } from "react-router-dom";
import { useState } from "react";


import trademarkVector1 from './images/trademark-vector1.png';
import trademarkVector2 from './images/trademark-vector2.png';


const tabs = [
    { type: 'work', text: 'Work' },
    { type: 'about', text: 'About' },
]
const txt = "Get in touch"



// 创建标签
const Tag = () => {
    const [type, setType] = useState('work')
    const headType = (type: any) => {
        setType(type);
    }
    return (
        tabs.map(item => (
            <div
                className="leading-[4.31rem] w-20 h-16 text-center"
                key={item.type}
                onClick={
                    () => headType(item.type)
                }>

                <Link to={`/${item.type}`} className={`${type !== item.type && 'text-[#939596]'}`}>{item.text}</Link>
            </div>
        ))
    )
}

// 创建头部
const Header = () => {
    return (
        <div className=" mt-[80px] mb-[80px]  flex justify-end  w-[1280px]">
            <Tag></Tag>
        </div>
    )
}


// 创建底部
const Bottom = () => {
    return (
        <div className="flex justify-between py-[40px] mx-auto w-[1280px] ">
            <div className="text-[17px] font-normal">
                <a href="#" className="text-[#1C17FF]">{txt}</a>
            </div>
            <div className="flex">
                <a href="#" className="mr-[18px]"><img src={trademarkVector1} /></a>
                <a href="#"><img src={trademarkVector2} /></a>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="">
            <div className="w-auto flex justify-center">
                {/* 头部 */}
                <Header />
            </div>
            <div className="w-auto flex justify-center">
                {/* 页面跳转 */}
                <Outlet />
            </div>
            <div className="w-auto flex justify-center">
                {/* 底部 */}
                <Bottom />
            </div>

        </div>
    )
}

export default App
