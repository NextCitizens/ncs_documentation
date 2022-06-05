# createObject
Create a simple object in the world.
```lua
local object = NCs.Objects:createObject(prop, x, y, z, heading, freeze)
```
Return the object id.

### Examples
```lua
local model = "prop_off_chair_01"
local position = GetEntityCoords(PlayerPedId())
local heading = GetEntityHeading(PlayerPedId())
NCs.Objects:createObject(model, position.x, position.y, position.z, heading, true)
```