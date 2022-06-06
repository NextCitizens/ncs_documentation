# deleteObject

```lua
NCs.Objects:deleteObject(objectId)
```
Delete the specified object.

### Arguments
| Argument | Type    | Optional | Default | Explanation                              |
|----------|---------|----------|---------|------------------------------------------|
| objectId | number  | false    | -       | The ID of the object you want to delete. |

### Examples
```lua
object = NCs.Objects:createObject('prop_off_chair_01', position.x, position.y, position.z, heading, true)
NCs.Objects:deleteObject(object)
```