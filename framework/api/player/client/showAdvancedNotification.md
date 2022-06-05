# showAdvancedNotification

```lua
NCs.Player:showAdvancedNotification(icon, type, sender, title, text, colorBg)
```

### Arguments
| Argument | Type   | Optional   | Default | Explanation                              |
|----------|--------|------------|---------|------------------------------------------|
| icon     | string | false      | -       | The ICON of the notification             |
| type     | number | false      | -       | The TYPE of the notification             |
| sender   | string | false      | -       | The SENDER of the notification           |
| title    | string | false      | -       | The TITLE of the notification            |
| text     | string | false      | -       | The TEXT of the notification             |
| colorBg  | -      | false      | -       | The Color Background of the notification |

### Examples
```lua
NCs.Player:showAdvancedNotification('CHAR_AMMUNATION', 1, "sender", "title", "text")
```
![App Screenshot](https://cdn.discordapp.com/attachments/859092448427638804/982912710972960798/unknown.png)

List of notification icon [here](https://wiki.rage.mp/index.php?title=Notification_Pictures)