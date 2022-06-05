# getPlayerName

```lua
NCs.Player:getName(playerSrc)
```

### Examples
```lua
RegisterCommand('name', function(source)
    local name = NCs.Player:getName(source)
    print(name) -- Will print the name of the player who execute the command.
end)
```