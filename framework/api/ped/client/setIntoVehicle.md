# setIntoVehicle

```lua
NCs.Ped:setIntoVehicle(pedId, vehicleId, seat)
```

### Examples
```lua
local client = PlayerPedId()
local vehicle, _ = NCs.Vehicle:getClosest(NCs.Entity:getPosition(client))
NCs.Ped.setIntoVehicle(client, vehicle, -1)
```