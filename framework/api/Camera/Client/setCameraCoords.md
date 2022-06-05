# setCameraCoords

```lua
NCs.Camera:setCameraCoords(coords)
```

### Arguments
| Argument | Type    | Optional | Default | Explanation                 |
|----------|---------|----------|---------|-----------------------------|
| coords   | vector3 | false    | -       | The position of the camera. |

### Examples
```lua
local camera = NCs.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)
camera:setCameraCoords(vector3(78.45, 98.21, 54.17))
```