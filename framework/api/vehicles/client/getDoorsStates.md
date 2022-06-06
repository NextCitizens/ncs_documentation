# getDoorsStates

```lua
NCs.Vehicles:getDoorsStates(vehicleId)
```
Get the doors states of the vehicle

### Arguments
| Argument  | Type   | Optional   | Default | Explanation           |
|-----------|--------|------------|---------|-----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |


### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
local state = NCs.Vehicle:getDoorsStates(vehicle)  
```