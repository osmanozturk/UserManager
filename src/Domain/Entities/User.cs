namespace UserManager.Domain.Entities;
public class User : BaseAuditableEntity
{
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public DateTime DateOfBirth { get; set; }
}
