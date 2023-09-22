using UserManager.Application.Common.Exceptions;
using UserManager.Application.Common.Interfaces;
using UserManager.Domain.Entities;
using MediatR;

namespace UserManager.Application.Users.Commands.UpdateUser;

public record UpdateUserCommand : IRequest
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public DateTime DateOfBirth { get; set; }
}

public class UpdateUserCommandHandler : IRequestHandler<UpdateUserCommand>
{
    private readonly IApplicationDbContext _context;

    public UpdateUserCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Handle(UpdateUserCommand request, CancellationToken cancellationToken)
    {
        var user = await _context.Users
            .FindAsync(new object[] { request.Id }, cancellationToken);

        if (user == null)
        {
            throw new NotFoundException(nameof(User), request.Id);
        }

        user.FirstName = request.FirstName;
        user.LastName = request.LastName;
        user.DateOfBirth = request.DateOfBirth;

        await _context.SaveChangesAsync(cancellationToken);
    }
}
