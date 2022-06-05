# setInvincible

```lua
NCs.Ped:setInvincible(entityId, state)
```

### Arguments
| Argument | Type    | Optional   | Default | Explanation                                |
|----------|---------|------------|---------|--------------------------------------------|
| pedId    | number  | false      | -       | The ID of the ped.                         |
| state    | boolean | false      | -       | True = Invincible / False = Not Invincible |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.setInvincible(client, true)
```