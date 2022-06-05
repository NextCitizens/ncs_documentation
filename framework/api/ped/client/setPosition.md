# setPosition

```lua
NCs.Ped:setPosition(pedId, coords, keepVehicle)
```
Set the position to the specified ped.

### Arguments
| Argument    | Type    | Optional   | Default | Explanation                                            |
|-------------|---------|------------|---------|--------------------------------------------------------|
| pedId       | number  | false      | -       | The ID of the ped.                                     |
| coords      | vector3 | false      | -       | Position to teleport                                   |
| keepVehicle | boolean | false      | false   | True = Vehicle teleport / False = Vehicle not teleport |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.setPosition(client, vector3(789.45, 654.21, 54.12), true)
```