# getHealth

```lua
NCs.Ped:getHealth(pedId)
```
Get the health of the specified ped.

### Arguments
| Argument | Type    | Optional | Default | Explanation                      |
|----------|---------|----------|---------|----------------------------------|
| pedId    | number  | false    | -       | The ID of the ped.               |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.getHealth(client)
```