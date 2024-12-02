import { useState } from 'react';
import workMainImage from '../../images/work-main.png';
import workMainVectort1 from '../../images/work-main-vectort1.png';
import workMainVectort2 from '../../images/work-main-vectort2.png';
import workMainVectort3 from '../../images/work-main-vectort3.png';
import { ProjectName } from '../../common/components'
import { Link } from "react-router-dom";

// <Link to={`/${item.type}`} ></Link>

type Description = {
    id?: number
    productName?: string,
    productDesign?: string,
    url?: string
}

// 数据
const listDescription: Description[] = [
    {
        id: 1,
        productName: 'Product Name 1',
        productDesign: 'Product Design 1',
        url: workMainVectort1
    },
    {
        id: 2,
        productName: 'Product Name 2',
        productDesign: 'Product Design 2',
        url: workMainVectort2
    },
    {
        id: 3,
        productName: 'Product Name 3',
        productDesign: 'Product Design 3',
        url: workMainVectort3
    },
]


// 主体
const Main = () => {
    const [description] = useState<Description>({})

    return (
        <div>
            <Link to={`/Detail`} >
                <div className='w-[100%] mb-[12px]'>
                    <img src={workMainImage} />
                </div>
                <ProjectName txt={description} />
            </Link>
        </div>
    )
}

// 内容
const Content = () => {
    return (
        <div className='w-[1280px] mx-auto mt-[80px] grid grid-cols-[repeat(3,_1fr)]' >

            {
                listDescription.map(item => (

                    <div key={item.id}>
                        <Link to={`/Detail`} >
                            <div className='mb-[16px]'>
                                <img src={item.url} />
                            </div>
                            <ProjectName txt={item} />
                        </Link>
                    </div>

                ))
            }

        </div>
    )
}

const Work = () => {
    return (
        <div className="w-[1280px] mx-auto">
            <h2 className='w-[670px] h-[100px] text-[36px] font-[350] mb-[40px]' >
                I’m a digital product designer from the world
            </h2>
            <Main />
            <Content />
        </div>
    )

}

export default Work;