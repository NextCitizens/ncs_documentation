# getPlayerIdentifier

```lua
NCs.Player:getIdentifier(playerSrc)
``` 

### Arguments
| Argument  | Type   | Optional   | Default | Explanation                      |
|-----------|--------|------------|---------|----------------------------------|
| playerSrc | number | false      | -       | The source to get his identifier |

### Examples
```lua
RegisterCommand('name', function(source)
    local name = NCs.Player:getIdentifier(source)
    print(name) -- Will print the name of the player who execute the command.
end)
```