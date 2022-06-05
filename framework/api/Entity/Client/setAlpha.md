# setAlpha

```lua
NCs.Ped:setAlpha(entityId, value)
```
Set the alpha of the specified entity.

### Arguments
| Argument | Type   | Optional | Default | Explanation           |
|----------|--------|----------|---------|-----------------------|
| entityId | number | false    | -       | The ID of the entity. |
| value    | number | false    | -       | Value of the alpha.   |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.setAlpha(client, 75.0)
```