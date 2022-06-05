# leaveVehicle

```lua
NCs.Ped:leaveVehicle(pedId, instant)
```

### Arguments
| Argument | Type    | Optional   | Default | Explanation                            |
|----------|---------|------------|---------|----------------------------------------|
| pedId    | number  | false      | -       | The ID of the ped.                     |
| instant  | boolean | false      | -       | If player goes instant out of vehicle. |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.leaveVehicle(client, false)
```