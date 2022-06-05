# unlockVehicle

```lua
NCs.Vehicles:unlockVehicle(vehicleId)
``` 

### Arguments
| Argument  | Type   | Optional   | Default | Explanation           |
|-----------|--------|------------|---------|-----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |

### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
NCs.Vehicle:unlockVehicle(vehicle)
```