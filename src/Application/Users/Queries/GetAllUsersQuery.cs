using AutoMapper;
using AutoMapper.QueryableExtensions;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using UserManager.Application.Common.Interfaces;
using UserManager.Application.Users.Models;

namespace UserManager.Application.Users.Queries;
public record GetAllUsersQuery : IRequest<List<UserDto>>
{
}

public class GetAllUsersQueryValidator : AbstractValidator<GetAllUsersQuery>
{
    public GetAllUsersQueryValidator()
    {
    }
}

public class GetAllUsersQueryHandler : IRequestHandler<GetAllUsersQuery, List<UserDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;

    public GetAllUsersQueryHandler(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }



    public async Task<List<UserDto>> Handle(GetAllUsersQuery request, CancellationToken cancellationToken)
    {
        return await _context.Users
            .ProjectTo<UserDto>(_mapper.ConfigurationProvider)
            .ToListAsync();
    }
}
