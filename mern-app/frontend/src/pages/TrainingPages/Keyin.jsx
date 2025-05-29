import { employee_equipment } from "../../assets/icons"

const Keyin = () => {
  return (
    <div>
      <h1 class="font-mono mb-6">Equipment</h1>
      <img src={employee_equipment} alt="Equipment" style={{ width: '10%', height: 'auto', margin: 'auto' }} />
      <div class="mt-3">
        <table class="border-collapse border border-gray-400 ..." style={{ width: '100%'}}>
          <thead class="bg-gray-200">
            <tr>
              <th class="border border-gray-300 ...">State</th>
              <th class="border border-gray-300 ...">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 ...">Indiana</td>
              <td class="border border-gray-300 ...">Indianapolis</td>
            </tr>
            <tr>
              <td class="border border-gray-300 ...">Ohio</td>
              <td class="border border-gray-300 ...">Columbus</td>
            </tr>
            <tr>
              <td class="border border-gray-300 ...">Michigan</td>
              <td class="border border-gray-300 ...">Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <br></br><button class="text-white bg-indigo-500 hover:bg-fuchsia-500 ...">Click</button>
    </div>
  )
}

export default Keyin
