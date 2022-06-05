# setMaxHealth

```lua
NCs.Ped:setMaxHealth(pedId, value)
```

### Arguments
| Argument | Type   | Optional   | Default | Explanation                          |
|----------|--------|------------|---------|--------------------------------------|
| pedId    | number | false      | -       | The ID of the ped.                   |
| value    | number | false      | -       | The Max Health of the specified ped. |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.setMaxHealth(client, 80.0)
```