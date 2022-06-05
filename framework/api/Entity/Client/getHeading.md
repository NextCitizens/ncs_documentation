# getHeading

```lua
NCs.Ped:getHeading(entityId)
```

### Arguments
| Argument | Type   | Optional | Default | Explanation           |
|----------|--------|----------|---------|-----------------------|
| entityId | number | false    | -       | The ID of the entity. |

### Examples
```lua
local client = PlayerPedId()
local heading = NCs.Ped.getHeading(client)
print(heading) -- Will print heading of the client.
```