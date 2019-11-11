using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeWebAPIService.Models
{
    public class Employee
    {
        //[Key]
        public string Code { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public double AnnualSalary { get; set; }
        public string DateOfBirth { get; set; }
    }
}
