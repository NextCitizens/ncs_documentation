# spawn

```lua
NCs.Player:spawn(coords, callback)
```

### Examples
```lua
RegisterCommand('spawn', function(source, args)
    local x, y, z = args[1], args[2], args[3]
    NCs.Player:spawn(vector3(x,y,z))
end)
```