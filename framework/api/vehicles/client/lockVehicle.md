# lockVehicle

```lua
NCs.Vehicles:lockVehicle(vehicleId)
``` 
Lock door of the specified vehicle.

### Arguments
| Argument  | Type   | Optional   | Default | Explanation           |
|-----------|--------|------------|---------|-----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |

### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
NCs.Vehicle:lockVehicle(vehicle)
```