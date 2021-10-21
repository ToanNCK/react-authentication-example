using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class AddUserDefault : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO [dbo].[User] ([FirstName] ,[LastName] ,[Username] ,[Password]) VALUES (N'Nguyễn Công Khánh', N'Toàn', 'admin@gmail.com', 'Admin@123') " +
                                 "INSERT INTO [dbo].[User] ([FirstName] ,[LastName] ,[Username] ,[Password]) VALUES (N'Test', N'thôi mà :)', 'test@gmail.com', 'Test@123')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
