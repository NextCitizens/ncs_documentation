# getModel

```lua
NCs.Vehicles:getModel(vehicleId)
```
Get the model of the specifide vehicle.

### Arguments
| Argument  | Type   | Optional   | Default | Explanation           |
|-----------|--------|------------|---------|-----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |


### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
local model = NCs.Vehicle:getModel(vehicle)  
```