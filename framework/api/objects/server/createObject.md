# createObject
Create a simple object in the world.
```lua
local object = NCs.Objects:createObject(prop, x, y, z, heading, freeze)
```
Return the object id.

### Arguments
| Argument | Type    | Optional | Default | Explanation                                      |
|----------|---------|----------|---------|--------------------------------------------------|
| x        | number  | false    | -       | The X position.                                  |
| y        | number  | false    | -       | The Y position.                                  |
| z        | number  | false    | -       | The Z position.                                  |
| heading  | number  | false    | -       | Heading of the object.                           |
| freeze   | boolean | false    | -       | True = Object Freeze / False = Object Not Freeze |

### Examples
```lua
local model = "prop_off_chair_01"
local position = GetEntityCoords(PlayerPedId())
local heading = GetEntityHeading(PlayerPedId())
NCs.Objects:createObject(model, position.x, position.y, position.z, heading, true)
```