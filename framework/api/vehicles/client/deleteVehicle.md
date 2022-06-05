# deleteVehicle

```lua
NCs.Vehicles:delete(vehicleId)
``` 

### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
RegisterCommand('deletevehicle', function()
    NCs.Vehicle:delete(vehicle)
end)
```