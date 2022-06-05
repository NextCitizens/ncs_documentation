# lockVehicle

```lua
NCs.Vehicles:lockVehicle(vehicleId)
``` 

### Arguments
| Argument  | Type   | Optional   | Default | Explanation           |
|-----------|--------|------------|---------|-----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |

### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
NCs.Vehicle:lockVehicle(vehicle)
```