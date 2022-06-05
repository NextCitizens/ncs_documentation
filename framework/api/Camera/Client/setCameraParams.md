# setCameraParams

```lua
NCs.Camera:setCameraParams(coords, rotationX, rotationY, rotationZ, fov)
```

### Examples
```lua
local camera = NCs.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)
camera:setCameraParams(vector3(78.45, 98.21, 54.17), 60.0, 90.0, 78.0, 30.0)
```