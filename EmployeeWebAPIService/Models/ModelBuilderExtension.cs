using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeWebAPIService.Models
{
    public static class ModelBuilderExtension
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().HasData(
                new Employee
                {
                   Code = "emp101",
                   Name = "Tom",
                   Gender = "Male",
                   AnnualSalary = 5500.000,
                   DateOfBirth = "6/25/1988"
                },
                new Employee
                {
                    Code = "emp102",
                    Name = "Alex",
                    Gender = "Male",
                    AnnualSalary = 5700.950,
                    DateOfBirth = "9/6/1982"
                },
                new Employee
                {
                    Code = "emp103",
                    Name = "Mike",
                    Gender = "Male",
                    AnnualSalary = 5900.000,
                    DateOfBirth = "9/6/1982"
                },
                new Employee
                {
                    Code = "emp104",
                    Name = "Mary",
                    Gender = "Female",
                    AnnualSalary = 6500.826,
                    DateOfBirth = "10/14/1980"
                },
                new Employee
                {
                    Code = "emp105",
                    Name = "Nancy",
                    Gender = "Female",
                    AnnualSalary = 6700.826,
                    DateOfBirth = "12/15/1982"
                },
                new Employee
                {
                    Code = "emp106",
                    Name = "Steve",
                    Gender = "Male",
                    AnnualSalary = 7700.481,
                    DateOfBirth = "11/18/1979"
                }
                );
        }
    }
}
