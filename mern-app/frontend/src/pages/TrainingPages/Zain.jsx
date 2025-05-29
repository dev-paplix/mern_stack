import { sick_leave } from "../../assets/images"
import { employee_salary } from "../../assets/images"





const Zain = () => {
  return (
    <div>
      <h1 style={{backgroundColor: "lightblue" , color: "black"}}>One step at a time</h1>
      <br></br>
      
      <img src={sick_leave} alt="Sick Leave" style={{ width: '100%', height: 'auto'}} />
      <img src={employee_salary} alt="Salary" style={{ width: '100%', height: 'auto'}} />

    </div>
  )
}

export default Zain
