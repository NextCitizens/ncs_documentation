```lua
NCS.Camera:destroy()
```

Set the [NCS.Camera](./create) active or not active.

### Arguments

| Argument | Type    | Optional | Default | Explanation                     |
| -------- | ------- | -------- | ------- | ------------------------------- |
| state    | boolean | false    | -       | Set if camera is active or not. |

### Examples

```lua
local camera = NCS.Camera:create(vector3(780.14, 452.14, 54.12), 180.0)
camera:setActive(true)
```
