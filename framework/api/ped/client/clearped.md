# clearPed

```lua
NCs.Ped:clearPed(pedId)
```
Remove all animations, prop, blood on the specified ped.

### Arguments
| Argument | Type    | Optional | Default | Explanation                          |
|----------|---------|----------|---------|--------------------------------------|
| pedId    | number  | false    | -       | The ID of the ped you want to clear. |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped:clearPed(client)
```