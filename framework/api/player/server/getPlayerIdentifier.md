# getPlayerIdentifier

```lua
NCs.Player:getIdentifier(playerSrc)
``` 

### Examples
```lua
RegisterCommand('name', function(source)
    local name = NCs.Player:getIdentifier(source)
    print(name) -- Will print the name of the player who execute the command.
end)
```