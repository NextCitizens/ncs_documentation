# getPlayerIdentifiers

```lua
NCs.Player:getIdentifiers(playerSrc)
``` 

### Examples
```lua
RegisterCommand('name', function(source)
    local name = NCs.Player:getIdentifiers(source)
    print(name) -- Will print the name of the player who execute the command.
end)
```