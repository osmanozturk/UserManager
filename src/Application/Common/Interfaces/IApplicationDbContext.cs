using UserManager.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace UserManager.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<User> Users { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
