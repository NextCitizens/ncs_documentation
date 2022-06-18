# create

```lua
NCS.Camera:create(coords, heading)
```

Create a [NCS.Camera](./create) camera.

### Arguments

| Argument | Type    | Optional | Default | Explanation                 |
| -------- | ------- | -------- | ------- | --------------------------- |
| coords   | vector3 | false    | -       | The position of the camera. |
| heading  | number  | true     | -       | The heading of the camera.  |

### Returns

Camera class

### Examples

```lua
local camera = NCS.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)
```
