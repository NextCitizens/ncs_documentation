# getClosestPlayer  

```lua
NCs.Player:getClosest()
```

### Arguments
<span style="color : #FF7659;">No argument.</span>

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