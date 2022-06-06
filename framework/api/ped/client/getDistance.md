# getDistance

```lua
NCs.Ped:getDistance(pedId, coords)
```
Return the distance between the pedId and the specified coords.

### Arguments
| Argument | Type    | Optional | Default | Explanation                      |
|----------|---------|----------|---------|----------------------------------|
| pedId    | number  | false    | -       | The ID of the ped.               |
| coords   | vector3 | false    | -       | The coords to know the distance. |

### Examples
```lua
local client = PlayerPedId()
local dst = NCs.Ped:getDistance(client, vector3(100.0, 780.0, 50.0))
print(dst) -- Print the distance between client and the coords.
```