# driveVehicle

```lua
NCs.Ped:driveVehicle(pedId)
```
Get if the ped is driving a vehicle.

### Arguments
| Argument | Type    | Optional | Default | Explanation        |
|----------|---------|----------|---------|--------------------|
| pedId    | number  | false    | -       | The ID of the ped. |

### Examples
```lua
local client = PlayerPedId()
local isDriving, vehicle = NCs.Ped:driveVehicle(client)
print(isDriving) -- Print true if the player is in the driver seat
print(vehicle) -- Print the id of the vehicle ped is driving
```