const Form=({handleFormDataChange,formData,handleSubmit,editIndex,searchItem,handleSearchChange}) => {
    return(
       <>
       <h1 className="text-2xl font-semibold mb-4">Form and Table Example</h1>
       <form className=" rounded-lg p-4 " onSubmit={handleSubmit}>
        <input className="w-full p-2 border rounded mb-3" type="text" placeholder="Name"
        onChange={(e)=>{
             const {value} =e.target;
             handleFormDataChange("name",value);
        }}
        required
         value={formData.name}
        
        />
         <input className="w-full p-2 border rounded mb-3" type="text" placeholder="Email" 
          onChange={(e)=>{
             const {value} =e.target;
             handleFormDataChange("email",value);
        }}
        required
        value={formData.email}
         />
         <button className="bg-blue-400 text-white p-2 rounded-2xl w-16" type="submit">
          {editIndex === null ? "Add" : "Edit"}
         </button>
         <input className="w-full  mt-3 border border-gray-400 h-9 p-2" placeholder="Search by name"
         value={searchItem}
         onChange={handleSearchChange}
         />
       </form>
       </>
    )
}
export default Form