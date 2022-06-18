```lua
NCS.Camera:setPointAtCoords(position)
```

Set where the [NCS.Camera](./create.md) aim.

### Arguments

| Argument | Type    | Optional | Default | Explanation                             |
| -------- | ------- | -------- | ------- | --------------------------------------- |
| position | vector3 | false    | -       | The position where the camera will aim. |

### Examples

```lua
local camera = NCS.Camera:create(vector3(780.14, 452.14, 54.12), 180.0)
camera:setPointAtCoords(vector3(20.45, 87.65, 64.32))
```
