# setPosition

```lua
NCs.Ped:setPosition(entityId, coords)
```

### Arguments
| Argument | Type    | Optional | Default | Explanation                               |
|----------|---------|----------|---------|-------------------------------------------|
| entityId | number  | false    | -       | The ID of the entity.                     |
| coords   | vector3 | false    | -       | Position where you want to entity will be |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.setPosition(client, vector3(188.53, 78.69, 50.78))
```