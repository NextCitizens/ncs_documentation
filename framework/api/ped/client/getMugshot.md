# getMugshot

```lua
NCs.Ped:getMugshot(pedId, transparentBackground)
```

### Arguments
| Argument              | Type      | Optional   | Default | Explanation                                               |
|-----------------------|-----------|------------|---------|-----------------------------------------------------------|
| pedId                 | number    | false      | -       | The ID of the ped.                                        |
| transparentBackground | boolean   | false      | -       | True = Transparent Background / False = Normal Background |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.getMugshot(client, false)
```