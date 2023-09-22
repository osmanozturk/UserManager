using UserManager.Application.Common.Interfaces;

namespace UserManager.Infrastructure.Services;

public class DateTimeService : IDateTime
{
    public DateTime Now => DateTime.Now;
}
