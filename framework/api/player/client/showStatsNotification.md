# showStatsNotification

```lua
NCs.Player:showStatsNotification(icon, title, subTitle, oldProgress, newProgress)
```

### Arguments
| Argument       | Type   | Optional   | Default | Explanation                      |
|----------------|--------|------------|---------|----------------------------------|
| icon           | string | false      | -       | The icon of the notification     |
| title          | string | false      | -       | The title of the notification    |
| subTitle       | string | false      | -       | The subtitle of the notification |
| oldProgress    | number | false      | -       | Value between 0 - 100            |
| newProgress    | number | false      | -       | Value between 0 - 100            |

### Examples
```lua
RegisterNetEvent('onPlayerKill')
AddEventHandler('onPlayerKill', function()
  local mugshot_txd = NCs.Ped.getMugshot(PlayerPedId(), false)
  NCs.Player:showStatsNotification(mugshot_txd, 'Kills', ('%s/100'):format(actualKills), actualKills, actualKills+1)
end)
```
