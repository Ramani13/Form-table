function Table({tableData,handleEdit,handleDelete})
{
    return(
    <table className="w-full border mt-4">
        <thead>
            <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data,idx)=>{
                return(
                    <tr key={idx}>
                      <td className="border border-gray-300 px-4 py-2">
                        {data.name}</td>
                        <td className="border border-gray-300 px-4 py-2">
                        {data.email}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <button type="button" className="bg-blue-400 text-white px-4 py mr-2 rounded-lg"
                            onClick={()=>
                            {
                                handleEdit(idx)
                            }
                            }
                            >Edit</button>
                            <button type="button" className="bg-red-500 text-white px-4 py rounded-lg"
                            onClick={()=>{
                                handleDelete(idx)
                            }}
                            >Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
}
export default Table