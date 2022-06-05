# setCameraActive

```lua
NCs.Camera:setCameraActive(bool)
```

### Arguments
| Argument      | Type    | Optional | Default | Explanation                     |
|---------------|---------|----------|---------|---------------------------------|
| bool          | boolean | false    | -       | Set if camera is active or not. |

### Examples
```lua
local camera = NCs.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)
camera:setCameraActive(true)
```