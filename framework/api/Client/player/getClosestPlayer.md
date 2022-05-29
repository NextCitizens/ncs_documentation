# getClosest

```lua
NCs.Player:getClosest()
```

This function get the closet player.

## Returns
| Returns      | Type | Description                                                                                       |
|---------------|-----------|---------------------------------------------------------------------------------------------------|
| closestPlayer           | string    | The player closest executor                                                                            |
| playerDistance          | number    | Distance between closest player and executor                                                         |

## Example
```lua
local closestPlayer, playerDistance = NCs.Player:getClosest()

NCs.Player:showNotification(GetPlayerName(closetPlayer).." close to you at "..playerDistance.."m")
```