import { createContext, useState } from 'react'
const DataContext = createContext();

function Context({children}) {
    const [data,setData] = useState([]);
    return (
        <article>
            <h2>Context 사용 </h2>
            <p>Context사용은 createContext함수를 선언해줌<br/>
            Context = Provider를 통해서 공유하고자 하는 자식 컴포넌트에  바로 접근가능<br/> 
            value = data,setData 를 통해 값을 공유해줌 <br/>
            data,setData = useState; = 컴포넌트의 상태를 관리 data = 값을 받는 곳,  setData = 값을 수정하는 곳<br/>
            DataContext에 값을 저장하여 각 컴포넌트에 뿌림
            
            </p>
        
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
        </article>
    )
}

export  {Context,DataContext}