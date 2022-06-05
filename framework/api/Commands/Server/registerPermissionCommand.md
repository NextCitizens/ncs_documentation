# registerPermissionCommand

```lua
NCs.Commands:registerPermissionCommand(command, permission, handler)
```

### Arguments
| Argument   | Type     | Optional | Default | Explanation                       |
|------------|----------|----------|---------|-----------------------------------|
| command    | string   | false    | -       | The name of the command           |
| permission | string   | false    | -       | The permission to use the command |
| handler    | function | false    | -       | -                                 |

### Examples
```lua
NCs.Commands:registerPermissionCommand('ncs_framework', 'admin')
```