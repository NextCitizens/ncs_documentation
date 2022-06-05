# getPlayerLicense

```lua
NCs.Player:getLicense(playerSrc)
```

### Arguments
| Argument  | Type   | Optional   | Default | Explanation             |
|-----------|--------|------------|---------|-------------------------|
| playerSrc | number | false      | -       | The source to get his license |

### Examples
```lua
RegisterCommand('name', function(source)
    local license = NCs.Player:getLicense(source)
    print(license) -- Will print the name of the player who execute the command.
end)
```