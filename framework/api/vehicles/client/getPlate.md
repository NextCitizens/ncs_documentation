# getPlate

```lua
NCs.Vehicles:getPlate(vehicleId)
``` 
Get the plate of the specified vehicle.

### Arguments
| Argument  | Type   | Optional   | Default | Explanation           |
|-----------|--------|------------|---------|-----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |


### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
local plate = NCs.Vehicle:getPlate(vehicle)  
```