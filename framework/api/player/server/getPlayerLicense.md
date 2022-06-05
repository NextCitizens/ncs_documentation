# getPlayerLicense

```lua
NCs.Player:getLicense(playerSrc)
```

### Examples
```lua
RegisterCommand('name', function(source)
    local name = NCs.Player:getLicense(source)
    print(name) -- Will print the name of the player who execute the command.
end)
```