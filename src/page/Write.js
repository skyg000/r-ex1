import { useContext, useState } from 'react'
import { DataContext } from '../Context'

function Write({wrup}) {
    const {data,setData} = useContext(DataContext);
    let [adata,asetData] = useState('');
    let insert = (e)=>{
        e.preventDefault();
        let a = e.target;
        let d = {
            name: a.name.value,
            code:Date.now()
        }
        setData([...data,d])
    }
    return (
        <article className='up' ref={wrup}>
            <h2> 참석 신청 하기 </h2>
            <form onSubmit={insert}> 
                <input type="text" name="name" placeholder="이름" />
                <input  type="email" name="email" placeholder="이메일"/>
                <input  type="tel" name="tel" placeholder="010-XXXX-XXXX"/>
                <input type="submit" value="신청하기" />
            </form>
        </article>
    )
}

export default Write