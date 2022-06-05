# setFreeze

```lua
NCs.Ped:setFreeze(entityId, state)
```

### Arguments
| Argument | Type    | Optional | Default | Explanation                      |
|----------|---------|----------|---------|----------------------------------|
| entityId | number  | false    | -       | The ID of the entity.            |
| state    | boolean | false    | -       | True = Freeze / False = Unfreeze |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.setFreeze(client, true)
```