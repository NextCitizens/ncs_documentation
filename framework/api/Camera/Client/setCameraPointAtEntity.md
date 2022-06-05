# setCameraPointAtEntity

```lua
NCs.Camera:setCameraPointAtEntity(entityId, offsetX, offsetY, offsetZ)
```

### Examples
```lua
local camera = NCs.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)
camera:setCameraPointAtEntity(PlayerPedId(), 0.0, 0.0, 0.0)
```