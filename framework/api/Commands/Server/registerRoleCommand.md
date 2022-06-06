# registerRoleCommand

```lua
NCs.Commands:registerRoleCommand(command, handler)
```
Register a simple role.

### Arguments
| Argument | Type     | Optional | Default | Explanation          |
|----------|----------|----------|---------|----------------------|
| command  | string   | false    | -       | The name of the role |
| handler  | function | false    | -       | -                    |

### Examples
```lua
NCs.Commands:registerRoleCommand('ncs_framework', 'user')
```