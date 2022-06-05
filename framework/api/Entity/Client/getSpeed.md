# getSpeed

```lua
NCs.Ped:getSpeed(entityId)
```
Return the speed of the specified entity in km/h.

### Arguments
| Argument | Type   | Optional | Default | Explanation           |
|----------|--------|----------|---------|-----------------------|
| entityId | number | false    | -       | The ID of the entity. |

### Examples
```lua
local client = PlayerPedId()
local speed = NCs.Ped:getSpeed(client)
print(speed) -- Will print the speed of the client.
```