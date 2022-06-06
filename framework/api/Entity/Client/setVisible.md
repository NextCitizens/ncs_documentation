# setVisible

```lua
NCs.Ped:setVisible(entityId, state)
```
Set the visible state of the specified entity.

### Arguments
| Argument | Type    | Optional | Default | Explanation                        |
|----------|---------|----------|---------|------------------------------------|
| entityId | number  | false    | -       | The ID of the entity.              |
| state    | vector3 | false    | -       | True = Visible / False = Invisible |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.setVisible(client, false)
```