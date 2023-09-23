using UserManager.Application.Common.Exceptions;
using UserManager.Application.Common.Interfaces;
using UserManager.Domain.Entities;
using MediatR;

namespace UserManager.Application.Users.Commands.DeleteUser;

public record DeleteUserCommand(Guid Id) : IRequest;

public class DeleteUserCommandHandler : IRequestHandler<DeleteUserCommand>
{
    private readonly IApplicationDbContext _context;

    public DeleteUserCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Handle(DeleteUserCommand request, CancellationToken cancellationToken)
    {
        var entity = await _context.Users
            .FindAsync(new object[] { request.Id }, cancellationToken);

        if (entity == null)
        {
            throw new NotFoundException(nameof(User), request.Id);
        }

        _context.Users.Remove(entity);

        await _context.SaveChangesAsync(cancellationToken);
    }

}
