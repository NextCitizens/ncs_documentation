# setParams

```lua
NCS.Camera:setParams(position, rotationX, rotationY, rotationZ, fov)
```

Change params of the specified [NCS.Camera](./create.md).

### Arguments

| Argument  | Type    | Optional | Default | Explanation                    |
| --------- | ------- | -------- | ------- | ------------------------------ |
| position  | vector3 | false    | -       | The position of the camera.    |
| rotationX | number  | false    | -       | X-Axis rotation of the camera. |
| rotationY | number  | false    | -       | Y-Axis rotation of the camera. |
| rotationZ | number  | false    | -       | Z-Axis rotation of the camera. |
| fov       | number  | false    | -       | Fov of the camera.             |

### Examples

```lua
local camera = NCS.Camera:create(vector3(0, 0, 0), 180.0)
camera:setParams(vector3(78.45, 98.21, 54.17), 60.0, 90.0, 78.0, 30.0)
```
