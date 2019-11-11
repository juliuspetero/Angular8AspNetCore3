using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeWebAPIService.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Code = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Gender = table.Column<string>(nullable: true),
                    AnnualSalary = table.Column<double>(nullable: false),
                    DateOfBirth = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Code);
                });

            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "Code", "AnnualSalary", "DateOfBirth", "Gender", "Name" },
                values: new object[,]
                {
                    { "emp101", 5500.0, "6/25/1988", "Male", "Tom" },
                    { "emp102", 5700.9499999999998, "9/6/1982", "Male", "Alex" },
                    { "emp103", 5900.0, "9/6/1982", "Male", "Mike" },
                    { "emp104", 6500.826, "10/14/1980", "Female", "Mary" },
                    { "emp105", 6700.826, "12/15/1982", "Female", "Nancy" },
                    { "emp106", 7700.4809999999998, "11/18/1979", "Male", "Steve" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
