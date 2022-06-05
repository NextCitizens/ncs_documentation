# createCamera

```lua
NCs.Camera:createCamera(cameraCoords, cameraHeading)
```
This function create a simple camera.

### Arguments
| Argument      | Type    | Optional | Default | Explanation                 |
|---------------|---------|----------|---------|-----------------------------|
| cameraCoords  | vector3 | false    | -       | The position of the camera. |    
| cameraHeading | number  | false    | -       | The heading of the camera.  |

### Examples
```lua
local camera = NCs.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)
```