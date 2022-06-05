# getVehicleStates


```lua
NCs.Vehicles:getStates(vehicleId)
``` 

### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
local states = NCs.Vehicle:getStates(vehicle)
print(states.engineHealth)
print(states.vehicleBodyHealth)
print(states.dirtLevel)
print(states.engineState)
```