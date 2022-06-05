# getNearestCoords

```lua
NCs.Ped:getNearestCoords(pedId, coords, radius)
```

### Examples
```lua
local client = PlayerPedId()
local dst = NCs.Ped:getDistance(client, vector3(100.0, 780.0, 50.0))
print(dst) -- Print the distance between client and the specified coords.
```