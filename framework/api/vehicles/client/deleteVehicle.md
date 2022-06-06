# deleteVehicle

```lua
NCs.Vehicles:delete(vehicleId)
``` 
Delete the specified vehicle.

### Arguments
| Argument  | Type   | Optional   | Default | Explanation           |
|-----------|--------|------------|---------|-----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |


### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
RegisterCommand('deletevehicle', function()
    NCs.Vehicle:delete(vehicle)
end)
```