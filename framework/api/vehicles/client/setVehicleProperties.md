# setVehicleProperties


```lua
NCs.Vehicles:setProperties(vehicleId, props)
``` 

### Arguments
| Argument  | Type   | Optional   | Default | Explanation          |
|-----------|--------|------------|---------|----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |
| props     | table  | false      | -       | Props to put         |

### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
NCs.Vehicle:setProperties(vehicle, { 
    bodyHealth = 150.0,
    dirtLevel = 10.0,
    fuelLevel = 50.0 -- Use NCs.Vehicle:setFuel instead.
})
```