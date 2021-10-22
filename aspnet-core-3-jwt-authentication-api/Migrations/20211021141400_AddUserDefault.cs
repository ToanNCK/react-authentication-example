using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class AddUserDefault : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"IF (
            (
                SELECT COUNT(*)FROM dbo.[User] WHERE Username = 'admin@gmail.com'
            ) < 1
            AND
                (
                    SELECT COUNT(*)FROM dbo.[User] WHERE Username = 'test@gmail.com'
                ) < 1
                )
            BEGIN
                INSERT INTO [dbo].[User]
                (
                [FirstName],
            [LastName],
            [Username],
            [Password]
            )
            VALUES
                (N'Nguyễn Công Khánh', N'Toàn', 'admin@gmail.com', 'Admin@123');
            INSERT INTO [dbo].[User]
                (
                [FirstName],
            [LastName],
            [Username],
            [Password]
            )
            VALUES
                (N'Test', N'thôi mà :)', 'test@gmail.com', 'Test@123');
            END;");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
