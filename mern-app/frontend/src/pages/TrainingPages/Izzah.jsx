import { employee_allowance } from "../../assets/icons"

const Izzah = () => {
  return (
    
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl ">
      
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src={employee_allowance} />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">Employee Allowance</span>
  </div>
  <div>
    </div>
    <div class="h-14 bg-linear-to-r from-cyan-500 to-blue-500">
      Request
    </div>
    <table class="table-auto">
  <thead>
    <tr>
      <th>Item</th>
      <th>Min</th>
      <th>Max</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item 1</td>
      <td>RM 100</td>
      <td>RM 200</td>
    </tr>
     <tr>
      <td>Item 2</td>
      <td>RM 150</td>
      <td>RM 250</td>
    </tr>
    <tr>
      <td>Item 3</td>
      <td>RM 200</td>
      <td>RM 250</td>
    </tr>
  </tbody>
</table>
    </div>
  
  
  )
}

export default Izzah
