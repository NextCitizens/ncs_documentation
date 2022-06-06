# getPlayerIdentifiers

```lua
NCs.Player:getIdentifiers(playerSrc)
``` 

### Arguments
| Argument  | Type   | Optional   | Default | Explanation                       |
|-----------|--------|------------|---------|-----------------------------------|
| playerSrc | number | false      | -       | The source to get his identifiers |

### Examples
```lua
RegisterCommand('name', function(source)
    local identifiers = NCs.Player:getIdentifiers(source)
    print(identifiers) -- Will print the name of the player who execute the command.
end)
```