import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import Table from './Components/Table'

function App() {
  const initialFormData={
    name:"",
    email:""
  }
 const [formData,setFormData]= useState(initialFormData)
const[tableData,setTableData]=useState([])
const[editIndex,setEditIndex]=useState(null)
const[searchItem, setSearchItem]=useState("")

const handleFormDataChange =(key,value) =>
{
  setFormData({
    ...formData,
    [key]:value
  })
}

const handleSubmit=(e)=>{
  e.preventDefault();
  if(!formData.email.includes("@gmail.com"))
  {
    alert("Please enter the valid email")
    return
  }
  if(editIndex===null){
     setTableData([...tableData,formData])
  setFormData(initialFormData)
  }else{
    tableData[editIndex]=formData
    setFormData(initialFormData)
    setTableData(tableData)
    setEditIndex(null)
  }
}
const handleEdit=(index)=>{
  console.log("Edited",index)
  const clickedItem=tableData[index]
  setFormData(clickedItem)
  setEditIndex(index)
}
const handleDelete=(index)=>
{
   const updatedTable = [...tableData]
  updatedTable.splice(index, 1)
  setTableData(updatedTable)
}
const handleSearchChange=(e)=>
{
  setSearchItem(e.target.value)
}
const filteredData = tableData.filter((item) =>
  item.name.toLowerCase().includes(searchItem.toLowerCase())
)

  return (
    <>
    <Form handleFormDataChange={handleFormDataChange}
    handleSubmit={handleSubmit}
    formData={formData}
    editIndex={editIndex}
     searchItem={searchItem}
  handleSearchChange={handleSearchChange}
    />
    <Table tableData={filteredData} 
    handleEdit={handleEdit}
    handleDelete={handleDelete}/>

    </>
  )
}

export default App
