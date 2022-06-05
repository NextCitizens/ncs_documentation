# getPlayerName

```lua
NCs.Player:getName(playerSrc)
```

### Arguments
| Argument  | Type   | Optional   | Default | Explanation                |
|-----------|--------|------------|---------|----------------------------|
| playerSrc | number | false      | -       | The source to get his name |

### Examples
```lua
RegisterCommand('name', function(source)
    local name = NCs.Player:getName(source)
    print(name) -- Will print the name of the player who execute the command.
end)
```