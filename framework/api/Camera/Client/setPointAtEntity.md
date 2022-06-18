```lua
NCS.Camera:setPointAtEntity(entityId, offsetX, offsetY, offsetZ)
```

Set at what entity the specified aim.

### Arguments

| Argument | Type   | Optional | Default | Explanation                                     |
| -------- | ------ | -------- | ------- | ----------------------------------------------- |
| entityId | number | false    | -       | The ID of the entity where the camera will aim. |
| offsetX  | number | true     | -       | -                                               |
| offsetY  | number | true     | -       | -                                               |
| offsetZ  | number | true     | -       | -                                               |

### Examples

```lua
local camera = NCS.Camera:create(vector3(780.14, 452.14, 54.12), 180.0)
camera:setPointAtEntity(PlayerPedId(), 0.0, 0.0, 0.0)
```
