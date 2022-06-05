# getVehicleStates


```lua
NCs.Vehicles:getStates(vehicleId)
```

### Arguments
| Argument  | Type   | Optional   | Default | Explanation           |
|-----------|--------|------------|---------|-----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |

### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
local states = NCs.Vehicle:getStates(vehicle)
print(states.engineHealth)
print(states.vehicleBodyHealth)
print(states.dirtLevel)
print(states.engineState)
```