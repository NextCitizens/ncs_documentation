# getNearestCoords

```lua
NCs.Ped:getNearestCoords(pedId, coords, radius)
```

### Arguments
| Argument              | Type      | Optional   | Default | Explanation                                               |
|-----------------------|-----------|------------|---------|-----------------------------------------------------------|
| pedId                 | number    | false      | -       | The ID of the ped.                                        |
| transparentBackground | boolean   | false      | -       | True = Transparent Background / False = Normal Background |

### Examples
```lua
local client = PlayerPedId()
local dst = NCs.Ped:getDistance(client, vector3(100.0, 780.0, 50.0))
print(dst) -- Print the distance between client and the specified coords.
```