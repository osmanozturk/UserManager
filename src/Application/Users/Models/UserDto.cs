using UserManager.Application.Common.Mappings;
using UserManager.Domain.Entities;

namespace UserManager.Application.Users.Models;
public class UserDto : IMapFrom<User>
{
    public Guid Id { get; set; } 
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public DateTime DateOfBirth { get; set; }
}

