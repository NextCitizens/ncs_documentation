# getClosestPlayer  

```lua
NCs.Player:getClosest()
```
Get the closest player.

### Arguments
No argument.

### Examples
```lua
local player, distance = NCs.Player.getClosest()
NCs.setFreeze(player, true)
if (distance > 10.0) then
    print("The player is more than 10 meters away!")
else
    print("The player isn't more than 10 meters away!")
end 
```