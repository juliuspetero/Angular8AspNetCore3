using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeWebAPIService.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeWebAPIService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[EnableCors("AllowAccess")]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeRepository employeeRepository;

        public EmployeesController(IEmployeeRepository employeeRepository)
        {
            this.employeeRepository = employeeRepository;
        }


        // GET api/Employees
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Employee> model = this.employeeRepository.GetAllEmployee();
            if (!model.Any())
            {
                return NotFound(model);
            }
            return Ok(model);
        }

        // GET api/Employee/emp101
        [HttpGet("{code}")]
        public ActionResult Get(string code)
        {
            Employee employee = this.employeeRepository.GetEmployee(code);

            if (employee == null)
            {
                return NotFound(employee);
            }
            else
            {
                return Ok(employee);
            }
        }

        // POST api/Employees
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/Employees/emp101
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/employee/emp101
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
