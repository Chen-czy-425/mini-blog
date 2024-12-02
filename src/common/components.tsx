
export const ProjectName = (props: any) => {
    if (!props) {
        props.txt.productName="Project Name";
        props.txt.productDesign="Product Design";
    };
    return (
        <div className="">
            <span className='block text-[20px] font-[350] leading-[29px] text-[#090A0A]'>{props.txt.productName}</span>
            <span className='block text-[17px] font-[350] leading-[20.4px] text-[#7C7E80]'>{props.txt.productDesign}</span>
        </div>
    )
}
 
