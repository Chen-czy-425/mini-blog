import { ModuleIntroduction } from '../../common/components'
import workMainImage from '../../images/work-main.png';
import overview from '../../images/overview.png'
import workMainVectort2 from '../../images/work-main-vectort2.png';
import workMainVectort3 from '../../images/work-main-vectort3.png';
import designVectort1 from '../../images/design-vectort1.png';
import designVectort2 from '../../images/design-vectort2.png';
import designVectort3 from '../../images/design-vectort3.png';

// 顶部介绍
const Header = () => {
    return (
        <div className='mb-[78.4px]'>
            <div className='flex mb-[40px]'>
                <h1 className='w-[475px] mr-[20px] text-[36px]'>Project Name</h1>
                <div className='h-[120.6px] flex flex-col justify-between'>
                    <div className=''>
                        <div>
                            <span className='text-[#1C17FF;] mr-[16px]'>Project.co</span>
                            <span>2021</span>
                        </div>
                        <div>Product Designer</div>
                    </div>
                    <div>
                        <span>This is a short description of this item.</span>
                    </div>
                </div>
            </div>
            <img src={workMainImage} alt="" />
        </div>

    )
}

// Overview概述
const Overview = () => {
    return (
        <div className='mb-[80px]'>
            <ModuleIntroduction title='Overview' content='Focus your leadership around a common goal with this growth plan and strengthen your community.' />
            <img src={overview} alt="" />
        </div>

    )
}

// 品牌
const Branding = () => {
    return (
        <div className='mb-[80px]'>
            <ModuleIntroduction title='Branding' content='Focus your leadership around a common goal with this growth plan and strengthen your community.' />
            <img src={workMainVectort2} alt="" className='inline w-[630px] mr-[20px]' />
            <img src={workMainVectort3} alt="" className='inline w-[630px]' />
        </div>
    )
}

// 设计
const Design = () => {
    return (
        <div >
            <ModuleIntroduction title='UI Design' content='Focus your leadership around a common goal with this growth plan and strengthen your community.' />
            <div className='h-[700px] bg-[#292F32] flex justify-center items-center mb-[80px]'>
                <div className='text-[#FFF] w-[866px] h-[590px] flex justify-between' >
                    <img src={designVectort1} alt="" className='h-[542.59px]' />
                    <img src={designVectort2} alt="" className='h-[542.59px] mt-[23.71px]' />
                    <img src={designVectort3} alt="" className='h-[542.59px] mt-[47.41px]' />
                </div>
            </div>
            <div className='h-[700px] bg-[#292F32] flex justify-center items-center mb-[80px]'>
                <img src={workMainVectort2} alt="" className='w-[648px]  mt-[131px]'/>
            </div>
        </div>
    )
}
const Detail = () => {
    return (
        <div>
            <Header />
            <Overview />
            <Branding />
            <Design />
            <div>
                <a href="" className='block text-[#7c7e80] leading-[15px] mb-[8px]'>Next</a>
                <span className='text-[20px] leading-[29px]'>Project Title</span>
            </div>
        </div>
    )
}
export default Detail;