import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import SearchResult from './component/SearchResult/SearchResult';
 export const BASE_URL = import.meta.env.VITE_BASE_URL



const App = () => {
  
  const [filteredData,setFilteredData] =useState(null);
  const [data,setData] =useState(null);
  const [loading,setLoading] =useState(false)
  const [error,setError] = useState(null)
  const [selectedBtn,setSelectedBtn]= useState("all")
  useEffect(() => {
    const FetchFoodData = async() =>{
      setLoading(true);
      try {
        const respone =await fetch(BASE_URL)
        const json = await respone.json()
        setData(json)
        setFilteredData(json)
        setLoading(false)
      } catch (error) {
        setError("fail to fetch")
      }
    };
    FetchFoodData()
  }, [])
  
  const searchFood= (e)=>{
    const searchValue = e.target.value;

    if(searchValue ===""){
       setFilteredData(null)
    }

    const filter =data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filter)
  }

  const filteredFood =(type) =>{

    if(type==="all"){
      setFilteredData(data);
      setSelectedBtn("all")
      return;
    }
    const filter =data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter)
    setSelectedBtn(type)
  }

  const filterBtn =[

    {
      name: "All",
      type:"all"
    },
    {
      name:  "BreakFast",
      type: "BreakFast",
    },
    {
      name: "Lunch",
      type:"Lunch"
    },
    {
      name: "Dinner",
      type:"Dinner"
    },
  ]

  if(error) return <div>{error}</div>
  if(loading) return <div>Loading........</div>
  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="./logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input onChange={searchFood}  placeholder='search food...' />
        </div>
      </TopContainer>

      <FilterContainer>
        {filterBtn.map((value)=>(
          <Button 
          isSelected={selectedBtn ===value.type}
          key={value.name} onClick={()=> filteredFood(value.type)}>{value.name}</Button>
        ))}
        
      </FilterContainer>
    </Container>
      <SearchResult data={filteredData}/>


    </>
  )
}

export default App

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content  : space-between;
  align-items : center;
  padding: 16px;
  .search{
    input{background-color: transparent;
    border: 1px solid red;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    height: 40px;
    padding: 10px;
    &::placeholder{
      color: white;
    }
  }
  }

  @media (0<width<600px){
    flex-direction:column;
    height: 110px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 40px;
`;
export const Button = styled.button`
  background:${({isSelected})=>(isSelected ? "red ":"#ff4343")};
  outline:1px solid ${({isSelected})=>(isSelected ? "white ":"#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: red;
  }
  `;

