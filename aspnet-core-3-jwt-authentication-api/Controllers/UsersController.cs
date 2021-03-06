using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Models.View;
using WebApi.Services;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Tên đăng nhập hoặc mật khẩu không đúng" });

            return Ok(response);
        }

        [Authorize]
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }

        [HttpPost("register")]
        public IActionResult Register(UserViewModel model)
        {
            var response = _userService.Register(model);
            return BadRequest(new { message = response });
        }
    }
}
