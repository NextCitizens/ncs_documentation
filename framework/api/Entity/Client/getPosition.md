# getPosition

```lua
NCs.Ped:getPosition(entityId)
```
Get the position of the specified entity.

### Arguments
| Argument | Type   | Optional | Default | Explanation           |
|----------|--------|----------|---------|-----------------------|
| entityId | number | false    | -       | The ID of the entity. |

### Examples
```lua
local client = PlayerPedId()
local position = NCs.Ped:getPosition(client)
print(position) -- Will print the position of the client.
```