# registerConsoleCommand

```lua
NCs.Commands:registerConsoleCommand(command, handler)
```
Register a simple command in console.

### Arguments
| Argument | Type     | Optional | Default | Explanation             |
|----------|----------|----------|---------|-------------------------|
| command  | string   | false    | -       | The name of the command |
| handler  | function | false    | -       | -                       |

### Examples
```lua
NCs.Commands:registerConsoleCommand('ncs_framework')
```