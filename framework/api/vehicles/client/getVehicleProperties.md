# getVehicleProperties


```lua
NCs.Vehicles:getProperties(vehicleId)
``` 
Get the properties of the specified vehicles.

### Arguments
| Argument  | Type   | Optional   | Default | Explanation           |
|-----------|--------|------------|---------|-----------------------|
| vehicleId | number | false      | -       | The ID of the vehicle |

### Returns Table

TODO : All the properties


### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
local properties = NCs.Vehicle:getProperties(vehicle)
```