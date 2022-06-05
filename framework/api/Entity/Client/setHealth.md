# setHealth

```lua
NCs.Ped:setHealth(pedId, value)
```
Set the health of the specified entity.

### Arguments
| Argument | Type   | Optional | Default | Explanation           |
|----------|--------|----------|---------|-----------------------|
| entityId | number | false    | -       | The ID of the entity. |
| value    | number | false    | -       | Value of the health.  |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.setHealth(client, 50.0)
```