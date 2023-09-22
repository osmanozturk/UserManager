using UserManager.Application.TodoLists.Queries.ExportTodos;

namespace UserManager.Application.Common.Interfaces;

public interface ICsvFileBuilder
{
    byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
}
