using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UserManager.Domain.Entities;

namespace UserManager.Infrastructure.Persistence.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasIndex(x => x.Id);
        builder.Property(t => t.FirstName)
            .HasMaxLength(50)
            .IsRequired();
        builder.Property(t => t.LastName)
            .HasMaxLength(50)
            .IsRequired();
    }
}
