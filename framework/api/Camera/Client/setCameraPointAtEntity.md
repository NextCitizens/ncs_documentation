# setCameraPointAtEntity

```lua
NCs.Camera:setCameraPointAtEntity(entityId, offsetX, offsetY, offsetZ)
```

### Arguments
| Argument | Type   | Optional | Default | Explanation                                     |
|----------|--------|----------|---------|-------------------------------------------------|
| entityId | number | false    | -       | The ID of the entity where the camera will aim. |
| offsetX  | number | false    | -       | -                                               |
| offsetY  | number | false    | -       | -                                               |
| offsetZ  | number | false    | -       | -                                               |


### Examples
```lua
local camera = NCs.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)
camera:setCameraPointAtEntity(PlayerPedId(), 0.0, 0.0, 0.0)
```