# getDistance

```lua
NCs.Ped:getDistance(pedId, coords)
```
Return the distance between the pedId and the specified coords.

### Examples
```lua
local client = PlayerPedId()
local dst = NCs.Ped:getDistance(client, vector3(100.0, 780.0, 50.0))
print(dst) -- Print the distance between client and the coords.
```