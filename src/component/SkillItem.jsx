const SkillItem = ({image,category,items}) => {
    return (
        <div className='p-5 rounded-xl bg-zinc-800 space-y-5 cursor-pointer drop-shadow-xl'>
            <img src={image} className='w-20 mx-auto'></img>
            <div className='text-white'>
                <h3 className='text-xl md:text-3xl my-5 text-sky-400'>{category}</h3>
                <ul className='space-y-3'>
                    {
                        items.map((item,i)=><li key={i}>{item}</li>)
                    }  
                </ul>
            </div>
        </div>
    )
}

export default SkillItem