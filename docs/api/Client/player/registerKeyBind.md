# registerKeyBind

```lua
NCs.Player:registerKeyBind(name, defaultKey, desc, callback)
```

This function register at key the callback function.

## Arguments
| Argument      | Type | Optional | Default | Description                                                                                       |
|---------------|-----------|----------|---------------|---------------------------------------------------------------------------------------------------|
| name           | string    | No       | -             | Name of the key bind                                                                            |
| defaultKey          | string    | No      | -          | Default key to execute callback                                                         |
| description          | string    | No      | -        | Description of the key bind                                                               |
| callback          | function    | No      | -        | Function executed when key triggered                                                               |

## Example
```lua
NCs.Player:registerKeyBind("Notification", "i", "Test of notification with keybind", function()
    NCs.Player:showNotification("Key i was triggerd")
    NCs.Player:showNotification("Notification Test")
end)
```