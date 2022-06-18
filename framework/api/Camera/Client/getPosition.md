```lua
NCS.Camera:getPosition()
```

Return the [NCS.Camera](./create) position vector3

### Examples

```lua
-- vector3
local position = camera:getPosition()
print(position)
```

```lua
-- float, float, float
local x, y, z = table.unpack(camera:getPosition())
print(x, y, z)
```
