# getFuelTank

```lua
NCs.Vehicles:getFuelTank(vehicleId)
``` 
Get the fuel value of the specified vehicle.

### Arguments
| Argument  | Type   | Optional   | Default | Explanation           |
|-----------|--------|------------|---------|-----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |


### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
local fuel = NCs.Vehicle:getFuelTank(vehicle)  
```