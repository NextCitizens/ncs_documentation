# setCameraPointAtCoords

```lua
NCs.Camera:setCameraPointAtCoords(coords)
```
Set where the camera aim.

### Arguments
| Argument  | Type    | Optional | Default | Explanation                             |
|-----------|---------|----------|---------|-----------------------------------------|
| coords    | vector3 | false    | -       | The position where the camera will aim. |
### Examples
```lua
local camera = NCs.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)
camera:setCameraPointAtCoords(vector3(20.45, 87.65, 64.32))
```