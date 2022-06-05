# freeze

```lua
NCs.Player:freeze(pedId, state)
```

### Arguments
| Argument     | Type    | Optional   | Default | Explanation                              |
|--------------|---------|------------|---------|------------------------------------------|
| pedId        | number  | false      | -       | The ID of the ped.                       |
| state        | boolean | false      | -       | True = Freeze Ped / False = Unfreeze Ped |

### Examples
```lua
NCs.Player:freeze(PlayerPedId(), true)
-- The player is now freeze
NCs.Player:freeze(PlayerPedId(), false)
-- The player is now unfreeze
```