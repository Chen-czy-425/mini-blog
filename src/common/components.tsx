
export const ProjectName = (props: any) => {
    if (props) {
        props.txt.productName = "Project Name";
        props.txt.productDesign = "Product Design";
    };
    return (
        <div className="">
            <span className='block text-[20px] font-[350] leading-[29px] text-[#090A0A] hover:text-[#1C17FF]'>{props.txt.productName}</span>
            <span className='block text-[17px] font-[350] leading-[20.4px] text-[#7C7E80] hover:text-[#1C17FF]'>{props.txt.productDesign}</span>
        </div>
    )
}

export const ModuleIntroduction = (props: { title: string; content: string }) => {
    return (
        <div className='mb-[40px]'>
            <p className='text-[28px] font-[350] leading-[40px] mb-[24px]'>{props.title}</p>
            <div className='w-[670px] text-[17px]'>
                {props.content}
            </div>
        </div>
    )

}