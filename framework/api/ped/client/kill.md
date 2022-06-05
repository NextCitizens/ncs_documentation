# kill

```lua
NCs.Ped:kill(pedId)
```
Kill the specified ped.

### Arguments
| Argument      | Type    | Optional   | Default | Explanation               |
|---------------|---------|------------|---------|---------------------------|
| pedId         | number  | false      | -       | The ID of the ped.        |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.kill(client)
```