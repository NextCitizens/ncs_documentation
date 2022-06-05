# setIntoVehicle

```lua
NCs.Ped:setIntoVehicle(pedId, vehicleId, seat)
```

### Arguments
| Argument  | Type   | Optional   | Default | Explanation                  |
|-----------|--------|------------|---------|------------------------------|
| pedId     | number | false      | -       | The ID of the ped.           |
| vehicleId | number | false      | -       | The ID of the vehicle.       |
| seat      | number | false      | -       | The Seat where the ped goes. |

### Examples
```lua
local client = PlayerPedId()
local vehicle, _ = NCs.Vehicle:getClosest(NCs.Entity:getPosition(client))
NCs.Ped.setIntoVehicle(client, vehicle, -1)
```