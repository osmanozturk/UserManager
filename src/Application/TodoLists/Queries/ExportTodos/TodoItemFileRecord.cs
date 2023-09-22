using UserManager.Application.Common.Mappings;
using UserManager.Domain.Entities;

namespace UserManager.Application.TodoLists.Queries.ExportTodos;

public class TodoItemRecord : IMapFrom<TodoItem>
{
    public string? Title { get; init; }

    public bool Done { get; init; }
}
