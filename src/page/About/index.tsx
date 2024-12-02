import aboutMain from '../../images/about-main.png'

const AboutData = {
    year: "2021",
    company: "Company",
    designer: "Product Designer",
}

const Banner = () => {
    return (
        <div className="flex">
            <div className="w-[590px] h-[50.4px] text-[36px] font-[350]">
                Hello 👋
            </div>
            <div className="w-[670px] h-[175.2px] text-[17px] font-[350]">
                <span className="block mb-[5px]">I’m a digital product designer from the world. I’m is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and "No halfway house in the quality of food you serve" is his main motto,says our head-ched Sanjay </span>
                <span>I  believe great product design comes from focusing on the right questions, not the right answers.</span>
            </div>
        </div>
    )
}

const Content = () => {
    return (
        <div className=" ml-[-80px] mr-[-80px] bg-[#292F32] h-[600px] mt-[79px]">
            <div className='flex flex-col items-center justify-center h-[600px]'>
                <div className='mb-[44px]'>
                    <img src={aboutMain} alt="" />
                </div>
                <div className='w-[631px] text-[#fff] flex flex-col items-center'>
                    <span className='text-[28px]'>Personal</span>
                    <div className='text-center'>
                        I’m a digital product designer from the world. I’m is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and "No halfway house in the quality of food you serve" is his main motto,says our head-ched Sanjay
                    </div>
                </div>
            </div>
        </div>
    )
}

const TextContext = () => {
    const data = [];
    for (let index = 0; index < 6; index++) {
        data.push(
            <div key={index} className=''>
                <p>{AboutData.year}</p>
                <a href="" className='text-[#1C17FF]'>{AboutData.company}</a>
                <p>{AboutData.designer}</p>
            </div>
        )

    }
    return (
        <div className="grid grid-cols-[repeat(3,_1fr)] w-[670px] h-[243px]">
            {data}
        </div>
    )
}

const Text = () => {
    return (
        <div className="mt-[80px] mb-[90px] flex justify-between">
            <div className="text-[28px] font-[350] w-[590px]">
                Experience
            </div>
            <TextContext />
        </div>
    )
}

const About = () => {
    return (
        <div className="w-[1280px] mx-auto">
            <Banner></Banner>
            <Content></Content>
            <Text></Text>
        </div>
    )
}
export default About;