# setPosition

```lua
NCS.Camera:setPosition(position)
```

Change the coords of the specified [NCS.Camera](./create).

### Arguments

| Argument | Type    | Optional | Default | Explanation                 |
| -------- | ------- | -------- | ------- | --------------------------- |
| position | vector3 | false    | -       | The position of the camera. |

### Examples

```lua
local camera = NCS.Camera:create(vector3(0, 0, 0), 180.0)
camera:setPosition(vector3(78.45, 98.21, 54.17))
```
