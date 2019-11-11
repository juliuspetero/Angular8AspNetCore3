using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeWebAPIService.Models
{
    public interface IEmployeeRepository
    {
        Employee GetEmployee(string code);

        IEnumerable<Employee> GetAllEmployee();

        Employee Add(Employee employee);

        Employee Update(Employee employeeChanges);

        Employee Delete(int id);

    }
}
