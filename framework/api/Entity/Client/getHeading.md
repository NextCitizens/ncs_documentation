# getHeading

```lua
NCs.Ped:getHeading(entityId)
```
Get the heading of the specified entity.

### Arguments
| Argument | Type   | Optional | Default | Explanation           |
|----------|--------|----------|---------|-----------------------|
| entityId | number | false    | -       | The ID of the entity. |

### Examples
```lua
local client = PlayerPedId()
local heading = NCs.Ped.getHeading(client)
if (heading >= 90.0) then
    print('The heading of the client is higher than 90.0')
else
    print('The heading of the client is less than 90.0')
end 
```