# spawn

```lua
NCs.Player:spawn(coords, callback)
```

### Arguments
| Argument | Type     | Optional   | Default | Explanation                           |
|----------|----------|------------|---------|---------------------------------------|
| coords   | vector3  | false      | -       | The position where the player will be |
| callback | function | false      | -       | -                                     |

### Examples
```lua
RegisterCommand('spawn', function(source, args)
    local x, y, z = args[1], args[2], args[3]
    NCs.Player:spawn(vector3(x,y,z))
end)
```