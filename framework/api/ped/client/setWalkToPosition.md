# setWalkToPosition

```lua
NCs.Ped:setWalkToPosition(pedId, coords, speed, duration, heading, distanceToSlide)
```

### Arguments
| Argument        | Type   | Optional   | Default | Explanation                         |
|-----------------|--------|------------|---------|-------------------------------------|
| pedId           | number | false      | -       | The ID of the ped.                  |
| coords          | string | false      | -       | Position where ped will go.         |
| speed           | string | false      | -       | Speed of the PED.                   |
| duration        | number | false      | -       | -                                   |
| heading         | number | false      | -       | Heading of the PED during distance. |
| distanceToSlide | number | false      | -       | -                                   |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.setWalkToPosition(client, vector3(54.67, 32.58, 51.24), 8.0, 2000, 90.0, 8.0)
```