# setHeading

```lua
NCs.Ped:setHeading(entityId, heading)
```
Set the heading of the specified entity.

### Arguments
| Argument | Type   | Optional | Default | Explanation           |
|----------|--------|----------|---------|-----------------------|
| entityId | number | false    | -       | The ID of the entity. |
| heading  | number | false    | -       | Value of the heading. |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.setHeading(client, 180.0)
```