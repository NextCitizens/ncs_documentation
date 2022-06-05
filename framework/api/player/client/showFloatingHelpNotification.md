# showFloatingHelpNotification

```lua
NCs.Player:showFloatingHelpNotification(text, pos)
```

### Arguments
| Argument | Type    | Optional   | Default | Explanation                      |
|----------|---------|------------|---------|----------------------------------|
| text     | string  | false      | -       | Text to display                  |
| pos      | vector3 | false      | -       | The position of the notification |

### Examples
```lua
NCs.Player:showFloatingHelpNotification("Hello World!", GetEntityCoords(PlayerPedId()))
```
![App Screenshot](https://cdn.discordapp.com/attachments/859092448427638804/982914457820880896/unknown.png)