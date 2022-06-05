# setCameraParams

```lua
NCs.Camera:setCameraParams(coords, rotationX, rotationY, rotationZ, fov)
```

### Arguments
| Argument  | Type    | Optional | Default | Explanation                    |
|-----------|---------|----------|---------|--------------------------------|
| coords    | vector3 | false    | -       | The position of the camera.    |    
| rotationX | number  | false    | -       | X-Axis rotation of the camera. |
| rotationY | number  | false    | -       | Y-Axis rotation of the camera. |
| rotationZ | number  | false    | -       | Z-Axis rotation of the camera. |
| fov       | number  | false    | -       | Fov of the camera.             |

### Examples
```lua
local camera = NCs.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)
camera:setCameraParams(vector3(78.45, 98.21, 54.17), 60.0, 90.0, 78.0, 30.0)
```